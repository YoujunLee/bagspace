import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-receiver-place-date',
  templateUrl: 'receiver-place-date.html'
})
export class ReceiverPlaceDatePage {
  
  items;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.initializeItems();
  } 

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReceiverPlaceDatePage');
  }

  initializeItems() {
    this.items = [
      '서울',
      '라마바',
      'Buenos Aires',
      'Cairo',
      'Dhaka',
      'Edinburgh',
      'Geneva',
      'Genoa',
      'Glasglow'
    ];
  }

  getItems(ev) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the ev target
    var val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

}
