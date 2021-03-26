import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  //{ path: '**',  redirectTo: './home/homepage' },
  {
    path: 'home', loadChildren: () => import('./home/home.module').then(mod => mod.HomeModule)
  },
  {
    path: 'about', loadChildren: () => import('./about/about.module').then(mod => mod.AboutModule)
  },
  {
    path: 'ships', loadChildren: () => import('./ships/ships.module').then(mod => mod.ShipsModule)
  },
  {
    path: 'sensors', loadChildren: () => import('./sensors/sensors.module').then(mod => mod.SensorsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
