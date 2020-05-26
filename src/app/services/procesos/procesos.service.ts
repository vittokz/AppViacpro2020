import { Juzgado } from './../../modelos/juzgados-modelo';
import { Actuacion } from './../../modelos/actuacion-modelo';
import { HttpClient } from '@angular/common/http';
import { Proceso } from './../../modelos/proceso-modelo';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProcesosService {

    constructor(private http: HttpClient) { }
    url: string = environment.url + 'procesos/';

    getDetalleProceso(idproceso: string): Observable<Proceso[]>{
       return this.http.get<Proceso[]>(this.url + 'getProcesoById.php?idProceso=' + idproceso);
    }

    getDetalleJuzgado(idJuzgado: string): Observable<Juzgado[]>{
      return this.http.get<Juzgado[]>(this.url + 'getJuzgado.php?idJuzgado=' + idJuzgado);
   }

    getActuacionesById(idproceso: string): Observable<Actuacion[]>{
      return this.http.get<Actuacion[]>(this.url + 'getActuacionesById.php?idProceso=' + idproceso);
   }
}
