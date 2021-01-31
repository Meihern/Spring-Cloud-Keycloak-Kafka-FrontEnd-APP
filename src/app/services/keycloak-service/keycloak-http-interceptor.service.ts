import { Injectable } from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {KeycloakSecurityService} from './keycloak-security.service';

@Injectable({
  providedIn: 'root'
})
export class KeycloakHttpInterceptorService implements HttpInterceptor{

  constructor(private keycloakService: KeycloakSecurityService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log("Interceptor"+req);
    if (!this.keycloakService.kc.authenticated) return next.handle(req);
    let request=req.clone({
      setHeaders: {
        Authorization: 'Bearer '+this.keycloakService.kc.token
      }
    });
    return next.handle(request);
  }
}
