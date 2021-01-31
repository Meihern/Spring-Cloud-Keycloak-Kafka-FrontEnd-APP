import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InventoryService {

  constructor(private http: HttpClient) { }

  public getProducts(){
    return this.http.get("http://localhost:8888/INVENTORY-SERVICE/products");
  }

  public deleteProduct(idProduct: number){
    return this.http.delete("http://localhost:8888/INVENTORY-SERVICE/products/"+idProduct);
  }
}
