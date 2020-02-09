import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { Login } from 'src/app/models/login.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnChanges {

  constructor() { }

  @Input() state: any;
  @Output() submitted = new EventEmitter<Login>();

  loginForm: FormGroup = new FormGroup({
    username: new FormControl('', {
      validators: [
        Validators.required
      ]
    }),
    password: new FormControl('', {
      validators: [
        Validators.required
      ]
    })
  });

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.state.isLoading) {
      this.loginForm.disable();
    } else {
      this.loginForm.enable();
      this.loginForm.reset();
      Object.keys(this.loginForm.controls).forEach(key => {
        this.loginForm.get(key).setErrors(null) ;
      });
    }
  }

  onFormSubmit() {
    if (this.loginForm.valid) {
      this.submitted.emit(this.loginForm.value);
    }
  }

}
