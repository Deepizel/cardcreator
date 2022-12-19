import { Component, OnInit } from '@angular/core';
import {FormGroup , FormControl} from '@angular/forms'


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
 signupform = new FormGroup({
  fullName: new FormControl(''),
  email: new FormControl(''),
  country : new FormControl(''),
  code: new FormControl(''),
  number: new FormControl(''),
  dob : new FormControl(''),
  password: new FormControl('0')
 });


  constructor() { }

  ngOnInit(): void {
  }

}
