import { Component } from '@angular/core';
import { NavController, ModalController,NavParams} from 'ionic-angular';
 import { StorePage } from '../store/store';
 import { EventdetailPage } from '../eventdetail/eventdetail';
 import { OfferdetailPage } from '../offerdetail/offerdetail';
 import { SearchPage } from '../search/search';
 import { MapPage } from '../map/map';
 import { Edit_eventPage } from '../edit_event/edit_event';
 import { NewCanjePage } from '../new-canje/new-canje';
 import { MatchPage } from '../match/match';
 import { ProductServiceProvider } from '../../providers/product-service/product-service';
 import { PedidosServiceProvider } from '../../providers/pedidos-service/pedidos-service';
 import { UserServiceProvider } from '../../providers/user-service/user-service';
 import { GlobalProvider } from "../../providers/global/global";


@Component({
  selector: 'page-canjes',
  templateUrl: 'canjes.html',
})
export class CanjesPage {
  canjesLst:any;
  recibidosLst:any;
  canjeadosLst:any;
  near: string = "Ofrecidos";
  tokenUsuario;
  CanjesOfrecidos:boolean;

  constructor(public navCtrl: NavController, public modalCtrl: ModalController, public userService: UserServiceProvider,public navParams: NavParams, public serviceProd: ProductServiceProvider, public servicePedido:PedidosServiceProvider, private user:GlobalProvider) {
    
    this.tokenUsuario = this.navParams.get('tokenU'); 
    this.CanjesOfrecidos=false; 
    console.log("El mail por ejemplo es:"+this.user.Mail)
    console.log("El Id por ejemplo es:"+this.user.Id)
    this.getOfrecidos(this.user.Id);
    this.getRecibidos(this.user.Id);
    this.getCanjeados(this.user.Id);
  }
  NuevoCanje(){
    this.navCtrl.push(NewCanjePage)
  }  
 
 store(){
        this.navCtrl.push(StorePage)
  } 
  offerdetail(IdProd){
    console.log("El IdProductoMatch es:"+IdProd);
    this.navCtrl.push(OfferdetailPage,{idProd:IdProd, estado:'canjeado'});
  }
  eventdetail(){
        this.navCtrl.push(EventdetailPage)
  }
  map(){
        this.navCtrl.push(MapPage)
  }
 search() {
    let modal = this.modalCtrl.create(SearchPage);
    modal.present();
  } 
  edit_event(Producto){
    this.navCtrl.push(Edit_eventPage,{productoEdit:Producto})
  }
  ViewMatch(pedido){
    this.navCtrl.push(MatchPage,{canjePedido:pedido})
  }
  ViewProfile(){
    this.navCtrl.push(Edit_eventPage)
  }
  
  getOfrecidos(idUsuario) {    
    this.serviceProd.getProductByUser(idUsuario)        
    .subscribe(
        (data:any)=> {
          this.canjesLst = data;
          if(data.length >0){
            this.CanjesOfrecidos=true;
          }
        },
        (error)=>{console.log(error);}
    )  
  }
  getRecibidos(idUsuario) {  
    //Obtener el idUsuario  
    this.servicePedido.getPedidosRecibidosByUser(idUsuario)        
    .subscribe(
        (data:any)=> {
          this.recibidosLst = data;
        },
        (error)=>{console.log(error);}
    )  
  }
  getCanjeados(idUsuario) {  
    this.servicePedido.getPedidosConfirmadosByUser(idUsuario)        
    .subscribe(
        (data:any)=> {
          this.canjeadosLst = data;
        },
        (error)=>{console.log(error);}
    )  
  }
  
}
