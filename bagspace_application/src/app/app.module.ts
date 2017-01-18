import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { TabsPage, IconPage } from '../pages/tabs/tabs';
import { UpperTabsPage } from '../pages/upper-tabs/upper-tabs';
import { ProfilePage } from '../pages/profile/profile';
import { LoginPage } from '../pages/login/login';
import { HelperPage } from '../pages/helper/helper';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TabsPage,
    IconPage,
    UpperTabsPage,
    TabsPage, IconPage,
    ProfilePage,
    LoginPage, HelperPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TabsPage,
    IconPage,
    UpperTabsPage,
    ProfilePage,
    LoginPage, HelperPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
