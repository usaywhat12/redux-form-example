import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';

import { 
  MatButtonModule,
  MatInputModule,
  MatFormFieldModule,
  MatProgressSpinnerModule
} from '@angular/material';
import { LoginComponent } from './components/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { loginReducer } from './reducers/login.reducer';
import { LoginEffects } from './effects/login.effetcs';
import { LoginService } from './services/login.service';
import { DetailComponent } from './components/detail/detail.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatProgressSpinnerModule,
    StoreModule.forRoot({
      login: loginReducer
    }),
    EffectsModule.forRoot([LoginEffects]),
  ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
