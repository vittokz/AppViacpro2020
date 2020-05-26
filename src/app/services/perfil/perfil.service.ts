import { perfil } from './../../modelos/perfil-modelo';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PerfilService {
  url: string = environment.url + 'authUser/';
  headers: any		= new HttpHeaders({ 'Content-Type': 'application/json' });
  constructor(private http: HttpClient ) { }

  // recuperar contraseña usuarios
  getPerfilById(identidad: string): Observable<perfil[]>{
     return this.http.get<perfil[]>(this.url + 'perfil.php?identidad=' + identidad);
  }

  addAtencionCliente(identidad: string, descripcion: string): Observable<any>{
     let options 	: any		= { 
       "descripcion" : descripcion, 
       "identidad" : identidad };
      return this.http.post<any>(this.url + "insertarAtencion.php",JSON.stringify(options), this.headers);
  }
}
