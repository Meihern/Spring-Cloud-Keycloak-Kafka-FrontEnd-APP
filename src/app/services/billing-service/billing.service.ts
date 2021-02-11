import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BillingService {

  constructor(private http: HttpClient) { }

  public getBills(){
    return this.http.get("http://localhost:8888/BILLING-SERVICE/bills");
  }

  public getFullBill(id: number){
    return this.http.get("http://localhost:8888/BILLING-SERVICE/fullBill/"+id);
  }

  public deleteBill(idBill: number){
    return this.http.delete("http://localhost:8888/BILLING-SERVICE/bills/"+idBill);
  }
}
