import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { tokenNotExpired } from 'angular2-jwt';
import { JwtHelperService  } from '@auth0/angular-jwt';
import { FlashMessagesService } from 'angular2-flash-messages';
import { MainService } from './main.service';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable()
export class FeedbackService {
  token: any;
  serverAddress: String;

  constructor(
    private http: HttpClient,
    private flashMessagesService: FlashMessagesService,
    private mainService: MainService,
  ) {
    this.serverAddress = this.mainService.getServerAddress();
   }

   addFeedback(newFeedback):Observable<any> {
     let headers = new HttpHeaders;
     headers.append('Content-Type', 'application/json');
     this.token = localStorage.getItem('id_token');
     headers.append('Authorization', this.token);
     return this.http.post<any>( this.serverAddress + '/feedbacks/addFeedback', newFeedback, {headers: headers})
       .pipe(map(res => res));
   }

   getAllFeedback():Observable<any> {
     let headers = new HttpHeaders;
     headers.append('Content-Type', 'application/json');
     this.token = localStorage.getItem('id_token');
     headers.append('Authorization', this.token);
     return this.http.get<any>( this.serverAddress + '/feedbacks/getAllFeedback', {headers: headers})
       .pipe(map(res => res));
   }

   replyToFeedback(newReply):Observable<any> {
     let headers = new HttpHeaders;
     headers.append('Content-Type', 'application/json');
     this.token = localStorage.getItem('id_token');
     headers.append('Authorization', this.token);
     return this.http.post<any>( this.serverAddress + '/feedbacks/replyToFeedback', newReply, {headers: headers})
       .pipe(map(res => res));
   }
   getFeedbackByUsername():Observable<any> {
     let headers = new HttpHeaders;
     headers.append('Content-Type', 'application/json');
     this.token = localStorage.getItem('id_token');
     headers.append('Authorization', this.token);
     return this.http.get<any>( this.serverAddress + '/feedbacks/getFeedbackByUsername', {headers: headers})
       .pipe(map(res => res));
   }


   handleError(error: any) {
     this.flashMessagesService.show(error.statusText || "Server Error. Contact admin if error persists", { cssClass: 'alert-danger', timeout: 2500 });
   }
}
