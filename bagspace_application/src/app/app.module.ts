import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { DatePickerModule } from 'datepicker-ionic2';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
<<<<<<< HEAD
import { LoginPage } from '../pages/login/login';

import { ProfileModule } from './modules/profile.module';
import { TabModule } from './modules/tab.module';
import { ReceiverModule } from './modules/receiver.module';
=======
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

>>>>>>> moverFirstPage

@NgModule({
  declarations: [
    MyApp,
    HomePage,
<<<<<<< HEAD
    LoginPage
  ],
  imports: [
    IonicModule.forRoot(MyApp), DatePickerModule,
    ProfileModule, TabModule,ReceiverModule
=======
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
>>>>>>> moverFirstPage
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
<<<<<<< HEAD
    LoginPage
=======
    ReceiverPlacePage,
    ReceiverDatePage,
    DatePicker,
    TestPage,
    MoverApplyPage,
    ChattingRoomPage
>>>>>>> moverFirstPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
