import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JwtHelperService  } from '@auth0/angular-jwt';
import { FlashMessagesService } from 'angular2-flash-messages';
import { MainService } from './main.service';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

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
    public jwtHelper: JwtHelperService
  ) {
      this.serverAddress = this.mainService.getServerAddress();
  }

  registerUser(user:any):Observable<any> {
    return this.HttpClient .post<any>( this.serverAddress + '/users/authenticate/register', user)
      .pipe(map(res => res));
  }

  authenticateUser(user):Observable<any> {
    return this.HttpClient .post<any>( this.serverAddress + '/users/authenticate', user)
      .pipe(map(res => res));
  }

  storeUserInfo(token, user) {
    localStorage.setItem('id_token', token);
    localStorage.setItem('user', JSON.stringify(user));
   this.jwtHelper.decodeToken();
    this.authToken = token;
    this.user = user;
  }

  userLogout() {
    console.log('this is userLogout')
    this.authToken = null;
    this.user = null;
    localStorage.removeItem('token');
    localStorage.removeItem('id_token');
    localStorage.removeItem('user');
  }

  authProfile(user):Observable<any> {
  
    return this.HttpClient .post<any>( this.serverAddress + '/users/profile', user)
      .pipe(map(res => res));
  }

  getToken() {
    return localStorage.getItem('id_token');
    // this.authToken = token;
  }

  getUser() {
    const user = JSON.parse(localStorage.getItem('user'));
    return user;
  }

  loggedIn() {
    // const helper = new JwtHelperService();
    const token = localStorage.getItem('id_token');
    // let isLoggedIn =  (token);
    // console.log('isLoggedIn =' , isLoggedIn);
    if(token)
    return true;
    return false;
    // return this.jwtHelper.getTokenExpirationDate();
    // return tokenNotExpired('id_token');
  }

  authUsername(user):Observable<any> {
    
    return this.HttpClient .post<any>( this.serverAddress + '/users/authenticate/forgotPassword/username', user)
      .pipe(map(res => res));
  }

  changePassword(user):Observable<any> {
    
    return this.HttpClient .post<any>( this.serverAddress + '/users/authenticate/forgotPassword/answer', user)
      .pipe(map(res => res));
  }

  updateProfile(user):Observable<any> {

    return this.HttpClient .post<any>( this.serverAddress + '/users/updateProfile', user)
      .pipe(map(res => res));
  }

  checkUsername(user):Observable<any> {
  
    return this.HttpClient .post<any>( this.serverAddress + '/users/checkUsername', user)
      .pipe(map(res => res));
  }

  getRoleFromServer():Observable<any> {
   
    return this.HttpClient .get<any>( this.serverAddress + '/users/getRole')
      .pipe(map(res => res));
  }

  searchPeople(searchObj):Observable<any> {
   
    return this.HttpClient .post<any>( this.serverAddress + '/users/searchPeople', searchObj)
      .pipe(map(res => res));
  }

  countUsers(searchObj):Observable<any> {
    return this.HttpClient .post<any>( this.serverAddress + '/users/countUsers', searchObj)
      .pipe(map(res => res));
  }

  makeContentManager(user):Observable<any> {
    return this.HttpClient .post<any>( this.serverAddress + '/users/makeContentManager', user)
      .pipe(map(res => res));
  }

  getTeam():Observable<any> {
  
    return this.HttpClient .get<any>( this.serverAddress + '/users/authenticate/getTeam')
      .pipe(map(res => res));
  }

  handleError(error: any) {
    this.flashMessagesService.show(error.statusText || "Server Error. Contact admin if error persists", { cssClass: 'alert-danger', timeout: 2500 });
  }
}
