import { Injectable } from '@angular/core';
import { Router, ActivatedRoute, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { CanActivate } from '@angular/router';
import { AuthService } from './auth.service';
import { MainService } from './main.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs';

@Injectable()
export class ContentGuardService {

  response: any;
  token: any;
  // Server Address
  serverAddress: String;

  constructor(
    private authService: AuthService,
    private router: Router,
    private flashMessagesService: FlashMessagesService,
    private mainService: MainService,
    private http: HttpClient,
  ) {
      this.serverAddress = this.mainService.getServerAddress();
   }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):Observable<any> {
    let url = state.url;
   
    return this.http.get<any>( this.serverAddress + '/users/getRole')
      .pipe(map(res => {
        if(res['role'] === 'Admin' || res['role'] === 'Content Manager') {
          return true;
        } else {
          this.flashMessagesService.show('You are not authorized', { cssClass: 'alert-danger', timeout: 2500 });
          this.router.navigate(['/']);
          return false;
        }
      }));
  }
}
