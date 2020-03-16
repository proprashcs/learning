import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FlashMessagesService } from 'angular2-flash-messages';
import { MainService } from './main.service';
import { map } from 'rxjs/operators';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs';

@Injectable()
export class LearnService {

  serverAddress: String;
  token: any;

  constructor(
    private http: HttpClient,
    private flashMessagesService: FlashMessagesService,
    private mainService: MainService,
  ) {
    this.serverAddress = this.mainService.getServerAddress();
   }


  addTopic(topic):Observable<any> {
    let headers = new HttpHeaders;
    headers.append('Content-Type', 'application/json');
    this.token = localStorage.getItem('id_token');
    headers.append('Authorization', this.token);
    return this.http.post<any>( this.serverAddress + '/topics/addTopic', topic, {headers: headers})
      .pipe(map(res => res));
  }

  getAllTopicNames():Observable<any> {
    let headers = new HttpHeaders;
    headers.append('Content-Type', 'application/json');
    return this.http.get<any>( this.serverAddress + '/topics/getAllTopicNames', {headers: headers})
      .pipe(map(res => res));
  }

  getTopic(topic):Observable<any> {
    let headers = new HttpHeaders;
    headers.append('Content-Type', 'application/json');
    return this.http.post<any>( this.serverAddress + '/topics/getTopic', topic, {headers: headers})
      .pipe(map(res => res));
  }

  editTopic(topic):Observable<any> {
    let headers = new HttpHeaders;
    headers.append('Content-Type', 'application/json');
    this.token = localStorage.getItem('id_token');
    headers.append('Authorization', this.token);
    return this.http.post<any>( this.serverAddress + '/topics/editTopic', topic, {headers: headers})
      .pipe(map(res => res));
  }

  deleteTopic(topic):Observable<any> {
    let headers = new HttpHeaders;
    headers.append('Content-Type', 'application/json');
    this.token = localStorage.getItem('id_token');
    headers.append('Authorization', this.token);
    return this.http.post<any>( this.serverAddress + '/topics/deleteTopic', topic, {headers: headers})
      .pipe(map(res => res));
  }

  addSubtopic(subtopic):Observable<any> {
    let headers = new HttpHeaders;
    headers.append('Content-Type', 'application/json');
    this.token = localStorage.getItem('id_token');
    headers.append('Authorization', this.token);
    return this.http.post<any>( this.serverAddress + '/subtopics/addSubtopic', subtopic, {headers: headers})
      .pipe(map(res => res));
  }

  getAllSubtopicForTopic(subtopic):Observable<any> {
    let headers = new HttpHeaders;
    headers.append('Content-Type', 'application/json');
    return this.http.post<any>( this.serverAddress + '/subtopics/getAllSubtopicForTopic', subtopic, {headers: headers})
      .pipe(map(res => res));
  }

  getSubtopic(subtopic):Observable<any> {
    let headers = new HttpHeaders;
    headers.append('Content-Type', 'application/json');
    return this.http.post<any>( this.serverAddress + '/subtopics/getSubtopic', subtopic, {headers: headers})
      .pipe(map(res => res));
  }

  editSubtopic(subtopic):Observable<any> {
    let headers = new HttpHeaders;
    headers.append('Content-Type', 'application/json');
    this.token = localStorage.getItem('id_token');
    headers.append('Authorization', this.token);
    return this.http.post<any>( this.serverAddress + '/subtopics/editSubtopic', subtopic, {headers: headers})
      .pipe(map(res => res));
  }

  deleteSubtopic(subtopic):Observable<any> {
    let headers = new HttpHeaders;
    headers.append('Content-Type', 'application/json');
    this.token = localStorage.getItem('id_token');
    headers.append('Authorization', this.token);
    return this.http.post<any>( this.serverAddress + '/subtopics/deleteSubtopic', subtopic, {headers: headers})
      .pipe(map(res => res));
  }

  addSection(section):Observable<any> {
    let headers = new HttpHeaders;
    headers.append('Content-Type', 'application/json');
    this.token = localStorage.getItem('id_token');
    headers.append('Authorization', this.token);
    return this.http.post<any>( this.serverAddress + '/sections/addSection', section, {headers: headers})
      .pipe(map(res => res));
  }

  getAllSectionForSubtopic(section):Observable<any> {
    let headers = new HttpHeaders;
    headers.append('Content-Type', 'application/json');
    return this.http.post<any>( this.serverAddress + '/sections/getAllSectionForSubtopic', section, {headers: headers})
      .pipe(map(res => res));
  }

  getSection(section):Observable<any> {
    let headers = new HttpHeaders;
    headers.append('Content-Type', 'application/json');
    return this.http.post<any>( this.serverAddress + '/sections/getSection', section, {headers: headers})
      .pipe(map(res => res));
  }

  editSection(section):Observable<any> {
    let headers = new HttpHeaders;
    headers.append('Content-Type', 'application/json');
    this.token = localStorage.getItem('id_token');
    headers.append('Authorization', this.token);
    return this.http.post<any>( this.serverAddress + '/sections/editSection', section, {headers: headers})
      .pipe(map(res => res));
  }

  deleteSection(section):Observable<any> {
    let headers = new HttpHeaders;
    headers.append('Content-Type', 'application/json');
    this.token = localStorage.getItem('id_token');
    headers.append('Authorization', this.token);
    return this.http.post<any>( this.serverAddress + '/sections/deleteSection', section, {headers: headers})
      .pipe(map(res => res));
  }

  getEbooks(ebook):Observable<any> {
    let headers = new HttpHeaders;
    headers.append('Content-Type', 'application/json');
    return this.http.post<any>( this.serverAddress + '/ebooks/getEbooksForContent', ebook, {headers: headers})
      .pipe(map(res => res));
  }

  deleteEbook(ebook):Observable<any> {
    let headers = new HttpHeaders;
    headers.append('Content-Type', 'application/json');
    this.token = localStorage.getItem('id_token');
    headers.append('Authorization', this.token);
    return this.http.post<any>( this.serverAddress + '/studyFiles/deleteEbook', ebook, {headers: headers})
      .pipe(map(res => res));
  }

  getStudyFiles(file):Observable<any> {
    let headers = new HttpHeaders;
    headers.append('Content-Type', 'application/json');
    return this.http.post<any>( this.serverAddress + '/studyFiles/getStudyFilesForContent', file, {headers: headers})
      .pipe(map(res => res));
  }

  deleteStudyFile(file):Observable<any> {
    let headers = new HttpHeaders;
    headers.append('Content-Type', 'application/json');
    this.token = localStorage.getItem('id_token');
    headers.append('Authorization', this.token);
    return this.http.post<any>( this.serverAddress + '/studyFiles/deleteStudyFile', file, {headers: headers})
      .pipe(map(res => res));
  }

  addPlaylist(playlist):Observable<any> {
    let headers = new HttpHeaders;
    headers.append('Content-Type', 'application/json');
    this.token = localStorage.getItem('id_token');
    headers.append('Authorization', this.token);
    return this.http.post<any>( this.serverAddress + '/playlists/addPlaylist', playlist, {headers: headers})
      .pipe(map(res => res));
  }

  getPlaylistBySubtopic(playlist):Observable<any> {
    let headers = new HttpHeaders;
    headers.append('Content-Type', 'application/json');
    return this.http.post<any>( this.serverAddress + '/playlists/getPlaylistBySubtopic', playlist, {headers: headers})
      .pipe(map(res => res));
  }

  getPlaylist(playlist):Observable<any> {
    let headers = new HttpHeaders;
    headers.append('Content-Type', 'application/json');
    return this.http.post<any>( this.serverAddress + '/playlists/getPlaylist', playlist, {headers: headers})
      .pipe(map(res => res));
  }

  editPlaylist(playlist):Observable<any> {
    let headers = new HttpHeaders;
    headers.append('Content-Type', 'application/json');
    this.token = localStorage.getItem('id_token');
    headers.append('Authorization', this.token);
    return this.http.post<any>( this.serverAddress + '/playlists/editPlaylist', playlist, {headers: headers})
      .pipe(map(res => res));
  }

  deleteVideo(video):Observable<any> {
    let headers = new HttpHeaders;
    headers.append('Content-Type', 'application/json');
    this.token = localStorage.getItem('id_token');
    headers.append('Authorization', this.token);
    return this.http.post<any>( this.serverAddress + '/playlists/deleteVideo', video, {headers: headers})
      .pipe(map(res => res));
  }

  deletePlaylist(playlist):Observable<any> {
    let headers = new HttpHeaders;
    headers.append('Content-Type', 'application/json');
    this.token = localStorage.getItem('id_token');
    headers.append('Authorization', this.token);
    return this.http.post<any>( this.serverAddress + '/playlists/deletePlaylist', playlist, {headers: headers})
      .pipe(map(res => res));
  }

  addSource(newSource):Observable<any> {
    let headers = new HttpHeaders;
    headers.append('Content-Type', 'application/json');
    this.token = localStorage.getItem('id_token');
    headers.append('Authorization', this.token);
    return this.http.post<any>( this.serverAddress + '/sources/addSource', newSource, {headers: headers})
      .pipe(map(res => res));
  }

  getAllSources():Observable<any> {
    let headers = new HttpHeaders;
    headers.append('Content-Type', 'application/json');
    return this.http.get<any>( this.serverAddress + '/sources/getAllSource', {headers: headers})
      .pipe(map(res => res));
  }



  handleError(error: any) {
    this.flashMessagesService.show(error.statusText || "Server Error. Contact admin if error persists", { cssClass: 'alert-danger', timeout: 2500 });
  }
}
