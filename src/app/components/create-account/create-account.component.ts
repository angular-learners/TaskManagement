import { TaskService } from './../../services/task.service';
import { Component } from '@angular/core';
import { TaskConstants } from 'src/app/constants/task.constants';
import { TaskStatus } from 'src/app/enums/task.staus';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css'],
})
export class CreateAccountComponent {
  user: User = new User();
  sucessMsg: string = '';

  constructor(private taskService: TaskService) {}

  onSave() {
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
  }
}
