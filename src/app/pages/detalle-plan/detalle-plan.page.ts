import { Proceso } from './../../modelos/proceso-modelo';
import { PlanDetalle } from './../../modelos/plan-modelo';
import { Component, OnInit } from '@angular/core';
import { Plan } from 'src/app/modelos/planes-modelo';
import { PlanesService } from 'src/app/services/planes/planes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-detalle-plan',
  templateUrl: './detalle-plan.page.html',
  styleUrls: ['./detalle-plan.page.scss'],
})
// tslint:disable-next-line:component-class-suffix
export class DetallePlanPage implements OnInit {
   identidad: string;
   idContrato: string;
   detallePlan : PlanDetalle;
   planSelec: Plan;
   listaProcesos : Proceso[];
   cantProcecos: number;
  constructor(private planesService: PlanesService,private rutaActiva: ActivatedRoute, private ruta: Router,
    public actionSheetController: ActionSheetController) { 
    this.identidad = this.rutaActiva.snapshot.paramMap.get('id');
    this.idContrato = this.rutaActiva.snapshot.paramMap.get('idContrato');
    this.cargarPlanSeleccionado();
    this.cargarProcesos();
  }


  async infoProceso(procesoSel: Proceso) {
   
    const actionSheet = await this.actionSheetController.create({
      header: 'Información del Proceso',
      buttons: [{
        text: "Radicado:\n" + procesoSel.idRadicado,
        role: 'destructive',
        icon: '',
        cssClass: 'fondoAyuda',
        handler: () => {
          console.log('Delete clicked');
        }
      }, {
        text: "Demandado:\n" + procesoSel.demandado.substr(0,38)+"..",
        icon: '',
        cssClass: 'fondoAyuda',
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: "Demandante:\n" + procesoSel.demandante.substr(0,38)+"..",
        icon: '',
        cssClass: 'fondoAyuda',
        handler: () => {
          console.log('Play clicked');
        }
      }, {
        text: "Fecha Registro:\n" + procesoSel.fechaRegistro,
        icon: '',
        cssClass: 'fondoAyuda',
        handler: () => {
          console.log('Favorite clicked');
        }
      }, {
        text: 'Cancelar',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }


  cargarPlanSeleccionado(){
    this.planesService.getPlanByIdContrato(this.idContrato).subscribe(
      data =>{
        this.planSelec = data;
         this.planesService.getPlanDetalleByIdPlan(this.planSelec[0].idPlan).subscribe(
           dataDetalle =>{
             this.detallePlan = dataDetalle;
           }
         );
      }
    );
  }

  cargarProcesos(){
    this.planesService.getProcesosByIdContrato(this.idContrato).subscribe(
      data =>{
        this.listaProcesos = data;
        this.cantProcecos = this.listaProcesos.length;
      }
    );
  }

  irMenu(){
    this.ruta.navigate(['/home', this.identidad]);
  }

  regresar(){
    this.ruta.navigate(['/planes', this.identidad]);
  }

  ngOnInit() {
  }

  verActuaciones(idProceso: string){
    this.ruta.navigate(['/list-actuaciones', this.identidad, this.idContrato, idProceso]);
  }

}
