import { NgModule , ErrorHandler} from '@angular/core';
import {IonicModule, IonicErrorHandler } from 'ionic-angular';
import {CommonModule} from '@angular/common';
import { ProfilePage } from '../../pages/profile_group/profile/profile';
import { HelperPage } from '../../pages/profile_group/helper/helper';
import { SettingPage } from '../../pages/profile_group/setting/setting';


@NgModule({
  declarations: [ProfilePage, HelperPage, SettingPage],
  imports: [IonicModule, CommonModule],
  entryComponents: [ProfilePage, HelperPage, SettingPage],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class ProfileModule {}
