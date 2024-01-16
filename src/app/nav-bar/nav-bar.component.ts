import { Component } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  constructor (public userService: UserService,
    private router: Router){}

  logOut(){
    localStorage.clear();
    // localStorage.removeItem('Bearer Token');
    this.userService.currentUser = null;
    this.router.navigate(['/login']);
  }

  isUserLoggedIn(): boolean {
    // Check if the user is logged in based on the presence of a token in localStorage
    return !!localStorage.getItem('Bearer Token');
  }

  // getUserName(): string{
  //   return 
  // }
  isAdmin(): boolean{
    return localStorage.getItem('Permissions') == 'Admin';
  }
}
