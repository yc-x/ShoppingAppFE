import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { UserService } from '../services/user.service';
import { User } from '../interfaces/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit{

  constructor(private userService: UserService,
    private router: Router){}

  signupformGroup = new FormBuilder().group({
    username: ['', Validators.required],
    email: ['', [Validators.email, Validators.required]],
    password: ['', Validators.required],
  });

  ngOnInit() {}

  onSubmit(){
    this.userService.addUsers(this.signupformGroup.getRawValue() as User);
    this.router.navigate(['/login']);
  }
}
