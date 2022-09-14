import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Users } from 'src/app/models/user';
import { UsersService } from 'src/app/services/users.service';


@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
  myForm!: FormGroup
  fullName!: string;
  idNumber!: string;
  email!: string;
  phoneNo!: number;
  user!: Users;
  users: Users[]= this.userService.getUsers();

  constructor(private userService: UsersService) { }

  ngOnInit(): void {
  }

  onReservation(){
    this.user ={name:this.fullName,
      idNumber : this.idNumber,
      email : this.email,
      phoneNumber : this.phoneNo
      };

    this.users.push(this.user);
    console.log(this.users);
  }
}
