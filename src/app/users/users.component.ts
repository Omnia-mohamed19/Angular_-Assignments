import { Component } from '@angular/core';
import { UsersService } from 'src/services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {
userList:any=[];
errorMessage:any;
constructor(private userService :UsersService){
this.renderValues();
}

renderValues(){
  this.userService.GetAllUsers().subscribe(
   {
      next:data=>this.userList=data,
      error:error=>this.errorMessage=error

   })

}
}
