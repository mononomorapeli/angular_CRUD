import { Component } from '@angular/core';
import { UserServices } from './models/service/user-service';
import { user } from './models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CRUD_angular';
constructor(private userService:UserServices){
this.getUsers();
}  
    users!:user[];
user!:user;

private getUsers(){
 this.userService.getUsers().subscribe({
  next:(res)=>{
    console.log(res);
  },
  error:(err)=>console.log(err)
})
}
}

