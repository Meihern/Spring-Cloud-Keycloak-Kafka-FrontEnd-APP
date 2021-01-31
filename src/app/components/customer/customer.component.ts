import { Component, OnInit } from '@angular/core';
import {CustomerModel} from '../../models/customer-model';
import {CustomerService} from '../../services/customer-service/customer.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  customers: CustomerModel[];
  errorMessage: string;

  constructor(private customerService: CustomerService) { }

  ngOnInit(): void {
  }

  private onCustomers(){
    this.customerService.getCustomers().subscribe(
      data=>{ this.customers=data['_embedded']['customers'] },
        error => {this.errorMessage = error.error.message}
    )
  }

}
