import { Injectable } from '@angular/core';
import { User } from '../interfaces/user';
import { BehaviorSubject, Observable, Subject, of, ReplaySubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  users: User[] = [];

  // Create a new Subject
  private userSubject = new ReplaySubject<User>();
  private userListSubject = new Subject<User[]>();

  private fetchUsers(): void {
    this.http.get<any>('/api/auth/all').subscribe(response => {
      if (response.success && response.data) {
        this.onNewList(this.mapToUserList(response.data));
      }
    });
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

  public add(val: User): void{
    this.users.push({...val});
    // this.usersSubject.next([...this.users]);
    this.onNewData(val);
    this.onNewList([...this.users]);
    console.log(val);
  }

  getUserObs(): Observable<User> {
    return this.userSubject.asObservable();
  }

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

  onNewData(val: User) {
    // Next will describe the next emitted value in the Observable Stream
    this.userSubject.next(val);
  }
}
