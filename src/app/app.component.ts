import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginState } from './reducers/login.reducer';
import { Store, select } from '@ngrx/store';
import { Login } from './models/login.model';
import { loginAction } from './actions/login.actions';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'redux-forms-example';

  loginState$: Observable<LoginState>;

  constructor(private store: Store<{login: LoginState}>) {
    this.loginState$ = store.pipe(select(state => state.login));
  }


  onLogin(login: Login) {
    this.store.dispatch(loginAction({login}));
  }

}
