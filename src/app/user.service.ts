import { Injectable } from '@angular/core';;
import { HttpClient } from '@angular/common/http';
import { User } from './user';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs';

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
    //this.profile = new User("", "", "", "", "", "", "")
  }
  getProfile(){
    return this.http.get(environment.apiurl + this.username + '?client_id' + this.Client_ID + '&client_secret' + this.Client_secrets).pipe(map(res =>res));

  }
  getRepos(){
    return this.http.get(environment.repos_url + this.username + '/repos?client_id' + this.Client_ID + '&client_secret=' + this.Client_secrets ).pipe(map(res => res));

  }

  updateProfile(username: string) {
    this.username = username
  }

}
