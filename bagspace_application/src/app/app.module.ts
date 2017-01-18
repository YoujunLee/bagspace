import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { TabsPage, IconPage } from '../pages/tabs/tabs';
import { UpperTabsPage } from '../pages/upper-tabs/upper-tabs';
import { LoginPage } from '../pages/login/login';

import { ProfileModule } from './modules/profile.moudle';
import { TabModule } from './modules/tab.module';
import { ReceiverModule } from './modules/receiver.module';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    ProfileModule, TabModule,ReceiverModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
