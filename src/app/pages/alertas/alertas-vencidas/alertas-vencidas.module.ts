import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlertasVencidasPageRoutingModule } from './alertas-vencidas-routing.module';

import { AlertasVencidasPage } from './alertas-vencidas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AlertasVencidasPageRoutingModule
  ],
  declarations: [AlertasVencidasPage]
})
export class AlertasVencidasPageModule {}
