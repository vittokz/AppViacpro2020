import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AtencionPageRoutingModule } from './atencion-routing.module';

import { AtencionPage } from './atencion.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    ComponentsModule,
    AtencionPageRoutingModule
  ],
  declarations: [AtencionPage]
})
export class AtencionPageModule {}
