import { createReducer, on } from '@ngrx/store';
import { loginAction, loginSuccessAction, loginErrorAction } from '../actions/login.actions';
import { LoginDetail } from '../models/login-detail.model';

export interface LoginState {
    error?: string;
    isLoading: boolean;
    detail: LoginDetail;
  }
export const initialState: LoginState = {
    error: null,
    isLoading: false,
    detail: null
};

export const loginReducer = createReducer(
    initialState,
    on(loginAction, state => ({
      ...state,
    error: null,
    isLoading: true
    })),
    on(loginSuccessAction, (state, {detail})  => ({
        ...state,
        error: null,
        isLoading: false,
        detail
    })),
    on(loginErrorAction, (state, {error}) => ({
        ...state,
        error,
        isLoading: false,
        detail: null
    }))
);