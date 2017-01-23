import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ReceiverPlacePage } from '../pages/receiver_group/receiver-place/receiver-place';
import { ReceiverDatePage } from '../pages/receiver_group/receiver-date/receiver-date';
//ionic2-datepicker calendar import
import { DatePickerModule } from 'datepicker-ionic2';

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
    TestPage
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
    TestPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
