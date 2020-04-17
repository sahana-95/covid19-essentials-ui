import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import {items} from '../list'
import { Router } from '@angular/router';
import {ApiService} from '../api.service';



@Component({
  selector: 'app-details',
  templateUrl: 'details.page.html',
  styleUrls: ['details.page.scss']
})
export class DetailsPage {
  lists = items;
  count:any = 0;
  detailData : any;
  constructor(public platform : Platform,public apiService: ApiService,private router: Router) {
      this.detailData = this.router.getCurrentNavigation().extras.state;
      console.log(this.detailData)
  }
  addtocart(){
    this.count  = this.count +1;
  }

  random(){
    return Math.floor(Math.random() * Math.floor(1000))
  }
  

}
