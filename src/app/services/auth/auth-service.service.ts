import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  url: string = environment.url + 'authUser/';
  headers: any		= new HttpHeaders({ 'Content-Type': 'application/json' });
  constructor(private http: HttpClient) { }

  loginUser(identidad: string, clave: string): Observable<any> {
    let options: any = {
      "identidad" : identidad,
      "clave" : clave
    };
    return this.http.post(this.url + 'validarLogin.php', JSON.stringify(options), this.headers);
  }

  //recuperar contraseña usuarios
  recuperarPassword(email: string):Observable<any>{
      let options : any ={
        "email": email
      };
        return this.http.get(this.url + '');
  }

}
