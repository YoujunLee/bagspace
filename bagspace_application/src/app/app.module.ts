import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { TabsPage, IconPage } from '../pages/tabs/tabs';
import { UpperTabsPage } from '../pages/upper-tabs/upper-tabs';
import { ProfilePage } from '../pages/profile/profile';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TabsPage,
    IconPage,
    UpperTabsPage,
    TabsPage, IconPage,
    ProfilePage
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
    ProfilePage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
