import { NgModule , ErrorHandler} from '@angular/core';
import {IonicModule, IonicErrorHandler } from 'ionic-angular';
import {CommonModule} from '@angular/common';
import { CategoryPage } from '../../pages/receiver_group/category/category';
import { GoodsRegistrationPage } from '../../pages/receiver_group/goods-registration/goods-registration';

@NgModule({
  declarations: [
    CategoryPage,
    GoodsRegistrationPage
  ],
  imports: [IonicModule, CommonModule],
  entryComponents: [
    CategoryPage,
    GoodsRegistrationPage
    ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class ReceiverModule {}
