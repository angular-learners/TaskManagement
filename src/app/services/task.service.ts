import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  BASE_URL: string = 'http://localhost:3000/users/';

  constructor(private http: HttpClient) {}

  /** CREATE USER */
  createUserAccount(user: User):Observable<any> {
    return this.http.post(this.BASE_URL, user);
  }

  /** UPDATE USER */
  updateUser(user: User, id: number) {
    //http://localhost:3000/users/1      { firstName:"sai"}
    return this.http.put(`${this.BASE_URL}${id}`, user);
  }

  /** GET ALL USERS */

  getAllUsers():Observable<any> {
    return this.http.get(this.BASE_URL);
  }

  /** GET  USER BY ID */

  getUserById(id: number) {
    return this.http.get(`${this.BASE_URL}${id}`);
  }
  /**
   * DELETE BASED ON ID
   */
  deleteUserById(id: number) {
    return this.http.delete(`${this.BASE_URL}${id}`);
  }
}
