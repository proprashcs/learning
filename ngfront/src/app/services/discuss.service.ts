import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FlashMessagesService } from 'angular2-flash-messages';
import { MainService } from './main.service';
import { map } from 'rxjs/operators';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs';

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

   addQuestion(question):Observable<any> {
     return this.http.post<any>( this.serverAddress + '/questions/addQuestion', question)
       .pipe(map(res => res));
   }

   getQuestionCount(questionInfo):Observable<any> {
    
     return this.http.post<any>( this.serverAddress + '/questions/countQuestions', questionInfo)
       .pipe(map(res => res));
   }

   getQuestions(questionInfo):Observable<any> {
     
     return this.http.post<any>( this.serverAddress + '/questions', questionInfo)
       .pipe(map(res => res));
   }

   getQuestionById(question):Observable<any> {
     
     return this.http.post<any>( this.serverAddress + '/questions/getQuestionById', question)
       .pipe(map(res => res));
   }

   getQuestionByUsername(question):Observable<any> {
    
     return this.http.post<any>( this.serverAddress + '/questions/getQuestionByUsername', question)
       .pipe(map(res => res));
   }

   searchQuestion(question):Observable<any> {

     return this.http.post<any>( this.serverAddress + '/questions/searchQuestions', question)
       .pipe(map(res => res));
   }

   editQuestion(question):Observable<any> {
     return this.http.post<any>( this.serverAddress + '/questions/editQuestion', question)
       .pipe(map(res => res));
   }

   deleteQuestion(question):Observable<any> {
     
     return this.http.post<any>( this.serverAddress + '/questions/deleteQuestion', question)
       .pipe(map(res => res));
   }

   getAnswerByQuestion(question):Observable<any> {
   
     return this.http.post<any>( this.serverAddress + '/answers/getAnswerByQuestion', question)
       .pipe(map(res => res));
   }

   getAnswerById(answer):Observable<any> {
     
     return this.http.post<any>( this.serverAddress + '/answers/getAnswerById', answer)
       .pipe(map(res => res));
   }

   addAnswer(answer):Observable<any> {
    
     return this.http.post<any>( this.serverAddress + '/answers/addAnswer', answer)
       .pipe(map(res => res));
   }

   editAnswer(answer):Observable<any> {
    
     return this.http.post<any>( this.serverAddress + '/answers/editAnswer', answer)
       .pipe(map(res => res));
   }

   deleteAnswer(answer):Observable<any> {

     return this.http.post<any>( this.serverAddress + '/answers/deleteAnswer', answer)
       .pipe(map(res => res));
   }

   handleError(error: any) {
     this.flashMessagesService.show(error.statusText || "Server Error. Contact admin if error persists", { cssClass: 'alert-danger', timeout: 2500 });
   }

}
