import { NgModule , ErrorHandler} from '@angular/core';
import {IonicModule, IonicErrorHandler } from 'ionic-angular';
import {CommonModule} from '@angular/common';
import { MoverApplyPage } from '../../pages/mover_group/mover-apply/mover-apply';


@NgModule({
  declarations: [
    MoverApplyPage
  ],
  imports: [IonicModule, CommonModule],
  entryComponents: [
      MoverApplyPage
    ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class ReceiverModule {}
