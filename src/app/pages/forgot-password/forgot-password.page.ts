import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthServiceService } from 'src/app/services/auth/auth-service.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.page.html',
  styleUrls: ['./forgot-password.page.scss'],
})
// tslint:disable-next-line: component-class-suffix
export class ForgotPasswordPage implements OnInit {
  formRecuperar: FormGroup;
  isExiste: string;
  constructor(public formBuilder: FormBuilder, private authService: AuthServiceService) {
  //  this.crearFormulario();
   }

  ngOnInit() {
  }

  crearFormulario(){
    this.formRecuperar = this.formBuilder.group({
      email: ['@', Validators.required, Validators.email]
    });
  }

  recuperar(){
     const email = this.formRecuperar.value;
     this.authService.recuperarPassword(email).subscribe(
       data => {
         if(data["resul"] == "error"){
             this.isExiste = "error";
         }
       }
     );
  }

}
