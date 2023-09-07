import { ActivatedRoute, Router } from '@angular/router';
import { TaskService } from './../../services/task.service';
import { Component, OnInit } from '@angular/core';
import { TaskConstants } from 'src/app/constants/task.constants';
import { TaskStatus } from 'src/app/enums/task.staus';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css'],
})
export class CreateAccountComponent implements OnInit{
  user: User = new User();
  sucessMsg: string = '';
  selectedId: number;

  constructor(
    private taskService: TaskService,
    private activtedRoute: ActivatedRoute,
    private router:Router
  ) {
    this.selectedId = Number(this.activtedRoute.snapshot.paramMap.get('id'));
    console.log(this.selectedId);
  }

  ngOnInit(): void {
      this.getUserById();
  }

  getUserById() {
    this.taskService.getUserById(this.selectedId).subscribe(
      (res: any) => {
        const {firstName,lastName,email,password,mobileNumber}=res;
         this.user.firstName=firstName;
         this.user.lastName=lastName;
         this.user.email=email;
         this.user.password=password;
         this.user.mobileNumber=mobileNumber;
      },
      (err: any) => {
        console.log(err);
      }
    );
  }

  onSave() {
    if (this.selectedId === 0) {
      this.user.createdDate = new Date();
      this.user.updatedDate = null;
      this.user.status = TaskStatus.ACTIVE;
      this.taskService.createUserAccount(this.user).subscribe(
        (res: any) => {
          console.log(res);
          this.sucessMsg = TaskConstants.ACCOUNT_CREATED;
        },
        (err: any) => {
          console.log(err);
        }
      );
    } else {
      this.user.updatedDate = new Date();
      this.user.status = TaskStatus.ACTIVE;
      this.taskService.updateUser(this.user, this.selectedId).subscribe(
        (res: any) => {
          console.log(res);
          this.sucessMsg = TaskConstants.ACCOUNT_UPDATED;
          setTimeout(()=>{
            this.router.navigate(['user-home']);
          },5000)
        },
        (err: any) => {
          console.log(err);
        }
      );
    }
  }
}
