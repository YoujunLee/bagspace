import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ReceiverPlacePage } from '../pages/receiver_group/receiver-place/receiver-place';
import { ReceiverDatePage } from '../pages/receiver_group/receiver-date/receiver-date';
//ionic2-datepicker calendar import
import { DatePickerModule } from 'datepicker-ionic2';
import { MoverApplyPage } from '../pages/mover_group/mover-apply/mover-apply';
import { ChattingRoomPage } from '../pages/chatting-room/chatting-room';

//ionic2-date-picker
import { DatePicker } from 'ionic2-date-picker/ionic2-date-picker';
import { TestPage } from '../pages/test/test';

//import { ViewchildComponent, Item, ItemComponent } from '../pages/viewchild';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ReceiverPlacePage,
    ReceiverDatePage,
    DatePicker,
    TestPage,
    MoverApplyPage,
    ChattingRoomPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    DatePickerModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ReceiverPlacePage,
    ReceiverDatePage,
    DatePicker,
    TestPage,
    MoverApplyPage,
    ChattingRoomPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
