import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MainService } from './main.service';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable()
export class CommentService {

  serverAddress: String;
  token: any;

  constructor(
    private http: HttpClient,
    private mainService: MainService,
  ) {
      this.serverAddress = this.mainService.getServerAddress();
   }

   addComment(newComment): Observable<any> {
  
     return this.http.post<any>( this.serverAddress + '/comments/addComment', newComment)
       .pipe(map(res => res));
   }

   searchComments(commentData):Observable<any> {
  
     return this.http.post<any>( this.serverAddress + '/comments/searchComments', commentData)
       .pipe(map(res => res));
   }

}
