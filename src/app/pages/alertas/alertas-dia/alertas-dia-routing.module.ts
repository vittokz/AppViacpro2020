import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlertasDiaPage } from './alertas-dia.page';

const routes: Routes = [
  {
    path: '',
    component: AlertasDiaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlertasDiaPageRoutingModule {}
