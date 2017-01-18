import { NgModule , ErrorHandler} from '@angular/core';
import { IonicModule, IonicErrorHandler } from 'ionic-angular';
import { CommonModule } from '@angular/common';
import { UpperTabsPage } from '../../pages/upper-tabs/upper-tabs';
import { TabsPage, IconPage } from '../../pages/tabs/tabs';

@NgModule({
  declarations: [UpperTabsPage, TabsPage, IconPage],
  imports: [IonicModule, CommonModule],
  entryComponents: [UpperTabsPage, TabsPage, IconPage],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class TabModule {}
