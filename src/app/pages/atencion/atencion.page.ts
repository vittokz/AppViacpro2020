import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { perfil } from 'src/app/modelos/perfil-modelo';
import { PerfilService } from 'src/app/services/perfil/perfil.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-atencion',
  templateUrl: './atencion.page.html',
  styleUrls: ['./atencion.page.scss'],
})
// tslint:disable-next-line:component-class-suffix
export class AtencionPage implements OnInit {
  identidad: string;
  datosPerfil: perfil [];
  formAtencion: FormGroup;
  constructor(private perfilService: PerfilService, private rutaActiva: ActivatedRoute, private ruta: Router,
    private formBuilder: FormBuilder,public alertCtl: AlertController) { 
    this.identidad = this.rutaActiva.snapshot.paramMap.get('id');
    this.cargarDatosUsuario(this.identidad);
    this.crearFormulario();
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

  crearFormulario(){
    this.formAtencion = this.formBuilder.group({
      descripcion: ['', Validators.required]
    });
  }

  async alertaEnvio() {
    const alert = await this.alertCtl.create({
      header: 'Viacpro App',
      subHeader: '',
      message: 'Se envío su solicitud correctamente.',
      buttons: ['OK']
    });

    await alert.present();
  }

  enviar(){
    const form = this.formAtencion.value;
    this.perfilService.addAtencionCliente(this.identidad,form.descripcion).subscribe(
      data => {
         if(data["result"] =="ok"){
           this.alertaEnvio();
           this.formAtencion.reset();
         }
         else{
           
         }
      }
    );
  }

  irMenu(){
    this.ruta.navigate(['/home', this.identidad]);
  }

}
