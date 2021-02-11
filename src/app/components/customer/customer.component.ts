import { Component, OnInit } from '@angular/core';
import {CustomerModel} from '../../models/customer-model';
import {CustomerService} from '../../services/customer-service/customer.service';
import {InventoryService} from '../../services/inventory-service/inventory.service';
import {KeycloakSecurityService} from '../../services/keycloak-service/keycloak-security.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  customers: CustomerModel[];
  errorMessage: string;
  isAdmin: boolean;
  isCustomerManager: boolean;

  constructor(private customerService: CustomerService, public keycloakSecurityService: KeycloakSecurityService) { }

  ngOnInit(): void {
    this.onGetCustomers();
    this.isAdmin = this.keycloakSecurityService.isAdmin();
    this.isCustomerManager = this.keycloakSecurityService.isCustomerManager();
  }

  private onGetCustomers(){
    this.customerService.getCustomers().subscribe(
      data=>{ this.customers=data['_embedded']['customers'] },
        error => {this.errorMessage = error.error.message}
    )
  }

  onDeleteCustomer(idCustomer: number){
    this.customerService.deleteCustomer(idCustomer).subscribe(
      response=>{ this.customers.filter((c)=>{
        return c.id !== idCustomer;
      }) },
      error => {this.errorMessage = error.error.message}
    )
  }

}
