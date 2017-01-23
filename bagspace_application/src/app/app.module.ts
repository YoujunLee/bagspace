import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';

import { ProfileModule } from './modules/profile.module';
import { TabModule } from './modules/tab.module';
import { ReceiverModule } from './modules/receiver.module';

import { ChattingRoomPage } from '../pages/chatting-room/chatting-room';

import { DatePicker } from 'ionic2-date-picker/ionic2-date-picker';
import { TestPage } from '../pages/test/test';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    DatePicker,
  LoginPage],
  imports: [
    IonicModule.forRoot(MyApp),
    ProfileModule, TabModule,ReceiverModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    DatePicker
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
