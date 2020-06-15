import { Component } from '@angular/core';
import { NavController,App  } from 'ionic-angular';
import { GlobalProvider } from "../../providers/global/global";
import { ProfilePage } from '../profile/profile';
import { ReviewPage } from '../review/review';
import { ConditionPage } from '../condition/condition';
import { HelpPage } from '../help/help';
import { SigninPage } from '../signin/signin';

@Component({
  selector: 'page-account',
  templateUrl: 'account.html'
})
export class AccountPage {
  base64Image;

  constructor(public navCtrl: NavController, public user:GlobalProvider, public platform:App ) {
      this.base64Image = user.Imagen;
  }
  
  profile(){
        this.navCtrl.push(ProfilePage)
  } 
  review(){
        this.navCtrl.push(ReviewPage)
  }
  condition(){
        this.navCtrl.push(ConditionPage)
  } 
  help(){
        this.navCtrl.push(HelpPage)
  }
  logout(){
      //this.navCtrl.popToRoot();
      
      //this.navCtrl.push(SigninPage)
      //this.platform.exitApp();
      this.platform.getRootNav().setRoot(SigninPage);
  }

}
