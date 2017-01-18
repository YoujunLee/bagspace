import { Component} from '@angular/core';
import {Platform, NavParams, ViewController} from 'ionic-angular';


@Component({
  selector: 'page-helper',
  templateUrl: 'helper.html'
})
export class HelperPage {
  constructor(public platform: Platform, public params: NavParams, public viewCtrl: ViewController) {}
  dismiss() {
    this.viewCtrl.dismiss();
  }
}
