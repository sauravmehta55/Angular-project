import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { User } from './user';
@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private http : HttpClient) { }

  public doRegistration(user : User){
    return this.http.post("http://localhost:8080/save-user",user,{responseType : "text" as "json"});
  }
  public getUser(){
    return this.http.get<User[]>("http://localhost:8080/all-users");
  }
  public getUserByUsername(username){
    return this.http.get("http://localhost:8080/search/"+username);
  }
  public deleteUser<User>(username){
    return this.http.get("http://localhost:8080/delete/"+username);
  }
}
