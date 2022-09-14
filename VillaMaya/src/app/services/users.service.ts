import { Injectable } from '@angular/core';
import { Users } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  user: Users ={name: "Christophe", idNumber: "fasf", email:'"fasfasf', phoneNumber: 555666}

  users: Users[] =[
    {
      name:"user1",
      idNumber:"CB955999",
      email:"email1",
      phoneNumber:56464848
    }
  ]
  constructor() { }

  getUsers(){
    return this.users;
  }

  registerUsers(user: Users){
    return this.users.push(user);
  }

}
