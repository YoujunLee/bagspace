import { Component } from '@angular/core';

import { Platform } from 'ionic-angular';


@Component({
  template: `
    <ion-header>
      <ion-navbar [color]="isAndroid ? 'danger' : 'primary'">
        <ion-title>bagspace</ion-title>
      </ion-navbar>
    </ion-header>
    <ion-content>
    </ion-content>
`})
export class TabsPage {
  isAndroid: boolean = false;

  constructor(platform: Platform) {
    this.isAndroid = platform.is('android');
  }
}

@Component({
  template: `
  <ion-tabs class="tabs-icon">
    <ion-tab tabIcon="contact" [root]="rootPage">1</ion-tab>
    <ion-tab tabIcon="compass" [root]="rootPage"></ion-tab>
    <ion-tab tabIcon="analytics" [root]="rootPage"></ion-tab>
    <ion-tab tabIcon="settings" [root]="rootPage"></ion-tab>
  </ion-tabs>
`})
export class IconPage {
  rootPage = TabsPage;

  isAndroid: boolean = false;

  constructor(platform: Platform) {
    this.isAndroid = platform.is('android');
  }
}