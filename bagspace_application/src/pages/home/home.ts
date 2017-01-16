import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import {Http} from '@angular/http'
import{CategoryPage} from '../category/category'
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})



export class HomePage {
  constructor(public navCtrl: NavController) {
  
  }
goCategoryPage(){
  this.navCtrl.push(CategoryPage);
}
}
