import { Proceso } from './../../modelos/proceso-modelo';
import { PlanDetalle } from './../../modelos/plan-modelo';
import { Injectable } from '@angular/core';
import { Plan } from 'src/app/modelos/planes-modelo';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PlanesService {
  url: string = environment.url + 'planes/';
  headers: any		= new HttpHeaders({ 'Content-Type': 'application/json' });
  constructor(private http: HttpClient) { }

  // traer planes por Identidad
  getPlanesById(identidad: string): Observable<Plan[]>{
    return this.http.get<Plan[]>(this.url + 'getPlanesById.php?identidad=' + identidad);
  }

  //traer datos plan seleccionado
  getPlanByIdContrato(idContrato: string): Observable <Plan>{
    return this.http.get<Plan>(this.url + 'getPlanByIdContrato.php?idContrato=' + idContrato);
  }
  //traer detalles del plan seleccionado 1,2 o 3
  getPlanDetalleByIdPlan(idPlanDetalle: string): Observable<PlanDetalle>{
    return this.http.get<PlanDetalle>(this.url + 'getPlanDetalleByIdPlan.php?idPlan=' + idPlanDetalle);
  }
   //traer detella de procesos segun id de contrato
  getProcesosByIdContrato(idContrato:string): Observable<Proceso[]>{
      return this.http.get<Proceso[]>(this.url + 'getProcesosByIdContrato.php?idContrato=' + idContrato);
  }
}
