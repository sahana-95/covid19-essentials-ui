import { Component , ViewChild} from '@angular/core';
import { IonTabs} from '@ionic/angular';
import { PreloadAllModules, RouterModule, Routes,ActivatedRoute } from '@angular/router';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
 


export class TabsPage {

  
  // @ViewChild(IonTabs)
  //  tabs: IonTabs;

  //  tabsList:any = [{
  //   name: 'tab1',
  //   label: 'Tab One',
  //   icon: 'home'
  //   }, {
  //   name: 'tab2',
  //   label: 'Tab Two',
  //   icon: 'apps'
  //   }, {
  //   name: 'tab3',
  //   label: 'Tab Three',
  //   icon: 'send'
  // }];
  // pageTitle: any;

constructor(private route: ActivatedRoute , public platform : Platform) {}

// setTitle() {
//   const currentTab: string = this.tabs.getSelected();
//   const matchingTab: any = this.tabsList.filter((tab: any) => tab.name === currentTab)[0]; //uses the first array element as the currentTab
//   this.pageTitle = matchingTab.label;

// }

}
