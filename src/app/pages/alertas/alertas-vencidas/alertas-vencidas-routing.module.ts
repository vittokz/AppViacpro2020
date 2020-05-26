import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlertasVencidasPage } from './alertas-vencidas.page';

const routes: Routes = [
  {
    path: '',
    component: AlertasVencidasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlertasVencidasPageRoutingModule {}
