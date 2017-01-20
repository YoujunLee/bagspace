import { Component } from '@angular/core';
import {  NavController, ModalController, NavParams } from 'ionic-angular';
import { HelperPage } from '../helper/helper';
import { SettingPage } from '../setting/setting';
import { InvitePage } from '../invite/invite';
import { FeedbackPage } from '../feedback/feedback';

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfilePage {
  constructor(public nav: NavController, public modalCtrl: ModalController, public navParams: NavParams) {}

  openModal() {
    let modal = this.modalCtrl.create(HelperPage);
    modal.present();
  }

   openPage(page) {
    this.nav.push(page);
  }
  settings=SettingPage;
  invite=InvitePage;
  feedback=FeedbackPage;
}
