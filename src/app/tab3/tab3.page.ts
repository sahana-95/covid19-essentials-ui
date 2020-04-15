import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import {grocerylists} from '../list'
@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  lists = grocerylists;
  constructor(public platform : Platform) {
    
  }
  getlist(){
    this.lists.push(this.lists[0]);
  }

}
