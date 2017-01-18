import { NgModule , ErrorHandler} from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import {CommonModule} from '@angular/common';
import { ProfilePage } from '../../pages/profile/profile';
import { HelperPage } from '../../pages/helper/helper';

@NgModule({
  declarations: [
    ProfilePage, HelperPage
  ],
  imports: [IonicModule, CommonModule],
  entryComponents: [
    ProfilePage, HelperPage
    ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class ProfileModule {}
