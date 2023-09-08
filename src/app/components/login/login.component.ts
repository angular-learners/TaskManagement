import { TaskService } from './../../services/task.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TaskConstants } from 'src/app/constants/task.constants';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
 user:User=new User();
 sucessMsg:string="";
 users:User[]=[];

 constructor(private taskService:TaskService,private router:Router){
 }



 login(){
     this.taskService.getAllUsers().subscribe(
      (res:any)=>{
           this.users=[...res];
           this.users.filter((user:any)=>{
               const {email,password}=user;
               if(email==this.user.email  &&  password==this.user.password){
                this.sucessMsg=TaskConstants.LOGIN_SUCCESS;
                    setTimeout(()=>{
                      this.router.navigate(['user-home']);
                    },5000);
               } 
           })
           if(!TaskConstants.LOGIN_SUCCESS){
              this.sucessMsg=TaskConstants.LOGIN_FAILED;
           }
      },
      (err:any)=>{
        console.log(err)
      }
     )        
 }
}
