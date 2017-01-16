import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import { HomePage } from '../pages/home/home';
<<<<<<< HEAD
import { IconPage } from '../pages/tabs/tabs';
=======
//import { MoverFirstPage } from '../pages/mover-first/mover-first';
>>>>>>> a737a47e787a94a99c9dfda96d45b88aabb946c1

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage = IconPage;

  constructor(platform: Platform) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }
}
