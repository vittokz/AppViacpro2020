import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
// tslint:disable-next-line: component-class-suffix
export class HomePage implements OnInit {
  identidad: string;
  constructor(private rutaActiva: ActivatedRoute, public actionSheetCtl: ActionSheetController,private ruta: Router) {
      this.identidad = this.rutaActiva.snapshot.paramMap.get('id');
  }

  ngOnInit() {
  }

}
