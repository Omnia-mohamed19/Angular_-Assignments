import { Component } from '@angular/core';
import { User } from '../Shared Classes and types/users';
import { EnrollService } from 'src/services/enroll.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  constructor(private enrollService:EnrollService){}
  userModel=new User("","","");

  SubmitData(){
//component ===> service
    //service==>http call
    this.enrollService.enroll(this.userModel).subscribe({
      next:data=>console.log(data),
      error:error=>console.log(error)
    });
  }

}
