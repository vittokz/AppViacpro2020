import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetalleAlertaPage } from './detalle-alerta.page';

const routes: Routes = [
  {
    path: '',
    component: DetalleAlertaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetalleAlertaPageRoutingModule {}
