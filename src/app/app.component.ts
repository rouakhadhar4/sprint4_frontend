import { Component, OnInit } from '@angular/core';
import {KeycloakProfile} from "keycloak-js";
import {KeycloakService} from "keycloak-angular";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{
  title = 'agular_Keycloak_depart';

  public profile? : KeycloakProfile;
    constructor(public keycloakService : KeycloakService) {
}
ngOnInit() {
  let res = this.keycloakService.isLoggedIn();
  if (res)
  this.keycloakService.loadUserProfile().then(profile=>{this.profile=profile;
  });
  }
  onLogout() {
    this.keycloakService.logout(window.location.origin);
    }
    async onLogin() {
      await this.keycloakService.login({
      redirectUri: window.location.origin
      })
      

}}
