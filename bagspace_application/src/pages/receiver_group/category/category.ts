import { Component} from '@angular/core';
import { NavController} from 'ionic-angular';
import {Http} from '@angular/http'
/*
  Generated class for the Category page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-category',
  templateUrl: 'category.html'
})

export class CategoryPage {
 public isActive1: boolean = false;
 public isActive2: boolean = false;
 public isActive3: boolean = false;
 myclass: string="on";
     constructor(public navCtrl: NavController) {
  
  }
 onlyone(isActive:number){
  
   if(isActive==1){
   this.isActive1=!this.isActive1;
   this.isActive2 = false;
   this.isActive3 = false;
   }
    if(isActive==2){
      this.isActive2=!this.isActive2;
   this.isActive1 = false;
   this.isActive3 = false;
   }
    if(isActive==3){
      this.isActive3=!this.isActive3;
   this.isActive2 = false;
   this.isActive1 = false;
   }
 }

 } 
