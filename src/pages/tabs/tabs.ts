import { Component } from '@angular/core';
import { MapPage } from '../map/map';
import { HomePage } from '../home/home';
import { ChatsPage } from '../chats/chats';
import { CanjesPage } from '../canjes/canjes';
import { NavParams} from 'ionic-angular';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = CanjesPage;
  tab3Root = ChatsPage;
  tab4Root = MapPage;
  tokenUsuario;
 
  constructor(public navParams: NavParams) {
    this.tokenUsuario = this.navParams.get('tokenU');
    console.log("El token del usuario es:"+this.tokenUsuario);
  }
}
