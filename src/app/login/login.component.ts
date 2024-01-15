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

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {
  private userSubscription!: Subscription;
  private userListSubscription!: Subscription;
  public users: User[] = [];

  constructor(private userService: UserService) {

  }

  ngOnInit() {
    // this.userSubscription = this.userService.getUserListObs().subscribe(
    //   (list) =>{
    //     this.users = list;      
    //   }
    // );
    this.userListSubscription = this.userService.getUserListObs().subscribe({
      next: (newUserList) =>{
        this.users = newUserList;
      },
      error: (error) =>{
        console.log(error);
      }
    });

    // this.userSubscription = this.userService.getUserObs().subscribe({
    //   next: (newUser) =>{
    //     this.users = this.userService.users;
    //     // this.users.push(newUser);
    //   },
    //   error: (error) =>{
    //     console.log(error);
    //   }
    // });
    // console.log(this.userSubscription);
  }

  formGroup = new FormBuilder().group({
    username: ['', Validators.required],
    // email: ['', Validators.compose([Validators.email, Validators.required])],
    password: ['', Validators.required],
  });

  getUsers(){
    
  }

  ngOnDestroy(){
    if(this.userSubscription){
      this.userSubscription.unsubscribe();
    }
    if(this.userListSubscription){
      this.userListSubscription.unsubscribe();
    }
  }
}
