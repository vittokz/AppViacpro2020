import { HomePage } from './../home/home.page';
import { perfil } from './../../modelos/perfil-modelo';
import { PerfilService } from './../../services/perfil/perfil.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
// tslint:disable-next-line: component-class-suffix
export class PerfilPage implements OnInit {
  identidad: string;
  datosPerfil: perfil [];
  constructor(private perfilService: PerfilService, private rutaActiva: ActivatedRoute,
    private ruta: Router) { 
    this.identidad = this.rutaActiva.snapshot.paramMap.get('id');
    this.cargarDatosUsuario(this.identidad);
  }

  exit(){
    //this.platform.exitApp();
  }

  ngOnInit() { 
  }

  cargarDatosUsuario(identidad: string){
    this.perfilService.getPerfilById(identidad).subscribe(
      data => {
        this.datosPerfil = data;
      }
    );
  }

  irMenu(){
    this.ruta.navigate(['/home', this.identidad]);
  }

}
