import { Injectable } from '@angular/core';
import { Login } from 'src/app/models/login.model';
import { LoginDetail } from '../models/login-detail.model';
import { Observable, of, throwError } from 'rxjs';

@Injectable()
export class LoginService {

  constructor() { }
  login(login: Login): Observable<LoginDetail> {
    if (login.username === 'redux' && login.password === 'redux') {
        const detail = new LoginDetail();
        detail.username = login.username;
        detail.password = login.password;
        detail.date = new Date();
        return of(detail);
    } else {
      return throwError('Wrong username or password');
    }
  }
}
