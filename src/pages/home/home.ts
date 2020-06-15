import { Component } from '@angular/core';
import { NavController, ModalController,NavParams} from 'ionic-angular';

 import { Edit_offerPage } from '../edit_offer/edit_offer';
 import { Edit_eventPage } from '../edit_event/edit_event';
 import { EventdetailPage } from '../eventdetail/eventdetail';
 import { OfferdetailPage } from '../offerdetail/offerdetail';
 import { SearchPage } from '../search/search';
 //import { ChatsPage } from '../chats/chats';
 import { MapPage } from '../map/map';
 import { CategoriesPage } from '../categories/categories';
 import {CategoryresultPage} from '../categoryresult/categoryresult';
 import {ListCanjesPage} from '../list-canjes/list-canjes';
import {ListDescuentosPage} from '../list-descuentos/list-descuentos';
 
 import { AccountPage } from '../account/account';
 import { NewCanjePage } from '../new-canje/new-canje';
 import { CategoryServiceProvider } from '../../providers/category-service/category-service';
 import { ProductServiceProvider } from '../../providers/product-service/product-service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  result;
  categoriasLst;
  bannersLst;
  canjesLst;
  descuentosLst;
  near: string = "offers";
  tokenUsuario;
  constructor(public navCtrl: NavController, public modalCtrl: ModalController,public navParams: NavParams, public serviceCat: CategoryServiceProvider, public serviceProd: ProductServiceProvider) {
      this.tokenUsuario = this.navParams.get('tokenU');      
      this.ObtenerCategorias();
      this.getHome();
      console.log("EL token del usuario es:"+this.tokenUsuario);
  }
 
 edit_offer(){
        this.navCtrl.push(Edit_offerPage)
  }  
  NuevoCanje(){
      this.navCtrl.push(NewCanjePage)
  }  
  
  edit_event(){
        this.navCtrl.push(Edit_eventPage)
  } 
  offerdetail(IdProd){
      this.navCtrl.push(OfferdetailPage,{idProd:IdProd});
  }
  eventdetail(){
        this.navCtrl.push(EventdetailPage)
  }
  map(){
        this.navCtrl.push(MapPage)
  }
  perfil(){
      this.navCtrl.push(AccountPage)
}
  
  VerCategorias(){
      this.navCtrl.push(CategoriesPage)
  }
  VerMasCanjes(){
      this.navCtrl.push(ListCanjesPage)
  } 
  VerMasDescuentos(){
    this.navCtrl.push(ListDescuentosPage)
} 
  category_result(){
      this.navCtrl.push(CategoryresultPage)
  } 
  

 search() {
    let modal = this.modalCtrl.create(SearchPage);
    modal.present();
  } 

  ObtenerCategorias() {    
    this.serviceCat.GetCategorias()        
    .subscribe(
        (data)=> {
          this.categoriasLst=data;
          console.log("La categorìa 1: "+ this.categoriasLst[0].Nombre);
        },
        (error)=>{console.log(error);}
    )   
  }
    
    getHome() {    
      this.serviceProd.getHome()        
      .subscribe(
          (data:any)=> {
            this.result = data;   // get data in result variable
            this.bannersLst = data.Banners;
            this.canjesLst = data.Canjes;
            this.descuentosLst = data.Descuentos;
          },
          (error)=>{console.log(error);}
      )  
    }
}
