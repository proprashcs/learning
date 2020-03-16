import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FlashMessagesService } from 'angular2-flash-messages';
import { MainService } from './main.service';
import { map } from 'rxjs/operators';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs';

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

   submitCode(codeObj):Observable<any> {
     let headers = new HttpHeaders;
     headers.append('Content-Type', 'application/json');
     this.token = localStorage.getItem('id_token');
     headers.append('Authorization', this.token);
     return this.http.post<any>( this.serverAddress + '/codes/submitCode', codeObj, {headers: headers})
       .pipe(map(res => res));
   }

   getUserSubmissions():Observable<any> {
     let headers = new HttpHeaders;
     headers.append('Content-Type', 'application/json');
     this.token = localStorage.getItem('id_token');
     headers.append('Authorization', this.token);
     return this.http.get<any>( this.serverAddress + '/codes/getUserSubmissions', {headers: headers})
       .pipe(map(res => res));
   }

   getRecentSubmissions():Observable<any> {
     let headers = new HttpHeaders;
     headers.append('Content-Type', 'application/json');
     return this.http.get( this.serverAddress + '/codes/getRecentSubmissions', {headers: headers})
       .pipe(map(res => res));
   }
   getSubmissionById(submission) {
     let headers = new HttpHeaders;
     headers.append('Content-Type', 'application/json');
     return this.http.post<any>( this.serverAddress + '/codes/getSubmissionById', submission, {headers: headers})
       .pipe(map(res => res));
   }

   searchCodes(searchObj):Observable<any> {
     let headers = new HttpHeaders;
     headers.append('Content-Type', 'application/json');
     return this.http.post<any>( this.serverAddress + '/codes/searchCodes', searchObj, {headers: headers})
       .pipe(map(res => res));
   }

   countCodes(searchObj):Observable<any> {
     let headers = new HttpHeaders;
     headers.append('Content-Type', 'application/json');
     return this.http.post<any>( this.serverAddress + '/codes/countCodes', searchObj, {headers: headers})
       .pipe(map(res => res));
   }

   deleteCode(codeObj): Observable<any> {
     let headers = new HttpHeaders;
     headers.append('Content-Type', 'application/json');
     this.token = localStorage.getItem('id_token');
     headers.append('Authorization', this.token);
     return this.http.post<any>( this.serverAddress + '/codes/deleteCode', codeObj, {headers: headers})
       .pipe(map(res => res));
   }

   handleError(error: any) {
     this.flashMessagesService.show(error.statusText || "Server Error. Contact admin if error persists", { cssClass: 'alert-danger', timeout: 2500 });
   }

}
