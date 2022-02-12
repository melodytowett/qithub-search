import { Injectable } from '@angular/core';

//import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { User } from './user';
import { environment } from 'src/environments/environment';
//import { rejects } from 'assert';
//import { resolve } from 'dns';
//import { error } from 'console';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private username: string;
  private Client_ID = "baa84c5702181c5588e7";
  private Client_secrets = "f0a72b89fcda40794b77b68f0748f113fc0d1be0";
  profile !: User

  constructor(private http: HttpClient) {
    console.log("service is now ready")
    this.username = 'melodytowett'
    this.profile = new User("", "", "", "", "", "", "")
  }
  getUserInfo() {
    interface apiResponse {
      login: string,
      name: string,
      avatar_url: string,
      html_url: string,
      followers: string,
      following: string,
      public_repos: string,

    }

    let promise = new Promise((resolve, reject) => {
      this.http.get<apiResponse>(environment.apiurl + this.username + "?client_id=" + this.Client_ID + "&client_secret=" + this.Client_secrets).toPromise().then(response => {
        this.profile.login = response!.login;
        this.profile.name = response!.name;
        this.profile.html_url = response!.html_url;
        this.profile.avatar_url = response!.avatar_url;
        this.profile.following = response!.following;
        this.profile.followers = response!.followers;
        this.profile.public_repos = response!.public_repos

        resolve(null);
      },
        error => {
          console.log("inlavid user")
          reject(error)
        })
    })
    return promise;
  }
  updateProfile(username: string) {
    this.username = this.username
  }

}
