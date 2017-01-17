import { Component } from '@angular/core';
import { ProfilePage } from '../profile/profile';
import { LoginPage } from '../login/login';

@Component({
  template: `
     <page-upper-tabs></page-upper-tabs>
`})
export class TabsPage {
}

@Component({
  templateUrl: 'tabs.html'
})
 export class IconPage {
  rootPage = TabsPage;
  profilePage = ProfilePage;
  login = LoginPage;
}