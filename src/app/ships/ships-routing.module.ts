import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShipspageComponent } from './shipspage/shipspage.component';

const routes: Routes = [
  {
    path:'shipspage',component:ShipspageComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShipsRoutingModule { }
