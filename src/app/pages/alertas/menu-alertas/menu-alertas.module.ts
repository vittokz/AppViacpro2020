import { ComponentsModule } from 'src/app/components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenuAlertasPageRoutingModule } from './menu-alertas-routing.module';

import { MenuAlertasPage } from './menu-alertas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    MenuAlertasPageRoutingModule
  ],
  declarations: [MenuAlertasPage]
})
export class MenuAlertasPageModule {}
