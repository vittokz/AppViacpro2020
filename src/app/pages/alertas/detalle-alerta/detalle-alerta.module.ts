import { ComponentsModule } from './../../../components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetalleAlertaPageRoutingModule } from './detalle-alerta-routing.module';

import { DetalleAlertaPage } from './detalle-alerta.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetalleAlertaPageRoutingModule,
    ComponentsModule
  ],
  declarations: [DetalleAlertaPage]
})
export class DetalleAlertaPageModule {}
