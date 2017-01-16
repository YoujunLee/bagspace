import { Component } from '@angular/core';
import { MenuController } from 'ionic-angular';


@Component({
  template: `
    <ion-header>
     <ion-navbar #mycontent [color]="isAndroid ? 'danger' : 'primary'">
          <ion-buttons start>
            <button ion-button menuToggle icon-only>
              <ion-icon name="menu"></ion-icon>
            </button>
          </ion-buttons>
          <ion-title>bagspace</ion-title>
      </ion-navbar>
    </ion-header>
   

    <ion-content>
    </ion-content>
     <ion-menu side="left" persistent="true" [content]="mycontent">
      <ion-toolbar>
         <ion-title>Menu</ion-title>
      </ion-toolbar>
      <ion-list>
         <button ion-item>Login</button>
         <button ion-item>Signup</button>
      </ion-list>
    </ion-menu>
`})
export class TabsPage {
   constructor(public menuCtrl: MenuController) {}
   openMenu() {
   this.menuCtrl.open();
   }
}

@Component({
  templateUrl: 'tabs.html'
})
 export class IconPage {
  rootPage = TabsPage;
}