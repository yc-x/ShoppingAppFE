import { Injectable } from '@angular/core';
import { User } from '../interfaces/user';
import { BehaviorSubject, Observable, Subject, of, ReplaySubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { LoginResponse } from '../interfaces/login-response';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient,
     private router: Router) { }

  currentUser: LoginResponse | null = null;

  // Create a new Subject
  // private userSubject = new ReplaySubject<User>();
  private userListSubject = new Subject<User[]>();

  private fetchUsers(): void {
    this.http.get<any>('/api/auth/all').subscribe(response => {
      if (response.success && response.data) {
        this.onNewList(this.mapToUserList(response.data));
      }
    });
  }

  public addUsers(data: User): void{
    this.http.post('/api/auth/signup', data).subscribe();
  }

  

  public loginUser(data: User): void{
    
    this.http.post<LoginResponse>('api/auth/login', data).subscribe(
      (response: LoginResponse) => {
        if(response.token){
          localStorage.removeItem('Bearer Token');
          localStorage.clear();
          localStorage.setItem('Bearer Token', response.token);
          // localStorage.setItem('UID', response.id);
          // console.log(response.permissions);
          // Hard coded, due to limited roles. Need to fix that.
          if(response.permissions.includes('Admin')){
            localStorage.setItem('Permissions', 'Admin');
          }
          else if(response.permissions.includes('Buyer')){
            localStorage.setItem('Permissions', 'Buyer');
          }
          this.currentUser = null;
          this.currentUser = response;

          const redirectUrl = '/orders/all';
          this.router.navigate([redirectUrl]);
        }
      }
    )
  }

  private mapToUserList(data: any[]): User[] {
    const newData = data.map(item => ({
      // id: item.id,
      email: item.email,
      password: item.password,
      username: item.username,
    }));
    return newData;
  }

  // public add(val: User): void{
  //   this.users.push({...val});
  //   // this.usersSubject.next([...this.users]);
  //   // this.onNewData(val);
  //   this.onNewList([...this.users]);
  // }

  // getUserObs(): Observable<User> {
  //   return this.userSubject.asObservable();
  // }

  public getUserListObs(): Observable<User[]>{
    this.fetchUsers();
    // return of(this.users);
    return this.userListSubject.asObservable();
  }

  onNewList(val: User[]){
    this.userListSubject.next(val);
  }

  // onSubscribe() {
  //   // Returning the Subject as an Observable for subscription
  //   return this.subject.asObservable();
  // }

  // onNewData(val: User) {
  //   // Next will describe the next emitted value in the Observable Stream
  //   this.userSubject.next(val);
  // }
}
