import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SensorsRoutingModule } from './sensors-routing.module';
import { SensorspageComponent } from './sensorspage/sensorspage.component';

console.warn("sensor model called");

@NgModule({
  declarations: [SensorspageComponent],
  imports: [
    CommonModule,
    SensorsRoutingModule
  ]
})
export class SensorsModule { }
