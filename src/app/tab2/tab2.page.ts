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
  onNotify(data){
    this.lists = this.lists.map((a) => ({sort: Math.random(), value: a}))
    .sort((a, b) => a.sort - b.sort)
    .map((a) => a.value)
  }
}
