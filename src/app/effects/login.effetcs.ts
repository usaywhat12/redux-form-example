import { Injectable } from '@angular/core';
import { ofType, Actions, Effect } from '@ngrx/effects';
import { LoginService } from '../services/login.service';
import { loginSuccessAction, loginErrorAction, loginAction } from '../actions/login.actions';
import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { LoginDetail } from '../models/login-detail.model';


@Injectable()
export class LoginEffects {

    constructor(private actions$: Actions, private loginService: LoginService) {}



@Effect()
login$ = this.actions$.pipe(
    ofType(loginAction),
    map((action) => action.login),
    switchMap((login) => 
    this.loginService.login(login).pipe(
            map((detail: LoginDetail) => loginSuccessAction({detail})),
            catchError((error) => of(loginErrorAction({ error }))
        ))
));

}
