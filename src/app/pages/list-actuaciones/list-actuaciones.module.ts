import { ComponentsModule } from './../../components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListActuacionesPageRoutingModule } from './list-actuaciones-routing.module';

import { ListActuacionesPage } from './list-actuaciones.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    ListActuacionesPageRoutingModule
  ],
  declarations: [ListActuacionesPage]
})
export class ListActuacionesPageModule {}
