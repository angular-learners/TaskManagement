import { User } from 'src/app/models/user';
import { TaskService } from './../../services/task.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css'],
})
export class UserHomeComponent implements OnInit {
  usersList: User[] = [];
  filteredUser: User[] = [];

  constructor(private taskService: TaskService, private router: Router) {}

  ngOnInit(): void {
    this.getAllUsers();
  }

  getAllUsers() {
    this.taskService.getAllUsers().subscribe(
      (res: any) => {
        console.log(res);
        this.usersList = [...res];
        this.filteredUser = [...this.usersList];
      },
      (err: any) => {
        console.log(err);
      }
    );
  }

  deleteUser(id: number) {
    this.taskService.deleteUserById(id).subscribe(
      (res: any) => {
        console.log(res);
        this.getAllUsers();
      },
      (err: any) => {
        console.log(err);
      }
    );
  }

  updateUser(id: number) {
    this.router.navigate(['update-account', id]);
  }

  search(event: any) {
    let searchText = event.target.value.trim();
    console.log(searchText);
    this.filteredUser = this.usersList.filter((user: any) => {
      const { firstName, lastName } = user;
      return firstName.includes(searchText) || lastName.includes(searchText);
    });
  }

  // sortUser(type: string) {
  //   //  this.filteredUser.sort((a:any,b:any):any=>{
  //   //    type=='ASC' ? a.firstName.localeCompare(b.firstName) :b.firstName.localeCompare(a.firstName);
  //   //  });
  //   this.filteredUser.sort((a: any, b: any): any => {
  //     if (type == 'ASC') {
  //       return a.firstName.localeCompare(b.firstName);
  //     } else {
  //       return b.firstName.localeCompare(a.firstName);
  //     }
  //   });
  // }

  sortUser(type: string) {
    this.filteredUser.sort((a: User, b: User) => {
      const comparison = type === 'ASC' ? 1 : -1;
      return comparison * a.firstName.localeCompare(b.firstName);
    });
  }


}
