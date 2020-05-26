import { ComponentsModule } from './../../components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetallePlanPageRoutingModule } from './detalle-plan-routing.module';

import { DetallePlanPage } from './detalle-plan.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    DetallePlanPageRoutingModule
  ],
  declarations: [DetallePlanPage]
})
export class DetallePlanPageModule {}
