import { Component, OnInit } from '@angular/core';
import {KeycloakSecurityService} from '../../services/keycloak-service/keycloak-security.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  ngOnInit(): void {
  }

  constructor(public keycloakSecurityService: KeycloakSecurityService) {}
  onLogOut() { this.keycloakSecurityService.kc.logout(); }
  onChangePassword() { this.keycloakSecurityService.kc.accountManagement(); }
  onLogin() { this.keycloakSecurityService.kc.login(); }

}
