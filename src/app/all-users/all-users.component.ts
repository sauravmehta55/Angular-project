import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserServiceService } from '../user-service.service';
@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css']
})
export class AllUsersComponent implements OnInit {

  users : User[];
  user:User;

  constructor(private service : UserServiceService) { }

  ngOnInit(): void {
    let response = this.service.getUser();
    response.subscribe(data => this.users = data);
  }

  public removeUser(username : string){
    let response = this.service.deleteUser(username);
    response.subscribe(data  => console.log(data));
  }

}
