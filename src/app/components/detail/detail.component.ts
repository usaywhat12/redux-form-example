import { Component, OnInit, Input } from '@angular/core';
import { LoginDetail } from '../../models/login-detail.model';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  @Input() detail: LoginDetail;
  @Input() error: Error;

  constructor() { }

  ngOnInit() {
  }

}
