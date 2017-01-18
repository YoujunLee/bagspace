import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { TabsPage, IconPage } from '../pages/tabs/tabs';
import { UpperTabsPage } from '../pages/upper-tabs/upper-tabs';
import { LoginPage } from '../pages/login/login';

import { ProfileModule } from './modules/profile.moudle';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    UpperTabsPage,
    TabsPage, IconPage,
    LoginPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    ProfileModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TabsPage,
    IconPage,
    UpperTabsPage,
    LoginPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
