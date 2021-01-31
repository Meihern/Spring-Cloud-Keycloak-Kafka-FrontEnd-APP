import { Injectable } from '@angular/core';
import {KeycloakInstance} from 'keycloak-js';
import {HttpClient} from '@angular/common/http';
declare var Keycloak: any;
@Injectable({
  providedIn: 'root'
})
export class KeycloakSecurityService {
  public kc: KeycloakInstance;

  constructor(private http: HttpClient) { }

  public async init(){
    console.log("Test Initialisation");
    this.kc = new Keycloak({
      url: "http://localhost:8080/auth",
      realm: "ecom-micro-services",
      clientId: "ecom-frontend-angular",
    });

    await this.kc.init({
      onLoad: "check-sso",
    });
    console.log(this.kc.token);
  }

  public isAdmin(): boolean{
    return this.kc.hasRealmRole("ADMIN");
  }

  public isCustomerManager(): boolean{
    return this.kc.hasRealmRole("CUSTOMER_MANAGER");
  }

  public isProductManager(): boolean{
    return this.kc.hasRealmRole("PRODUCT_MANAGER");
  }

  public isBillingManager(): boolean{
    return this.kc.hasRealmRole("BILLING_MANAGER");
  }

}
