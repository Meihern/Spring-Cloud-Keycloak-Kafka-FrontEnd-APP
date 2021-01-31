import { Component, OnInit } from '@angular/core';
import {ProductModel} from '../../models/product-model';
import {InventoryService} from '../../services/inventory-service/inventory.service';
import {KeycloakSecurityService} from '../../services/keycloak-service/keycloak-security.service';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {

  products: ProductModel[];
  errorMessage: string;
  isAdmin: boolean;
  isProductManager: boolean;

  constructor(private inventoryService: InventoryService, public keycloakSecurityService: KeycloakSecurityService) { }

  ngOnInit(): void {
    this.onGetProducts();
    this.isAdmin = this.keycloakSecurityService.isAdmin();
    this.isProductManager = this.keycloakSecurityService.isProductManager();
  }

  onGetProducts(){
    this.inventoryService.getProducts().subscribe(
      data=>{ this.products = data['_embedded']['products']},
          error => {this.errorMessage = error.error.message}
    )
  }

  onDeleteProduct(idProduct: number){
    this.inventoryService.deleteProduct(idProduct).subscribe(
      response=>{ this.products.filter((p)=>{
          return p.id !== idProduct;
      }) },
        error => {this.errorMessage = error.error.message}
      )
  }

}
