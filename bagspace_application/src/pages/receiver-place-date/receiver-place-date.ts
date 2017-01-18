import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import { Platform, ActionSheetController } from 'ionic-angular';

@Component({
  selector: 'page-receiver-place-date',
  templateUrl: 'receiver-place-date.html'
})
export class ReceiverPlaceDatePage {

  place:string = "";
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public http:Http,
  public platform: Platform, public actionsheetCtrl: ActionSheetController) {} 

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReceiverPlaceDatePage');
  }

  //todo : 나중에 어떻게 확장할 것인가, 장소가 많아지면 어떻게 유지보수 할 것인가??
  countrySelect() {
      let countrySheet = this.actionsheetCtrl.create({
        title: '나라 선택',
        cssClass: 'action-sheets-basic-page',
        buttons: [
          {
            text: '대한민국',
            role: 'cancle',
            icon: !this.platform.is('ios') ? 'trash' : null,
            handler: () => {
              this.citySelect();
            }
          },
          {
            text: '일본',
            icon: !this.platform.is('ios') ? 'share' : null,
            handler: () => {
            }
          },
          {
            text: '중국',
            icon: !this.platform.is('ios') ? 'arrow-dropright-circle' : null,
            handler: () => {
            }
          },
          {
            text: '미국',
            icon: !this.platform.is('ios') ? 'heart-outline' : null,
            handler: () => {
            }
          },
          {
            text: '이스라엘',
            role: 'cancel', // will always sort to be on the bottom
            icon: !this.platform.is('ios') ? 'close' : null,
            handler: () => {
            }
          }
        ]
      });
      countrySheet.present();
  }//countrySelect

  citySelect() {
    let citySheet = this.actionsheetCtrl.create({
      title: '도시 선택',
      cssClass: 'action-sheets-basic-page',
      buttons: [
        {
          text: '서울',
          role: 'cancle',
          icon: !this.platform.is('ios') ? 'trash' : null,
          handler: () => {
            this.landmarkSelect();
          }
        },
        {
          text: '대전',
          icon: !this.platform.is('ios') ? 'share' : null,
          handler: () => {
          }
        },
        {
          text: '대구',
          icon: !this.platform.is('ios') ? 'arrow-dropright-circle' : null,
          handler: () => {
          }
        },
        {
          text: '부산',
          icon: !this.platform.is('ios') ? 'heart-outline' : null,
          handler: () => {
          }
        },
        {
          text: '포항',
          role: 'cancel', // will always sort to be on the bottom
          icon: !this.platform.is('ios') ? 'close' : null,
          handler: () => {
          }
        }
      ]
    });
    citySheet.present();
  }//citySelect

  landmarkSelect() {
    let landmarkSheet = this.actionsheetCtrl.create({
      title: '장소 선택',
      cssClass: 'action-sheets-basic-page',
      buttons: [
        {
          text: '스타벅스(StarBucks)',
          role: 'cancle',
          icon: !this.platform.is('ios') ? 'trash' : null,
          handler: () => {
            this.place = "스타벅스(StarBucks)";
          }
        },
        {
          text: '서울 민박집(Seoul-GuestHouse)',
          icon: !this.platform.is('ios') ? 'share' : null,
          handler: () => {
            this.place = "서울 민박집(Seoul-GuestHouse)";
          }
        },
        {
          text: '달콤커피(Dal.Comm-Coffee)',
          icon: !this.platform.is('ios') ? 'arrow-dropright-circle' : null,
          handler: () => {
             this.place = "달콤커피(Dal.Comm-Coffee)";
          }
        },
        {
          text: '이-마트(E-Mart)',
          icon: !this.platform.is('ios') ? 'heart-outline' : null,
          handler: () => {
            this.place = "이-마트(E-Mart)";
          }
        },
        {
          text: '서울역(Seoul-Station)',
          role: 'cancel', // will always sort to be on the bottom
          icon: !this.platform.is('ios') ? 'close' : null,
          handler: () => {
            this.place = "서울역(Seoul-Station)";
          }
        }
      ]
    });
    landmarkSheet.present();
  }//landmarkSelect

}
