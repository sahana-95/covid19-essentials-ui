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
  onNotify(data){
    this.lists = this.lists.map((a) => ({sort: Math.random(), value: a}))
    .sort((a, b) => a.sort - b.sort)
    .map((a) => a.value)
  }

}
