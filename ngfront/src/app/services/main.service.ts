import { Injectable } from '@angular/core';
@Injectable()
export class MainService {

  serverAddress: String = 'http://localhost:3000';

  constructor() { }

  getServerAddress() {
    return this.serverAddress;
  }

}
