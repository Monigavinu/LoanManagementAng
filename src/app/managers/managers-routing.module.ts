import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManagerViewComponent } from './manager-view/manager-view.component';
import { ManagerViewnewComponent } from './manager-viewnew/manager-viewnew.component';
import { ManagerApprovedaddComponent } from './manager-approvedadd/manager-approvedadd.component';

const routes: Routes = [
  {
    path : 'view',
    component : ManagerViewComponent
  },
 { path : 'viewnew',
 component :ManagerViewnewComponent
},
{
  path:'approveadd',
  component:ManagerApprovedaddComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManagersRoutingModule { }
