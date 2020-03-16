import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { tokenNotExpired } from 'angular2-jwt';
import { FlashMessagesService } from 'angular2-flash-messages';
import { MainService } from './main.service';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable()
export class NewsFeedService {
  token: any;
  serverAddress: String;

  constructor(
    private http: HttpClient,
    private flashMessagesService: FlashMessagesService,
    private mainService: MainService,
  ) {
    this.serverAddress = this.mainService.getServerAddress();
   }

   addFeed(newFeed):Observable<any> {
     let headers = new HttpHeaders;
     headers.append('Content-Type', 'application/json');
     this.token = localStorage.getItem('id_token');
     headers.append('Authorization', this.token);
     return this.http.post<any>( this.serverAddress + '/newsFeeds/addFeed', newFeed, {headers: headers})
       .pipe(map(res => res));
   }

   deleteFeed(feed):Observable<any> {
     let headers = new HttpHeaders;
     headers.append('Content-Type', 'application/json');
     this.token = localStorage.getItem('id_token');
     headers.append('Authorization', this.token);
     return this.http.post<any>( this.serverAddress + '/newsFeeds/deleteFeed', feed, {headers: headers})
       .pipe(map(res => res));
   }




   getAllFeed():Observable<any> {
     let headers = new HttpHeaders;
     headers.append('Content-Type', 'application/json');
     this.token = localStorage.getItem('id_token');
     headers.append('Authorization', this.token);
     return this.http.get<any>( this.serverAddress + '/newsFeeds/getAllFeed', {headers: headers})
       .pipe(map(res => res));
   }

   handleError(error: any) {
     this.flashMessagesService.show(error.statusText || "Server Error. Contact admin if error persists", { cssClass: 'alert-danger', timeout: 2500 });
   }




}