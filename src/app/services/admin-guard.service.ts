import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AdminGuardService {

  constructor() { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    const permission = localStorage.getItem('Permissions');
    
    if(!permission || permission != 'Admin'){
      alert('You are Not Permited to acess this page!');
      return false;
    }

    return true;
  }
}
