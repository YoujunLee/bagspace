import { Component } from '@angular/core';

@Component({
  template: `
    <ion-header>
     <ion-navbar [color]="isAndroid ? 'danger' : 'primary'">
          <ion-searchbar placeholder="어디로 시나요?" (click)="getItems($event)"></ion-searchbar>
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