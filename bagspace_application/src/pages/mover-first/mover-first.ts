import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import { Platform, ActionSheetController } from 'ionic-angular';

@Component({
  selector: 'page-mover-first',
  templateUrl: 'mover-first.html'
})
export class MoverFirstPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public http:Http,
  public platform: Platform, public actionsheetCtrl: ActionSheetController) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad MoverFirstPage');
  }

placeSelect() {
    let actionSheet = this.actionsheetCtrl.create({
      title: '장소 선택',
      cssClass: 'action-sheets-basic-page',
      buttons: [
        {
          text: '서울',
          role: 'destructive',
          icon: !this.platform.is('ios') ? 'trash' : null,
          handler: () => {
            console.log('Delete clicked');
          }
        },
        {
          text: '대전',
          icon: !this.platform.is('ios') ? 'share' : null,
          handler: () => {
            console.log('Share clicked');
          }
        },
        {
          text: '대구',
          icon: !this.platform.is('ios') ? 'arrow-dropright-circle' : null,
          handler: () => {
            console.log('Play clicked');
          }
        },
        {
          text: '부산',
          icon: !this.platform.is('ios') ? 'heart-outline' : null,
          handler: () => {
            console.log('Favorite clicked');
          }
        },
        {
          text: '포항',
          role: 'cancel', // will always sort to be on the bottom
          icon: !this.platform.is('ios') ? 'close' : null,
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }

}
