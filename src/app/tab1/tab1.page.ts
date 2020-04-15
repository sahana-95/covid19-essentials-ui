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
  getlist(){
    this.lists.push(this.lists[0]);
  }

}
