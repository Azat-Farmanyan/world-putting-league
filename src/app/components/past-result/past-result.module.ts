import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PastResultRoutingModule } from './past-result-routing.module';
import { PastResultComponent } from './past-result.component';


@NgModule({
  declarations: [
    PastResultComponent
  ],
  imports: [
    CommonModule,
    PastResultRoutingModule
  ]
})
export class PastResultModule { }
