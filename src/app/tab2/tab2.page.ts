import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import {friutlist} from '../list'

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  lists = friutlist;

  constructor(public platform : Platform) {}
  getlist(){
    this.lists.push(this.lists[0]);
  }
}
