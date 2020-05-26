import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlertasPorVencerPageRoutingModule } from './alertas-por-vencer-routing.module';

import { AlertasPorVencerPage } from './alertas-por-vencer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AlertasPorVencerPageRoutingModule
  ],
  declarations: [AlertasPorVencerPage]
})
export class AlertasPorVencerPageModule {}
