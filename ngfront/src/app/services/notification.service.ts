import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FlashMessagesService } from 'angular2-flash-messages';
import { MainService } from './main.service';
import { map } from 'rxjs/operators';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs';

@Injectable()
export class NotificationService {
  serverAddress: String;
  token: any;

  constructor(
    private http: HttpClient,
    private flashMessagesService: FlashMessagesService,
    private mainService: MainService,
  ) {
    this.serverAddress = this.mainService.getServerAddress();
  }

  getUnreadNotifications(userData):Observable<any> {
    let headers = new HttpHeaders;
    headers.append('Content-Type', 'application/json');
    return this.http.post<any>( this.serverAddress + '/notifications/getUnreadNotifications', userData, {headers: headers})
      .pipe(map(res => res));
  }

  markAsRead(data):Observable<any> {
    let headers = new HttpHeaders;
    headers.append('Content-Type', 'application/json');
    return this.http.post<any>( this.serverAddress + '/notifications/markAsRead', data, {headers: headers})
      .pipe(map(res => res));
  }

  handleError(error: any) {
    this.flashMessagesService.show(error.statusText || "Server Error. Contact admin if error persists", { cssClass: 'alert-danger', timeout: 2500 });
  }

}
