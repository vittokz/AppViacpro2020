import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListActuacionesPage } from './list-actuaciones.page';

const routes: Routes = [
  {
    path: '',
    component: ListActuacionesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListActuacionesPageRoutingModule {}
