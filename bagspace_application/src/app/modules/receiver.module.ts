import { NgModule , ErrorHandler} from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import {CommonModule} from '@angular/common';
import { CategoryPage } from '../../pages/category/category';
@NgModule({
  declarations: [
    CategoryPage
  ],
  imports: [IonicModule, CommonModule],
  entryComponents: [
    CategoryPage
    ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class ReceiverModule {}
