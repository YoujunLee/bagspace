import { Component } from '@angular/core';
import { ProfilePage } from '../../profile_group/profile/profile';
import { CategoryPage } from '../../receiver_group/category/category';
import { GoodsRegistrationPage } from '../../receiver_group/goods-registration/goods-registration';


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
  categoryPage = CategoryPage;
  goods_registrationPage = GoodsRegistrationPage;
}