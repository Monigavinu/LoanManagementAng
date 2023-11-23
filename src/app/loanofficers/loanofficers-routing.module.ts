import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoanofficerViewComponent } from './loanofficer-view/loanofficer-view.component';
import { LoanofficerAddComponent } from './loanofficer-add/loanofficer-add.component';

const routes: Routes = [
  {
    path:'view',
    component: LoanofficerViewComponent
  },
  {
    path : 'add/refId',
    component:LoanofficerAddComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoanofficersRoutingModule { }
