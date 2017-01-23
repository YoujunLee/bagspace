import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ReceiverPlacePage } from '../receiver_group/receiver-place/receiver-place';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
    
  }

  move(){
    this.navCtrl.push(ReceiverPlacePage);
  }

}
