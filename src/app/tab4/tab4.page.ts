import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import {medlists} from '../list'
@Component({
  selector: 'app-tab4',
  templateUrl: 'tab4.page.html',
  styleUrls: ['tab4.page.scss']
})
export class Tab3Page {
  lists = medlists;
  constructor(public platform : Platform) {
    
  }
  onNotify(data){
    this.lists = this.lists.map((a) => ({sort: Math.random(), value: a}))
    .sort((a, b) => a.sort - b.sort)
    .map((a) => a.value)
  }

}
