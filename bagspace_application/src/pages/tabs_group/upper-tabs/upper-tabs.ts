import { Component, trigger, state, style, transition, animate } from '@angular/core';

@Component({
  selector: 'page-upper-tabs',
  templateUrl: 'upper-tabs.html',
  animations: [
    trigger('Title', [      
      transition('close => open', [
        style({ opacity: 0 }), animate('900ms')
      ])      
    ]),    
    trigger('SlidMenu', [
      state('open', style({height: '95px'})),
      state('close', style({height: '0px'})),
      transition('open => close, close => open', animate('500ms ease-in ease-out'))
    ])
  ]
})
export class UpperTabsPage {
  search_click:string='close';
  date_info:string;
  
 


}