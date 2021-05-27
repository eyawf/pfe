import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserI } from 'src/app/models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users: UserI[];
  link = 'http://localhost:3000/users';
  constructor(private http: HttpClient) { }


  getUsers(): Observable<UserI[]> {
    return this.http.get<UserI []>(this.link);
  }
}
