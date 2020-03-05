import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FlashMessagesService } from 'angular2-flash-messages';
import { MainService } from './main.service';
import { map } from 'rxjs/operators';
import 'rxjs/add/operator/catch';

@Injectable()
export class CodeService {

  serverAddress: String;
  token: any;

  constructor(
    private http: HttpClient,
    private flashMessagesService: FlashMessagesService,
    private mainService: MainService,
  ) {
    this.serverAddress = this.mainService.getServerAddress();
   }

   submitCode(codeObj) {
     let headers = new HttpHeaders;
     headers.append('Content-Type', 'application/json');
     this.token = localStorage.getItem('id_token');
     headers.append('Authorization', this.token);
     return this.http.post( this.serverAddress + '/codes/submitCode', codeObj, {headers: headers})
       .pipe(map(res => res));
   }

   getUserSubmissions() {
     let headers = new HttpHeaders;
     headers.append('Content-Type', 'application/json');
     this.token = localStorage.getItem('id_token');
     headers.append('Authorization', this.token);
     return this.http.get( this.serverAddress + '/codes/getUserSubmissions', {headers: headers})
       .pipe(map(res => res));
   }

   getRecentSubmissions() {
     let headers = new HttpHeaders;
     headers.append('Content-Type', 'application/json');
     return this.http.get( this.serverAddress + '/codes/getRecentSubmissions', {headers: headers})
       .pipe(map(res => res));
   }
   getSubmissionById(submission) {
     let headers = new HttpHeaders;
     headers.append('Content-Type', 'application/json');
     return this.http.post( this.serverAddress + '/codes/getSubmissionById', submission, {headers: headers})
       .pipe(map(res => res));
   }

   searchCodes(searchObj) {
     let headers = new HttpHeaders;
     headers.append('Content-Type', 'application/json');
     return this.http.post( this.serverAddress + '/codes/searchCodes', searchObj, {headers: headers})
       .pipe(map(res => res));
   }

   countCodes(searchObj) {
     let headers = new HttpHeaders;
     headers.append('Content-Type', 'application/json');
     return this.http.post( this.serverAddress + '/codes/countCodes', searchObj, {headers: headers})
       .pipe(map(res => res));
   }

   deleteCode(codeObj) {
     let headers = new HttpHeaders;
     headers.append('Content-Type', 'application/json');
     this.token = localStorage.getItem('id_token');
     headers.append('Authorization', this.token);
     return this.http.post( this.serverAddress + '/codes/deleteCode', codeObj, {headers: headers})
       .pipe(map(res => res));
   }

   handleError(error: any) {
     this.flashMessagesService.show(error.statusText || "Server Error. Contact admin if error persists", { cssClass: 'alert-danger', timeout: 2500 });
   }

}
