import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { UserService } from '../services/user.service';
import { User } from '../interfaces/user';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {


  constructor(private userService: UserService, 
    private router: Router) {
  }

  ngOnInit() {
  }

  loginformGroup = new FormBuilder().group({
    username: ['', Validators.required],
    password: ['', Validators.required],
  });

  onSubmit(){
    this.userService.loginUser(this.loginformGroup.getRawValue() as User);
  }

  isUserLoggedIn(): boolean {
    // Check if the user is logged in based on the presence of a token in localStorage
    return !!localStorage.getItem('Bearer Token');
  }

  ngOnDestroy(){
  }
}
