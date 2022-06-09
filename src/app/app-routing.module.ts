import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultLayoutComponent } from './layout/default-layout/default-layout.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { CustomersComponent } from './modules/customer/customers/customers.component';
import { CustomerSetupComponent } from './modules/customer/customer-setup/customer-setup.component';
const routes: Routes = [
  {
    path:'',component:DefaultLayoutComponent,
    children:[
      {path:'',component:DashboardComponent},
      {path:'dashboard',component:DashboardComponent},
      {path:'customer',component:CustomersComponent},
      {path:'customer-setup',component:CustomerSetupComponent}
    ]}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
