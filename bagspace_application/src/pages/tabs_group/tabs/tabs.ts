import { Component } from '@angular/core';
import { ProfilePage } from '../../profile_group/profile/profile';
import { CategoryPage } from '../../receiver_group/category/category';
import { GoodsRegistrationPage } from '../../receiver_group/goods-registration/goods-registration';
import { GoodsRegistration2Page } from '../../goods-registration2/goods-registration2';
import { NavController, NavParams } from 'ionic-angular';

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
    constructor(public navCtrl: NavController, public navParams: NavParams) {}
  rootPage = TabsPage;
  profilePage = ProfilePage;
  categoryPage = CategoryPage;
  goods_registrationPage = GoodsRegistrationPage;
  go_register_page(){
  this.navCtrl.push(GoodsRegistrationPage);
  }
}