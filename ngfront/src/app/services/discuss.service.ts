import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FlashMessagesService } from 'angular2-flash-messages';
import { MainService } from './main.service';
import { map } from 'rxjs/operators';
import 'rxjs/add/operator/catch';

@Injectable()
export class DiscussService {
  serverAddress: String;
  token: any;

  constructor(
    private http: HttpClient,
    private flashMessagesService: FlashMessagesService,
    private mainService: MainService,
  ) {
      this.serverAddress = this.mainService.getServerAddress();
   }

   addQuestion(question) {
     let headers = new HttpHeaders;
     headers.append('Content-Type', 'application/json');
     this.token = localStorage.getItem('id_token');
     headers.append('Authorization', this.token);
     return this.http.post( this.serverAddress + '/questions/addQuestion', question, {headers: headers})
       .pipe(map(res => res));
   }

   getQuestionCount(questionInfo) {
     let headers = new HttpHeaders;
     headers.append('Content-Type', 'application/json');
     return this.http.post( this.serverAddress + '/questions/countQuestions', questionInfo, {headers: headers})
       .pipe(map(res => res));
   }

   getQuestions(questionInfo) {
     let headers = new HttpHeaders;
     headers.append('Content-Type', 'application/json');
     return this.http.post( this.serverAddress + '/questions', questionInfo, {headers: headers})
       .pipe(map(res => res));
   }

   getQuestionById(question) {
     let headers = new HttpHeaders;
     headers.append('Content-Type', 'application/json');
     return this.http.post( this.serverAddress + '/questions/getQuestionById', question, {headers: headers})
       .pipe(map(res => res));
   }

   getQuestionByUsername(question) {
     let headers = new HttpHeaders;
     headers.append('Content-Type', 'application/json');
     return this.http.post( this.serverAddress + '/questions/getQuestionByUsername', question, {headers: headers})
       .pipe(map(res => res));
   }

   searchQuestion(question) {
     let headers = new HttpHeaders;
     headers.append('Content-Type', 'application/json');
     return this.http.post( this.serverAddress + '/questions/searchQuestions', question, {headers: headers})
       .pipe(map(res => res));
   }

   editQuestion(question) {
     let headers = new HttpHeaders;
     headers.append('Content-Type', 'application/json');
     this.token = localStorage.getItem('id_token');
     headers.append('Authorization', this.token);
     return this.http.post( this.serverAddress + '/questions/editQuestion', question, {headers: headers})
       .pipe(map(res => res));
   }

   deleteQuestion(question) {
     let headers = new HttpHeaders;
     headers.append('Content-Type', 'application/json');
     this.token = localStorage.getItem('id_token');
     headers.append('Authorization', this.token);
     return this.http.post( this.serverAddress + '/questions/deleteQuestion', question, {headers: headers})
       .pipe(map(res => res));
   }

   getAnswerByQuestion(question) {
     let headers = new HttpHeaders;
     headers.append('Content-Type', 'application/json');
     return this.http.post( this.serverAddress + '/answers/getAnswerByQuestion', question, {headers: headers})
       .pipe(map(res => res));
   }

   getAnswerById(answer) {
     let headers = new HttpHeaders;
     headers.append('Content-Type', 'application/json');
     return this.http.post( this.serverAddress + '/answers/getAnswerById', answer, {headers: headers})
       .pipe(map(res => res));
   }

   addAnswer(answer) {
     let headers = new HttpHeaders;
     headers.append('Content-Type', 'application/json');
     this.token = localStorage.getItem('id_token');
     headers.append('Authorization', this.token);
     return this.http.post( this.serverAddress + '/answers/addAnswer', answer, {headers: headers})
       .pipe(map(res => res));
   }

   editAnswer(answer) {
     let headers = new HttpHeaders;
     headers.append('Content-Type', 'application/json');
     this.token = localStorage.getItem('id_token');
     headers.append('Authorization', this.token);
     return this.http.post( this.serverAddress + '/answers/editAnswer', answer, {headers: headers})
       .pipe(map(res => res));
   }

   deleteAnswer(answer) {
     let headers = new HttpHeaders;
     headers.append('Content-Type', 'application/json');
     this.token = localStorage.getItem('id_token');
     headers.append('Authorization', this.token);
     return this.http.post( this.serverAddress + '/answers/deleteAnswer', answer, {headers: headers})
       .pipe(map(res => res));
   }

   handleError(error: any) {
     this.flashMessagesService.show(error.statusText || "Server Error. Contact admin if error persists", { cssClass: 'alert-danger', timeout: 2500 });
   }

}
