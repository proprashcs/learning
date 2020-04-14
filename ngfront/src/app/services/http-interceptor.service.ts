import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable()
export class HttpInterceptorService implements HttpInterceptor {
  // token = localStorage.getItem('token');
  constructor(public auth: AuthService) { }

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (this.isNeededToken(request)) {
      request = request.clone({
        setHeaders: {
          Authorization: this.auth.getToken()
        }
      });
    }
    return next.handle(request);
  }

  isNeededToken(request) {
    // console.log('request is :', request);
    if (
      request.url &&
      (request.url.indexOf('authenticate') > 0 || request.url.indexOf('search') > 0) || !this.auth.getToken() 
    ) {
      // authenticate, register, getAllSource, getTeam,forgotPassword
      //countQuestions,questions,getAllTopicNames,countBlogs,blogs,countBlogs,searchBlogs
      return false;
    }
    return true;
  }
}
