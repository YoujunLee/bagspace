import { Component } from '@angular/core';
import {  ModalController, NavParams } from 'ionic-angular';
import { HelperPage } from '../helper/helper';

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfilePage {

  constructor(public modalCtrl: ModalController, public navParams: NavParams) {}
  openModal() {
    let modal = this.modalCtrl.create(HelperPage);
    modal.present();
  }
}
