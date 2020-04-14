import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FlashMessagesService } from 'angular2-flash-messages';
import { MainService } from './main.service';
import { map } from 'rxjs/operators';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs';

@Injectable()
export class BlogService {

  serverAddress: String;
  token: any;

  constructor(
    private http: HttpClient,
    private flashMessagesService: FlashMessagesService,
    private mainService: MainService,
  ) {
      this.serverAddress = this.mainService.getServerAddress();
   }

   getBlogCount(blogInfo):Observable<any> {

     return this.http.post<any>( this.serverAddress + '/blogs/countBlogs', blogInfo)
       .pipe(map(res => res));
   }

  getBlogs(blogInfo):Observable<any> {
    let headers = new HttpHeaders;
    headers.append('Content-Type', 'application/json');
    return this.http.post<any>( this.serverAddress + '/blogs', blogInfo)
      .pipe(map(res => res));
  }

  searchBlogs(blogObj):Observable<any> {
    let headers = new HttpHeaders;
    headers.append('Content-Type', 'application/json');
    this.token = localStorage.getItem('id_token');
    headers.append('Authorization', this.token);
    return this.http.post<any>( this.serverAddress + '/blogs/searchBlogs', blogObj)
      .pipe(map(res => res));
  }

  getBlogById(blog):Observable<any> {
    let headers = new HttpHeaders;
    headers.append('Content-Type', 'application/json');
    this.token = localStorage.getItem('id_token');
    headers.append('Authorization', this.token);
    return this.http.post<any>( this.serverAddress + '/blogs/getBlogById', blog)
      .pipe(map(res => res));
  }

  getBlogByUsername(user):Observable<any> {
    let headers = new HttpHeaders;
    headers.append('Content-Type', 'application/json');
    return this.http.post<any>( this.serverAddress + '/blogs/getBlogByUsername', user)
      .pipe(map(res => res));
  }

  addBlog(blog):Observable<any> {
    let headers = new HttpHeaders;
    headers.append('Content-Type', 'application/json');
    this.token = localStorage.getItem('id_token');
    headers.append('Authorization', this.token);
    return this.http.post<any>( this.serverAddress + '/blogs/addBlog', blog)
      .pipe(map(res => res));
  }

  editBlog(blog):Observable<any> {
    let headers = new HttpHeaders;
    headers.append('Content-Type', 'application/json');
    this.token = localStorage.getItem('id_token');
    headers.append('Authorization', this.token);
    return this.http.post<any>( this.serverAddress + '/blogs/editBlog', blog)
      .pipe(map(res => res));
  }

  deleteBlog(blog):Observable<any> {
    let headers = new HttpHeaders;
    headers.append('Content-Type', 'application/json');
    this.token = localStorage.getItem('id_token');
    headers.append('Authorization', this.token);
    return this.http.post<any>( this.serverAddress + '/blogs/deleteBlog', blog, { headers: headers }).
    pipe(map(res => res));
  }

  handleError(error: any) {
    this.flashMessagesService.show(error.statusText || "Server Error. Contact admin if error persists", { cssClass: 'alert-danger', timeout: 2500 });
  }
}
