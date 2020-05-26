import { Actuacion } from './../../../modelos/actuacion-modelo';
import { AlertasService } from './../../../services/alertas/alertas.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-detalle-alerta',
  templateUrl: './detalle-alerta.page.html',
  styleUrls: ['./detalle-alerta.page.scss'],
})
export class DetalleAlertaPage implements OnInit {
  tipoAlerta: string;
  identidad: string;
  title: string;
  cantidad: number;
  listaActuaciones: Actuacion[];
  constructor(private rutaActiva: ActivatedRoute, public actionSheetCtl: ActionSheetController,private ruta: Router,
    private alertaService: AlertasService) {
    this.identidad = this.rutaActiva.snapshot.paramMap.get('id');
    this.tipoAlerta = this.rutaActiva.snapshot.paramMap.get('tipo');
    if(this.tipoAlerta=="0"){
      this.title = "Actuaciones del día";
      this.cargarAlertas("hoy");
    }
    if(this.tipoAlerta=="1"){
      this.title = "Actuaciones Vencidas";
      this.cargarAlertas("vencidas");
    }
    if(this.tipoAlerta=="2"){
      this.title = "Actuaciones por Vencer";
      this.cargarAlertas("porVencer");
    }
}

  ngOnInit() {
  }
  cargarAlertas(opcion: string){
     this.alertaService.getAlertas(this.identidad,opcion).subscribe(
       data=>{
         this.listaActuaciones = data;
        this.cantidad = this.listaActuaciones.length;
       }
     );
  }

  regresar(){
    this.ruta.navigate(['/menu-alertas',this.identidad]);
  }


  irMenu(){
    this.ruta.navigate(['/home', this.identidad]);
  }
}
