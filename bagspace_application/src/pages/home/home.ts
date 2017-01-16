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

  goMoverFirst(){
    this.navCtrl.push(MoverFirstPage);
  }

}
