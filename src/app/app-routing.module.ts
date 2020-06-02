import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'registrer',
    loadChildren: () => import('./pages/registrer/registrer.module').then( m => m.RegistrerPageModule)
  },
  {
    path: 'forgot-password',
    loadChildren: () => import('./pages/forgot-password/forgot-password.module').then( m => m.ForgotPasswordPageModule)
  },
  {
    path: 'home/:id',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'perfil/:id',
    loadChildren: () => import('./pages/perfil/perfil.module').then( m => m.PerfilPageModule)
  },
  {
    path: 'atencion/:id',
    loadChildren: () => import('./pages/atencion/atencion.module').then( m => m.AtencionPageModule)
  },
  {
    path: 'planes/:id',
    loadChildren: () => import('./pages/planes/planes.module').then( m => m.PlanesPageModule)
  },
  {
    path: 'detalle-plan/:id/:idContrato',
    loadChildren: () => import('./pages/detalle-plan/detalle-plan.module').then( m => m.DetallePlanPageModule)
  },
  {
    path: 'list-actuaciones/:id/:idContrato/:idProceso',
    loadChildren: () => import('./pages/list-actuaciones/list-actuaciones.module').then( m => m.ListActuacionesPageModule)
  },
  {
    path: 'alertas-dia',
    loadChildren: () => import('./pages/alertas/alertas-dia/alertas-dia.module').then( m => m.AlertasDiaPageModule)
  },
  {
    path: 'alertas-vencidas',
    loadChildren: () => import('./pages/alertas/alertas-vencidas/alertas-vencidas.module').then( m => m.AlertasVencidasPageModule)
  },
  {
    path: 'alertas-por-vencer',
    loadChildren: () => import('./pages/alertas/alertas-por-vencer/alertas-por-vencer.module').then( m => m.AlertasPorVencerPageModule)
  },
  {
    path: 'menu-alertas/:id',
    loadChildren: () => import('./pages/alertas/menu-alertas/menu-alertas.module').then( m => m.MenuAlertasPageModule)
  },
  {
    path: 'detalle-alerta/:id/:tipo',
    loadChildren: () => import('./pages/alertas/detalle-alerta/detalle-alerta.module').then( m => m.DetalleAlertaPageModule)
  },
  {
    path: 'notificaciones/:id',
    loadChildren: () => import('./pages/notificaciones/notificaciones.module').then( m => m.NotificacionesPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
