import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
<<<<<<< HEAD
import { TabsPage, IconPage } from '../pages/tabs/tabs';
import { UpperTabsPage } from '../pages/upper-tabs/upper-tabs';
=======
import { MoverFirstPage } from '../pages/mover-first/mover-first';
>>>>>>> a737a47e787a94a99c9dfda96d45b88aabb946c1

@NgModule({
  declarations: [
    MyApp,
    HomePage,
<<<<<<< HEAD
    TabsPage,
    IconPage,
    UpperTabsPage
=======
    MoverFirstPage
>>>>>>> a737a47e787a94a99c9dfda96d45b88aabb946c1
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
<<<<<<< HEAD
    TabsPage,
    IconPage,
    UpperTabsPage
=======
    MoverFirstPage
>>>>>>> a737a47e787a94a99c9dfda96d45b88aabb946c1
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
