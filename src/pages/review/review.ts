import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MatchPage } from '../match/match';
import { CanjesPage } from '../canjes/canjes';

@Component({
  selector: 'page-review',
  templateUrl: 'review.html'
})
export class ReviewPage {

  constructor(public navCtrl: NavController) {

  }
  ViewMatch(){
    this.navCtrl.push(MatchPage)
  }
  ViewCanjes(){
    this.navCtrl.push(CanjesPage)
  }

 
}
