import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomersComponent } from './customers/customers.component';
import { ManagersComponent } from './managers/managers.component';
import { LoanofficersComponent } from './loanofficers/loanofficers.component';

const routes: Routes = [
  {
    path:'customers',
    component:CustomersComponent,
    loadChildren: () => import('./customers/customers.module').then(x=> x.CustomersModule)
  },

  {
    path:'managers',
    component:ManagersComponent,
    loadChildren: () => import('./managers/managers.module').then(x=> x.ManagersModule)
  },
  {
  path:'loanofficers',
    component:LoanofficersComponent,
    loadChildren: () => import('./loanofficers/loanofficers.module').then(x=> x.LoanofficersModule)
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
