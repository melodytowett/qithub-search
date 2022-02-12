import { Injectable } from '@angular/core';
//import { from } from 'rxjs';
import { map } from 'rxjs';
import { HttpClient, JsonpClientBackend} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserService {
private username:string;
private clientid = "baa84c5702181c5588e7";
private clientsecret = "3f362844d2e0d1d1d109b95c85bb454319939db8";

  constructor(private http:HttpClient) { 
    console.log("service is now ready")
    this.username = 'melodytowett'
  }
  getUserInfor(){
    return this.http.get("https://api.github.com.users" + this.username + "?client_id=" +this.clientid + "&client_secret=" + this.clientsecret)
    .pipe(map(res=> res));    
  }
}
