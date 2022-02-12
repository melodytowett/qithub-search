import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { Repos } from '../repos';
import { UserService } from '../user.service';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { subscribeOn } from 'rxjs';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  profile!: User
  profilename!: string
  repos!: Repos[]
  constructor(private userservice: UserService, private http: HttpClient) {
    this.profilename = 'melodytowett/repos'
  }

  ngOnInit() {
    this.userservice.getUserInfo();
    this.profile = this.userservice.profile
    this.getRepos();

  }
  getRepos(){
    this.http.get<any>(environment.repos_url +this.profilename).subscribe(response =>{
      console.log (response)
      this.repos = response;
    })
  }

}
