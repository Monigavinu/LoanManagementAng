import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoanofficersRoutingModule } from './loanofficers-routing.module';
import { LoanofficersComponent } from './loanofficers.component';
import { LoanofficerViewComponent } from './loanofficer-view/loanofficer-view.component';
import { LoanofficerAddComponent } from './loanofficer-add/loanofficer-add.component';


@NgModule({
  declarations: [LoanofficersComponent, LoanofficerViewComponent, LoanofficerAddComponent],
  imports: [
    CommonModule,
    LoanofficersRoutingModule
  ]
})
export class LoanofficersModule { }
