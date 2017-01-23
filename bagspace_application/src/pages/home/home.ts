import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
<<<<<<< HEAD
=======
import { ReceiverPlacePage } from '../receiver_group/receiver-place/receiver-place';
>>>>>>> moverFirstPage

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  constructor(public navCtrl: NavController) {
  }
<<<<<<< HEAD
=======

  move(){
    this.navCtrl.push(ReceiverPlacePage);
  }

>>>>>>> moverFirstPage
}
