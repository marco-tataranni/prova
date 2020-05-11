import { Injectable } from '@angular/core';
//Tataranni Marco
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class NoleggioService {

   constructor(private http: HttpClient) { }

  LogIn(user: string, psw:string) {
    const url = `https://3000-e005c1d1-5ac0-4c24-9817-7a52d1a80262.ws-eu01.gitpod.io/users/login/${user}/${psw}`;

    let headers = new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
      'content-type': 'application/json'
    })



    let obsLogIn = this.http.get(url, { headers });
    return obsLogIn;
 //Ritorno un observable ai componenti che richiedono il servizio
  }

}
