import { Juzgado } from './../../modelos/juzgados-modelo';
import { ProcesosService } from './../../services/procesos/procesos.service';
import { Actuacion } from './../../modelos/actuacion-modelo';
import { Proceso } from './../../modelos/proceso-modelo';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-list-actuaciones',
  templateUrl: './list-actuaciones.page.html',
  styleUrls: ['./list-actuaciones.page.scss'],
})
// tslint:disable-next-line:component-class-suffix
export class ListActuacionesPage implements OnInit {
  detalleProceso: Proceso[];
  listaActuaciones: Actuacion[];
  detalleJuzgado: Juzgado[];
  identidad: string;
  idContrato: string;
  idProceso: string;
  idJuzgado: string;
  nomJuzgado:string;
  cantActuaciones: number;
  
  constructor(private rutaActiva: ActivatedRoute, private ruta: Router, private procesoService: ProcesosService) { 
    this.identidad = this.rutaActiva.snapshot.paramMap.get('id');
    this.idContrato = this.rutaActiva.snapshot.paramMap.get('idContrato');
    this.idProceso = this.rutaActiva.snapshot.paramMap.get('idProceso');
    this.cargarProceso(this.idProceso);
    this.cargarActuacionesById(this.idProceso);
  }

  ngOnInit() {
  }

  cargarProceso(idProceso: string){
      this.procesoService.getDetalleProceso(idProceso).subscribe(
        data =>{
          this.detalleProceso = data;
          this.idJuzgado = this.detalleProceso[0].idJuzgado;
          this.cargarJuzgadoDetalle(this.idJuzgado);
        }
      );
  }

  cargarJuzgadoDetalle(idJuzgado: string){
      this.procesoService.getDetalleJuzgado(idJuzgado).subscribe(
        data =>{
          this.detalleJuzgado = data;
          this.nomJuzgado = this.detalleJuzgado[0].nombre;
        }
      );
  }

  cargarActuacionesById(idProceso: string){
    this.procesoService.getActuacionesById(idProceso).subscribe(
      data =>{
        this.listaActuaciones = data;
        this.cantActuaciones = this.listaActuaciones.length;
      }
    );
  }

  irMenu(){
    this.ruta.navigate(['/home', this.identidad]);
  }

  regresar(){
    this.ruta.navigate(['/detalle-plan', this.identidad,this.idContrato]);
  }

}
