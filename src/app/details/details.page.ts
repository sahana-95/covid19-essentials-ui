import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import {items} from '../list'
@Component({
  selector: 'app-details',
  templateUrl: 'details.page.html',
  styleUrls: ['details.page.scss']
})
export class DetailsPage {
  lists = items;
  count:any = 0;
  constructor(public platform : Platform) {
    
  }
  addtocart(){
    this.count  = this.count +1;
  }

  random(){
    return Math.floor(Math.random() * Math.floor(1000))
  }
  

}
