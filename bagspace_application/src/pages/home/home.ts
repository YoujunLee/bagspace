import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { MoverFirstPage } from '../mover-first/mover-first';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})



export class HomePage {
  constructor(public navCtrl: NavController) {
  
  }
<<<<<<< HEAD
=======

  goMoverFirst(){
    this.navCtrl.push(MoverFirstPage);
  }

>>>>>>> a737a47e787a94a99c9dfda96d45b88aabb946c1
}
