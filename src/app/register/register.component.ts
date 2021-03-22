import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service';
import { User } from '../user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user : User ;
  message : any;
  constructor(private service : UserServiceService) { 
    this.user =  new User("","","",0,"");
    
  }

  ngOnInit(): void {
  
  }
  public registration(){
    let response = this.service.doRegistration(this.user);
    response.subscribe(data => {
      this.message = data;
    })

  }

}
