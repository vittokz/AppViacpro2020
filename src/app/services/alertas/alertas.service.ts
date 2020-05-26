import { HttpClient } from '@angular/common/http';
import { Actuacion } from './../../modelos/actuacion-modelo';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AlertasService {
  url: string = environment.url + 'alertas/';
  constructor(private http: HttpClient) { }

  getAlertas(identidad: string, opcion: string): Observable<Actuacion[]>{
    return this.http.get<Actuacion[]>(this.url+ 'getActuaciones.php?identidad=' + identidad + '&opcion=' + opcion);
  }
}
