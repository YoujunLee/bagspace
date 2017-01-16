import { Component } from '@angular/core';

@Component({
  template: `
     <page-upper-tabs></page-upper-tabs>
`})
export class TabsPage {

}

@Component({
  templateUrl: 'tabs.html'
})
 export class IconPage {
  rootPage = TabsPage;
}