import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import {veglist} from '../list'

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  lists = veglist;


  constructor( public platform : Platform) {}
  onNotify(data){
    this.lists = this.lists.map((a) => ({sort: Math.random(), value: a}))
    .sort((a, b) => a.sort - b.sort)
    .map((a) => a.value)
  }
  

}
