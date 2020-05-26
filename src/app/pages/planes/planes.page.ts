import { PlanesService } from './../../services/planes/planes.service';
import { Component, OnInit } from '@angular/core';
import { Plan } from 'src/app/modelos/planes-modelo';
import { ActivatedRoute, Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-planes',
  templateUrl: './planes.page.html',
  styleUrls: ['./planes.page.scss'],
})
// tslint:disable-next-line:component-class-suffix
export class PlanesPage implements OnInit {
   identidad: string;
   listaPlanes: Plan[];
   
  constructor(private planesService: PlanesService,private rutaActiva: ActivatedRoute, private ruta: Router,
    public loadingController: LoadingController) { 
    this.identidad = this.rutaActiva.snapshot.paramMap.get('id');
    this.cargarPlanes();
  }

  ngOnInit() {
    this.cargando();
  }

  async cargando() {
    const loading = await this.loadingController.create({
      message: 'Cargando...',
      duration: 1500
    });
    await loading.present();
    const { role, data } = await loading.onDidDismiss();
  }

  cargarPlanes(){
     this.planesService.getPlanesById(this.identidad).subscribe(
       data =>{
         this.listaPlanes = data;
       }
     );
  }

  irMenu(){
    this.ruta.navigate(['/home', this.identidad]);
  }

  detallePlan(id: string){
     this.ruta.navigate(['/detalle-plan',this.identidad,id]);
  }

  

}
