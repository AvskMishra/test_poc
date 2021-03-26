import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';
import { AboutpageComponent } from './aboutpage/aboutpage.component';
console.warn("about model called");

@NgModule({
  declarations: [AboutpageComponent],
  imports: [
    CommonModule,
    AboutRoutingModule
  ]
})
export class AboutModule {
  
 }
