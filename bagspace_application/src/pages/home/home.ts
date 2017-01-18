import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MoverFirstPage } from '../mover-first/mover-first';
import { ReceiverPlaceDatePage } from '../receiver-place-date/receiver-place-date';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
    
  }

  goMoverFirst(){
    this.navCtrl.push(MoverFirstPage);
  }

  goReceiverPlaceDate(){
    this.navCtrl.push(ReceiverPlaceDatePage);
  }

}
