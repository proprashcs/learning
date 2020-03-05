import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tokenNotExpired } from 'angular2-jwt';
import { FlashMessagesService } from 'angular2-flash-messages';
import { MainService } from './main.service';
import { map } from 'rxjs/operators';
@Injectable()
export class AuthService {

  authToken: any;
  user: any;
  static userRole: String;
  token: any;
  serverAddress: String;

  constructor(
    private HttpClient : HttpClient ,
    private flashMessagesService: FlashMessagesService,
    private mainService: MainService,
  ) {
      this.serverAddress = this.mainService.getServerAddress();
  }

  registerUser(user:any) {
    let headers = new HttpHeaders;
    headers.append('Content-Type', 'application/json');
    return this.HttpClient .post( this.serverAddress + '/users/register', user, {headers: headers })
      .pipe(map(res => res));
  }

  authenticateUser(user) {
    let headers = new HttpHeaders;
    headers.append('Content-Type', 'application/json');
    return this.HttpClient .post( this.serverAddress + '/users/authenticate', user, {headers: headers})
      .pipe(map(res => res));
  }

  storeUserInfo(token, user) {
    localStorage.setItem('id_token', token);
    localStorage.setItem('user', JSON.stringify(user));
    this.authToken = token;
    this.user = user;
  }

  userLogout() {
    this.authToken = null;
    this.user = null;
    localStorage.removeItem('id_token');
    localStorage.removeItem('user');
  }

  authProfile(user) {
    let headers = new HttpHeaders;
    headers.append('Content-Type', 'application/json');
    return this.HttpClient .post( this.serverAddress + '/users/profile', user, {headers: headers})
      .pipe(map(res => res));
  }

  getToken() {
    const token = localStorage.getItem('id_token');
    this.authToken = token;
  }

  getUser() {
    const user = JSON.parse(localStorage.getItem('user'));
    return user;
  }

  loggedIn() {
    return tokenNotExpired('id_token');
  }

  authUsername(user) {
    let headers = new HttpHeaders;
    headers.append('Content-Type', 'application/json');
    return this.HttpClient .post( this.serverAddress + '/users/forgotPassword/username', user, {headers: headers})
      .pipe(map(res => res));
  }

  changePassword(user) {
    let headers = new HttpHeaders;
    headers.append('Content-Type', 'application/json');
    return this.HttpClient .post( this.serverAddress + '/users/forgotPassword/answer', user, {headers: headers})
      .pipe(map(res => res));
  }

  updateProfile(user) {
    let headers = new HttpHeaders;
    headers.append('Content-Type', 'application/json');
    this.token = localStorage.getItem('id_token');
    headers.append('Authorization', this.token);
    return this.HttpClient .post( this.serverAddress + '/users/updateProfile', user, {headers: headers})
      .pipe(map(res => res));
  }

  checkUsername(user) {
    let headers = new HttpHeaders;
    headers.append('Content-Type', 'application/json');
    this.token = localStorage.getItem('id_token');
    headers.append('Authorization', this.token);
    return this.HttpClient .post( this.serverAddress + '/users/checkUsername', user, { headers: headers })
      .pipe(map(res => res));
  }

  getRoleFromServer() {
    let headers = new HttpHeaders;
    headers.append('Content-Type', 'application/json');
    this.token = localStorage.getItem('id_token');
    headers.append('Authorization', this.token);
    return this.HttpClient .get( this.serverAddress + '/users/getRole', { headers: headers })
      .pipe(map(res => res));
  }

  searchPeople(searchObj) {
    let headers = new HttpHeaders;
    headers.append('Content-Type', 'application/json');
    return this.HttpClient .post( this.serverAddress + '/users/searchPeople', searchObj, {headers: headers})
      .pipe(map(res => res));
  }

  countUsers(searchObj) {
    let headers = new HttpHeaders;
    headers.append('Content-Type', 'application/json');
    return this.HttpClient .post( this.serverAddress + '/users/countUsers', searchObj, {headers: headers})
      .pipe(map(res => res));
  }

  makeContentManager(user) {
    let headers = new HttpHeaders;
    headers.append('Content-Type', 'application/json');
    this.token = localStorage.getItem('id_token');
    headers.append('Authorization', this.token);
    return this.HttpClient .post( this.serverAddress + '/users/makeContentManager', user, { headers: headers })
      .pipe(map(res => res));
  }

  getTeam() {
    let headers = new HttpHeaders;
    headers.append('Content-Type', 'application/json');
    return this.HttpClient .get( this.serverAddress + '/users/getTeam', {headers: headers})
      .pipe(map(res => res));
  }

  handleError(error: any) {
    this.flashMessagesService.show(error.statusText || "Server Error. Contact admin if error persists", { cssClass: 'alert-danger', timeout: 2500 });
  }
}
