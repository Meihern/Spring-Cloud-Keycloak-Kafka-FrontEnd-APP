import {APP_INITIALIZER, NgModule} from '@angular/core';
import { AppComponent } from './app.component';
import { InventoryComponent } from './components/inventory/inventory.component';
import { BillingComponent } from './components/billing/billing.component';
import { CustomerComponent } from './components/customer/customer.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {KeycloakSecurityService} from './services/keycloak-service/keycloak-security.service';
import {KeycloakHttpInterceptorService} from './services/keycloak-service/keycloak-http-interceptor.service';
import {AppRoutingModule} from './app-routing.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

export function keycloakFactory(keycloakSecurityService: KeycloakSecurityService) {
  return ()=>keycloakSecurityService.init();
}

@NgModule({
  declarations: [
    AppComponent,
    InventoryComponent,
    BillingComponent,
    CustomerComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [
    {provide: APP_INITIALIZER, deps: [KeycloakSecurityService], useFactory: keycloakFactory, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: KeycloakHttpInterceptorService, multi: true},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
