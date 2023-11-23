import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManagersRoutingModule } from './managers-routing.module';
import { ManagersComponent } from './managers.component';
import { ManagerViewComponent } from './manager-view/manager-view.component';
import { ManagerApprovedaddComponent } from './manager-approvedadd/manager-approvedadd.component';
import { ManagerViewnewComponent } from './manager-viewnew/manager-viewnew.component';


@NgModule({
  declarations: [ManagersComponent, ManagerViewComponent, ManagerApprovedaddComponent, ManagerViewnewComponent],
  imports: [
    CommonModule,
    ManagersRoutingModule
  ]
})
export class ManagersModule { }
