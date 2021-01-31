import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {InventoryComponent} from './components/inventory/inventory.component';
import {CustomerComponent} from './components/customer/customer.component';
import {BillingComponent} from './components/billing/billing.component';



const routes: Routes = [
  { path: "products", component: InventoryComponent},
  { path: "customers", component: CustomerComponent},
  { path: "bills", component: BillingComponent}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
