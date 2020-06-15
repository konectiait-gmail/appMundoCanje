import { Component } from '@angular/core';
import { NavController,NavParams,AlertController ,Modal, ModalController, ModalOptions  } from 'ionic-angular';

import { Edit_offerPage } from '../edit_offer/edit_offer';
import { ProductServiceProvider } from '../../providers/product-service/product-service';
import { GlobalProvider } from "../../providers/global/global";
import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  GoogleMapOptions,
  CameraPosition,
  MarkerOptions,
  Marker,
  Environment
} from '@ionic-native/google-maps';
import { ChatsPage } from '../chats/chats';
import { ChattingPage } from '../chatting/chatting';

@Component({
  selector: 'page-offerdetail',
  templateUrl: 'offerdetail.html'
})
export class OfferdetailPage {
  producto;
  nombreProd:string;
  descripcionProd:string;
  cantSolicitudes:string;
  ultDiasProd:string;
  importeProd:string;
  imgProd;
  IdProducto;
  IdProdUsuario;
  ProductoCanjeado:boolean;
  CanjesOfrecidos:boolean;

  constructor(public navCtrl: NavController,private modal: ModalController,public alertCtrl:AlertController, private user:GlobalProvider ,public navParams: NavParams, public serviceProd: ProductServiceProvider) {
    this.ProductoCanjeado=false;
    this.CanjesOfrecidos=false;
    
    this.IdProducto = this.navParams.get('idProd');    
    if(this.navParams.get('estado')=="canjeado"){
      this.ProductoCanjeado=true;
    }
    
    console.log("El producto id es:"+this.IdProducto);
    this.getProduct(this.IdProducto);
    this.getOfrecidos(this.user.Id);
  }
     
  getProduct(Id){
    this.serviceProd.getProductById(Id)        
      .subscribe(
          (data)=> {
            this.producto = data;
            if(this.producto!=null){
              this.nombreProd=this.producto.Nombre;
              this.descripcionProd=this.producto.Descripcion;
              this.cantSolicitudes=this.producto.NroSolicitudes;
              this.ultDiasProd=this.producto.Ult_Dias;
              this.imgProd = this.producto.Imagen;
              this.importeProd = this.producto.Importe;
              this.IdProdUsuario = this.producto.IdProductoUsuario;
              
              
              //this.MostrarMapa(this.latProd,this.lngProd);
              this.MostrarMapa(this.producto.lat,this.producto.lng);
            }
          },
          (error)=>{console.log(error);}
      ) 
  }
 edit_offer(){
        this.navCtrl.push(Edit_offerPage)
  } 
  AbrirPopup(){
    //this.presentPrompt();
    if(this.IdProdUsuario !=this.user.Id ){
      if(this.CanjesOfrecidos){
        this.openModal();
      }
      else{
        this.presentAlert("Error","Necesitás crear canjes para ofrecer");
      }
    }
    else{
      this.presentAlert("Error","No se puede enviar la solicitud a sí mismo");
    }
    
  }

  getOfrecidos(idUsuario) {    
    this.serviceProd.getProductByUser(idUsuario)        
    .subscribe(
        (data:any)=> {
          if(data.length >0){
            this.CanjesOfrecidos=true;
            }
          
        },
        (error)=>{console.log(error);}
    )  
  }


  AbrirChat(){
    let UserReceptor=this.IdProdUsuario;    
    this.navCtrl.push(ChattingPage,{UserRecep:UserReceptor});
  }
   
  presentAlert(Titulo, Descripcion) {
    let alert = this.alertCtrl.create({
      title: Titulo,
      subTitle: Descripcion,
      buttons: ['Aceptar']
    });
    alert.present();
  }
  

 // MostrarMapa(latitude,longitude) {
  MostrarMapa(latitud, longitud) {
    let Lati2 = parseFloat(latitud);
    let Longi2 = parseFloat(longitud);
     
     let mapOptions: GoogleMapOptions = {
      camera: {
        target: {
          lat: Lati2,
          lng: Longi2
        },
        zoom: 12,
        tilt: 30
      }
    };

    let map2 = GoogleMaps.create('map_canvas', mapOptions);
    
    let marker: Marker = map2.addMarkerSync({
      title: 'Ionic',
      icon: 'blue',
      animation: 'DROP',
      position: {
        lat: Lati2,
        lng: Longi2
      }
    });
    

  }


  

  //////////////////////////////////
  openModal() {

    const myModalOptions: ModalOptions = {
      enableBackdropDismiss: false
    };
/*
    const myModalData = {
      name: 'Paul Halliday',
      occupation: 'Developer'
    };
    */

    const myModal: Modal = this.modal.create('ModalNotificationPage', { idProd: this.IdProducto }, myModalOptions);

    myModal.present();

    myModal.onDidDismiss((data) => {
      console.log("I have dismissed.");
      console.log(data);
    });

    myModal.onWillDismiss((data) => {
      console.log("I'm about to dismiss");
      console.log(data);
    });

  }

  ////////////////////////////////
}
