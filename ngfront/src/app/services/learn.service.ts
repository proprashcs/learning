import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FlashMessagesService } from 'angular2-flash-messages';
import { MainService } from './main.service';
import { map } from 'rxjs/operators';
import 'rxjs/add/operator/catch';

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


  addTopic(topic) {
    let headers = new HttpHeaders;
    headers.append('Content-Type', 'application/json');
    this.token = localStorage.getItem('id_token');
    headers.append('Authorization', this.token);
    return this.http.post( this.serverAddress + '/topics/addTopic', topic, {headers: headers})
      .pipe(map(res => res));
  }

  getAllTopicNames() {
    let headers = new HttpHeaders;
    headers.append('Content-Type', 'application/json');
    return this.http.get( this.serverAddress + '/topics/getAllTopicNames', {headers: headers})
      .pipe(map(res => res));
  }

  getTopic(topic) {
    let headers = new HttpHeaders;
    headers.append('Content-Type', 'application/json');
    return this.http.post( this.serverAddress + '/topics/getTopic', topic, {headers: headers})
      .pipe(map(res => res));
  }

  editTopic(topic) {
    let headers = new HttpHeaders;
    headers.append('Content-Type', 'application/json');
    this.token = localStorage.getItem('id_token');
    headers.append('Authorization', this.token);
    return this.http.post( this.serverAddress + '/topics/editTopic', topic, {headers: headers})
      .pipe(map(res => res));
  }

  deleteTopic(topic) {
    let headers = new HttpHeaders;
    headers.append('Content-Type', 'application/json');
    this.token = localStorage.getItem('id_token');
    headers.append('Authorization', this.token);
    return this.http.post( this.serverAddress + '/topics/deleteTopic', topic, {headers: headers})
      .pipe(map(res => res));
  }

  addSubtopic(subtopic) {
    let headers = new HttpHeaders;
    headers.append('Content-Type', 'application/json');
    this.token = localStorage.getItem('id_token');
    headers.append('Authorization', this.token);
    return this.http.post( this.serverAddress + '/subtopics/addSubtopic', subtopic, {headers: headers})
      .pipe(map(res => res));
  }

  getAllSubtopicForTopic(subtopic) {
    let headers = new HttpHeaders;
    headers.append('Content-Type', 'application/json');
    return this.http.post( this.serverAddress + '/subtopics/getAllSubtopicForTopic', subtopic, {headers: headers})
      .pipe(map(res => res));
  }

  getSubtopic(subtopic) {
    let headers = new HttpHeaders;
    headers.append('Content-Type', 'application/json');
    return this.http.post( this.serverAddress + '/subtopics/getSubtopic', subtopic, {headers: headers})
      .pipe(map(res => res));
  }

  editSubtopic(subtopic) {
    let headers = new HttpHeaders;
    headers.append('Content-Type', 'application/json');
    this.token = localStorage.getItem('id_token');
    headers.append('Authorization', this.token);
    return this.http.post( this.serverAddress + '/subtopics/editSubtopic', subtopic, {headers: headers})
      .pipe(map(res => res));
  }

  deleteSubtopic(subtopic) {
    let headers = new HttpHeaders;
    headers.append('Content-Type', 'application/json');
    this.token = localStorage.getItem('id_token');
    headers.append('Authorization', this.token);
    return this.http.post( this.serverAddress + '/subtopics/deleteSubtopic', subtopic, {headers: headers})
      .pipe(map(res => res));
  }

  addSection(section) {
    let headers = new HttpHeaders;
    headers.append('Content-Type', 'application/json');
    this.token = localStorage.getItem('id_token');
    headers.append('Authorization', this.token);
    return this.http.post( this.serverAddress + '/sections/addSection', section, {headers: headers})
      .pipe(map(res => res));
  }

  getAllSectionForSubtopic(section) {
    let headers = new HttpHeaders;
    headers.append('Content-Type', 'application/json');
    return this.http.post( this.serverAddress + '/sections/getAllSectionForSubtopic', section, {headers: headers})
      .pipe(map(res => res));
  }

  getSection(section) {
    let headers = new HttpHeaders;
    headers.append('Content-Type', 'application/json');
    return this.http.post( this.serverAddress + '/sections/getSection', section, {headers: headers})
      .pipe(map(res => res));
  }

  editSection(section) {
    let headers = new HttpHeaders;
    headers.append('Content-Type', 'application/json');
    this.token = localStorage.getItem('id_token');
    headers.append('Authorization', this.token);
    return this.http.post( this.serverAddress + '/sections/editSection', section, {headers: headers})
      .pipe(map(res => res));
  }

  deleteSection(section) {
    let headers = new HttpHeaders;
    headers.append('Content-Type', 'application/json');
    this.token = localStorage.getItem('id_token');
    headers.append('Authorization', this.token);
    return this.http.post( this.serverAddress + '/sections/deleteSection', section, {headers: headers})
      .pipe(map(res => res));
  }

  getEbooks(ebook) {
    let headers = new HttpHeaders;
    headers.append('Content-Type', 'application/json');
    return this.http.post( this.serverAddress + '/ebooks/getEbooksForContent', ebook, {headers: headers})
      .pipe(map(res => res));
  }

  deleteEbook(ebook) {
    let headers = new HttpHeaders;
    headers.append('Content-Type', 'application/json');
    this.token = localStorage.getItem('id_token');
    headers.append('Authorization', this.token);
    return this.http.post( this.serverAddress + '/studyFiles/deleteEbook', ebook, {headers: headers})
      .pipe(map(res => res));
  }

  getStudyFiles(file) {
    let headers = new HttpHeaders;
    headers.append('Content-Type', 'application/json');
    return this.http.post( this.serverAddress + '/studyFiles/getStudyFilesForContent', file, {headers: headers})
      .pipe(map(res => res));
  }

  deleteStudyFile(file) {
    let headers = new HttpHeaders;
    headers.append('Content-Type', 'application/json');
    this.token = localStorage.getItem('id_token');
    headers.append('Authorization', this.token);
    return this.http.post( this.serverAddress + '/studyFiles/deleteStudyFile', file, {headers: headers})
      .pipe(map(res => res));
  }

  addPlaylist(playlist) {
    let headers = new HttpHeaders;
    headers.append('Content-Type', 'application/json');
    this.token = localStorage.getItem('id_token');
    headers.append('Authorization', this.token);
    return this.http.post( this.serverAddress + '/playlists/addPlaylist', playlist, {headers: headers})
      .pipe(map(res => res));
  }

  getPlaylistBySubtopic(playlist) {
    let headers = new HttpHeaders;
    headers.append('Content-Type', 'application/json');
    return this.http.post( this.serverAddress + '/playlists/getPlaylistBySubtopic', playlist, {headers: headers})
      .pipe(map(res => res));
  }

  getPlaylist(playlist) {
    let headers = new HttpHeaders;
    headers.append('Content-Type', 'application/json');
    return this.http.post( this.serverAddress + '/playlists/getPlaylist', playlist, {headers: headers})
      .pipe(map(res => res));
  }

  editPlaylist(playlist) {
    let headers = new HttpHeaders;
    headers.append('Content-Type', 'application/json');
    this.token = localStorage.getItem('id_token');
    headers.append('Authorization', this.token);
    return this.http.post( this.serverAddress + '/playlists/editPlaylist', playlist, {headers: headers})
      .pipe(map(res => res));
  }

  deleteVideo(video) {
    let headers = new HttpHeaders;
    headers.append('Content-Type', 'application/json');
    this.token = localStorage.getItem('id_token');
    headers.append('Authorization', this.token);
    return this.http.post( this.serverAddress + '/playlists/deleteVideo', video, {headers: headers})
      .pipe(map(res => res));
  }

  deletePlaylist(playlist) {
    let headers = new HttpHeaders;
    headers.append('Content-Type', 'application/json');
    this.token = localStorage.getItem('id_token');
    headers.append('Authorization', this.token);
    return this.http.post( this.serverAddress + '/playlists/deletePlaylist', playlist, {headers: headers})
      .pipe(map(res => res));
  }

  addSource(newSource) {
    let headers = new HttpHeaders;
    headers.append('Content-Type', 'application/json');
    this.token = localStorage.getItem('id_token');
    headers.append('Authorization', this.token);
    return this.http.post( this.serverAddress + '/sources/addSource', newSource, {headers: headers})
      .pipe(map(res => res));
  }

  getAllSources() {
    let headers = new HttpHeaders;
    headers.append('Content-Type', 'application/json');
    return this.http.get( this.serverAddress + '/sources/getAllSource', {headers: headers})
      .pipe(map(res => res));
  }



  handleError(error: any) {
    this.flashMessagesService.show(error.statusText || "Server Error. Contact admin if error persists", { cssClass: 'alert-danger', timeout: 2500 });
  }
}
