import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http:HttpClient) { }

  public getCustomers(){
    return this.http.get("http://localhost:8888/CUSTOMER-SERVICE/customers");
  }

  public deleteCustomer(idCustomer: number){
    return this.http.delete("http://localhost:8888/CUSTOMER-SERVICE/customers/"+idCustomer);
  }
}
