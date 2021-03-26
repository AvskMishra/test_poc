import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShipsRoutingModule } from './ships-routing.module';
import { ShipspageComponent } from './shipspage/shipspage.component';
console.warn("ship model called");

@NgModule({
  declarations: [ShipspageComponent],
  imports: [
    CommonModule,
    ShipsRoutingModule
  ]
})
export class ShipsModule { }
