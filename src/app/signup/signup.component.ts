import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { UserService } from '../services/user.service';
import { User } from '../interfaces/user';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit{

  constructor(private userService: UserService){}

  signupformGroup = new FormBuilder().group({
    username: ['', Validators.required],
    email: ['', [Validators.email, Validators.required]],
    password: ['', Validators.required],
  });

  ngOnInit() {}

  onSubmit(){
    this.userService.add(this.signupformGroup.getRawValue() as User);
  }
}
