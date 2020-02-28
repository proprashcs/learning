import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { MainService } from './main.service';
import 'rxjs/add/operator/map';

@Injectable()
export class CommentService {

  serverAddress: String;
  token: any;

  constructor(
    private http: Http,
    private mainService: MainService,
  ) {
      this.serverAddress = this.mainService.getServerAddress();
   }

   addComment(newComment) {
     const headers = new Headers;
     headers.append("Content-Type", "application/json");
     this.token = localStorage.getItem('id_token');
     headers.append('Authorization', this.token);
     return this.http.post('http://' + this.serverAddress + '/comments/addComment', newComment, {headers: headers})
       .map(res => res.json());
   }

   searchComments(commentData) {
     const headers = new Headers;
     headers.append("Content-Type", "application/json");
     return this.http.post('http://' + this.serverAddress + '/comments/searchComments', commentData, {headers: headers})
       .map(res => res.json());
   }

}
