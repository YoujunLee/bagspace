import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { MoverFirstPage } from '../pages/mover-first/mover-first';
import { ReceiverPlaceDatePage } from '../pages/receiver-place-date/receiver-place-date';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MoverFirstPage,
    ReceiverPlaceDatePage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    MoverFirstPage,
    ReceiverPlaceDatePage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
