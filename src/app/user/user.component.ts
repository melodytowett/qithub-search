import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { Repos } from '../repos';
import { UserService } from '../user.service';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  profile!: User
  // profilename!: string
  repos!: Repos[]
  username!: string
  constructor(private userservice: UserService, private http: HttpClient) {
    //this.profilename = 'melodytowett/repos'
  }
  findProfile() {
    this.userservice.updateProfile(this.username);


  }
  ngOnInit() {
    this.userservice.getUserInfo();
    this.profile = this.userservice.profile;
    this.getRepos();

  }
  getRepos() {
    this.http.get<any>('https://api.github.com/users/melodytowett/repos').subscribe(response => {
      console.log(response)
      this.repos = response;
    })
  }

}
