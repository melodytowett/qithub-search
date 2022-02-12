import { Injectable } from '@angular/core';
//import { from } from 'rxjs';
import {map} from 'rxjs/operators';
import { HttpClient} from '@angular/common/http';
import { User } from './user';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  //user:User;
private username:string;
private Client_ID = "baa84c5702181c5588e7";
private Client_secrets = "f0a72b89fcda40794b77b68f0748f113fc0d1be0";

  constructor(private http:HttpClient) { 
    console.log("service is now ready")
    this.username = 'melodytowett'
  }
  getUserInfo(){
    return this.http.get("https://api.github.com/users/" + this.username + "?client_id=" +this.Client_ID + "&client_secret=" + this.Client_secrets)
    .pipe(map(res=> res));    
  }
}
