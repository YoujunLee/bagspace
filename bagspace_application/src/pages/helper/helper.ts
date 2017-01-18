import { Component} from '@angular/core';
import { Platform, NavParams, ViewController  } from 'ionic-angular';

/*
  Generated class for the Helper page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
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
