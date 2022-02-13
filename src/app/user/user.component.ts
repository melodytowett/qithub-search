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
  profile!: any
  repos!: any
  username!: string
  constructor(private service: UserService, private http: HttpClient) {
    //this.profile = 'melodytowett/repos'
  }
  findUser() {
    this.service.updateProfile(this.username);
    this.service.getProfile().subscribe( profile =>{
      console.log(profile);
      this.profile = profile;
      
    })
    this.service.getRepos().subscribe(repos =>{
      this.repos = repos;
      console.log(repos);
    })

  }
  ngOnInit() {
 
  }

}

