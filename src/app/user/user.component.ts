import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
 user!:User
  constructor(private userservice:UserService) {
      this.userservice.getUserInfo().subscribe(user =>{
        console.log(user);
        //this.user = user
 })
    // this.userservice.getUserInfo().subscribe(profile=>{

   }
  ngOnInit(): void {
  }

}
