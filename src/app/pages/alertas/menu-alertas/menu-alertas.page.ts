import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-menu-alertas',
  templateUrl: './menu-alertas.page.html',
  styleUrls: ['./menu-alertas.page.scss'],
})
export class MenuAlertasPage implements OnInit {
  identidad: string;
  constructor(private rutaActiva: ActivatedRoute, public actionSheetCtl: ActionSheetController,private ruta: Router) {
      this.identidad = this.rutaActiva.snapshot.paramMap.get('id');
  }

  ngOnInit() {
  }


  irMenu(){
    this.ruta.navigate(['/home', this.identidad]);
  }


}

