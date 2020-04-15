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
  getlist(){
    this.lists.push(this.lists[0]);
  }

}
