import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
<<<<<<< HEAD
import { IconPage } from '../pages/tabs_group/tabs/tabs';
=======
import { HomePage } from '../pages/home/home';
//receiver
import { ReceiverPlacePage } from '../pages/receiver_group/receiver-place/receiver-place';
import { ReceiverDatePage } from '../pages/receiver_group/receiver-date/receiver-date';
//mover
import { MoverApplyPage } from '../pages/mover_group/mover-apply/mover-apply';

//test
import { TestPage } from '../pages/test/test';
import { ChattingRoomPage } from '../pages/chatting-room/chatting-room';

import { ViewchildComponent } from '../pages/viewchild';

>>>>>>> moverFirstPage

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
<<<<<<< HEAD
  rootPage = IconPage;
=======
 rootPage = ChattingRoomPage;
 //rootPage = ReceiverPlacePage;
 //rootPage = TestPage; 
 //rootPage = ReceiverDatePage;
>>>>>>> moverFirstPage

  constructor(platform: Platform) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }
}
