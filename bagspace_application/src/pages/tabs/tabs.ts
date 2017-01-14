import { Component } from '@angular/core';

import { Platform } from 'ionic-angular';


@Component({
  template: `
    <ion-header>
      <ion-navbar [color]="isAndroid ? 'danger' : 'primary'">
          <ion-buttons start>
            <button ion-button icon-only>
              <ion-icon name="list"></ion-icon>
            </button>
          </ion-buttons>
          <ion-title>bagspace</ion-title>
      </ion-navbar>
    </ion-header>
    <ion-content>
    </ion-content>
`})
export class TabsPage {
 
}

@Component({
  templateUrl: 'tabs.html'
})
 export class IconPage {
  rootPage = TabsPage;
}