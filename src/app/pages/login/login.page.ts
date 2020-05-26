import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthServiceService } from 'src/app/services/auth/auth-service.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
// tslint:disable-next-line: component-class-suffix
export class LoginPage implements OnInit {
  formLogin: FormGroup;
  logueado: string;
  constructor(public formBuilder: FormBuilder, private authService: AuthServiceService, private router: Router, 
    public alertCtl: AlertController) {
    this.crearFormulario();
  }

  ngOnInit() {
  }

  async alertaIngreso() {
    const alert = await this.alertCtl.create({
      header: 'Viacpro App',
      subHeader: '',
      message: 'Bienvenido a Viacpro App',
      buttons: ['OK']
    });

    await alert.present();
  }

  crearFormulario(){
    this.formLogin = this.formBuilder.group({
      identidad: ['', Validators.required],
      clave: ['', Validators.required]
    });
  }

  login(){
    const form = this.formLogin.value;
    this.authService.loginUser(form.identidad, form.clave).subscribe(
      data => {
         if(data["resul"] >0){
           this.alertaIngreso();
            this.router.navigate(['/home', form.identidad]);
         }
         else{
           this.logueado="mal";
         }
      }
    );
  }
}
