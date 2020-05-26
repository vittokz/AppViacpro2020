import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlertasDiaPageRoutingModule } from './alertas-dia-routing.module';

import { AlertasDiaPage } from './alertas-dia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AlertasDiaPageRoutingModule
  ],
  declarations: [AlertasDiaPage]
})
export class AlertasDiaPageModule {}
