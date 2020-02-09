import { createAction, props } from '@ngrx/store';
import { Login } from '../models/login.model';
import { LoginDetail } from '../models/login-detail.model';

export const loginAction = createAction(
  '[Login] Login',
  props<{ login: Login }>()
);

export const loginSuccessAction = createAction(
    '[Login] Login Success',
    props<{ detail: LoginDetail }>()
);

export const loginErrorAction = createAction(
'[Login] Login Fail',
props<{ error: string }>()
);
