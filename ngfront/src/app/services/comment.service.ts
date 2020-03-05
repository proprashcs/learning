import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MainService } from './main.service';
import { map } from 'rxjs/operators';

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

   addComment(newComment) {
     const headers = new HttpHeaders;
     headers.append("Content-Type", "application/json");
     this.token = localStorage.getItem('id_token');
     headers.append('Authorization', this.token);
     return this.http.post( this.serverAddress + '/comments/addComment', newComment, {headers: headers})
       .pipe(map(res => res));
   }

   searchComments(commentData) {
     const headers = new HttpHeaders;
     headers.append("Content-Type", "application/json");
     return this.http.post( this.serverAddress + '/comments/searchComments', commentData, {headers: headers})
       .pipe(map(res => res));
   }

}
