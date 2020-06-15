import { Component,ViewChild  } from '@angular/core';
import { NavController,NavParams, Slides,ToastController } from 'ionic-angular';
import { NewchattingPage } from '../newchatting/newchatting';
import { TabsPage } from '../tabs/tabs';
//import { HomePage } from '../home/home';
import { PedidosServiceProvider } from '../../providers/pedidos-service/pedidos-service';
import { GlobalPedidoProvider } from '../../providers/global-pedido/global-pedido';
import { ChattingPage } from '../chatting/chatting';

@Component({
  selector: 'page-match',
  templateUrl: 'match.html',
})
export class MatchPage {
  @ViewChild(Slides) slides: Slides;

  gender: string = "female";
  canjePedido;
  dataApi;

  constructor(public navCtrl: NavController,public navParams: NavParams,public toastController: ToastController,public pedido: GlobalPedidoProvider, public pedidoService:PedidosServiceProvider) {
    this.canjePedido = this.navParams.get('canjePedido');    
    
  }

   tabs(){
        this.navCtrl.setRoot(TabsPage)
  }
  goToSlide() {
    this.slides.slideTo(2, 500);
  }
  AceptaMatch(){
    //PUT estado=4
    console.log("EL pedido aceptado es:"+this.canjePedido.Id);

    //this.pedido.Id=this.canjePedido.Id;
    //getPedidosById
    
    this.pedidoService.getPedidosById(this.canjePedido.Id)        
    .subscribe(
        (data)=> {
          //this.presentToast('OK');
          if(data==null){
            this.presentToast('Error al obtener el Canje');
          }
          else{
            console.log(data);
            //this.dataApi = JSON.stringify(data);
            let data2 = JSON.stringify(data);
            this.dataApi = JSON.parse(data2);
                        
            this.pedido.IdProducto=this.dataApi.IdProducto;
            this.pedido.IdUsuario=this.dataApi.IdUsuario;            
            console.log("La Categoria es: "+this.dataApi.CategoriaMatch);
            console.log("La pedido.FechaPedido es: "+this.pedido.FechaPedido);

            this.pedido.Comentarios=this.dataApi.Comentarios;
            this.pedido.Importe=this.dataApi.Importe;
            this.pedido.ImagenMatch=this.dataApi.ImagenMatch;
            this.pedido.IdProductoMatch=this.dataApi.IdProductoMatch;
            this.pedido.ProductoNombreMatch=this.dataApi.ProductoNombreMatch;
            this.pedido.ProductoDescripcionMatch=this.dataApi.ProductoDescripcionMatch;
            this.pedido.CategoriaMatch=this.dataApi.CategoriaMatch;

            this.pedido.Id=this.dataApi.Id;
            this.pedido.IdPedido_Estado="4";    
            this.pedidoService.putPedido(this.pedido)        
            .subscribe(
                (data)=> {
                  this.presentToast('La solicitud se aceptó');
                  //this.navCtrl.push(NewchattingPage)
                  this.navCtrl.setRoot(TabsPage);
                  this.navCtrl.push(ChattingPage,{UserRecep:this.dataApi.IdUsuario});
                },
                (error)=>{console.log("ERROR en Save to DB: " + error);}
            ) 
            ////
            
          }
          
        },
        (error)=>{console.log(error);}
    )  


    //////////////

    



    
  }
  RechazaMatch(){
    //PUT estado=2
    this.pedidoService.getPedidosById(this.canjePedido.Id)        
    .subscribe(
        (data)=> {
          //this.presentToast('OK');
          if(data==null){
            this.presentToast('Error al obtener el Canje');
          }
          else{
            console.log(data);
            //this.dataApi = JSON.stringify(data);
            let data2 = JSON.stringify(data);
            this.dataApi = JSON.parse(data2);
                        
            this.pedido.IdProducto=this.dataApi.IdProducto;
            this.pedido.IdUsuario=this.dataApi.IdUsuario;
            this.pedido.Comentarios=this.dataApi.Comentarios;
            this.pedido.Importe=this.dataApi.Importe;
            this.pedido.ImagenMatch=this.dataApi.ImagenMatch;
            this.pedido.IdProductoMatch=this.dataApi.IdProductoMatch;
            this.pedido.ProductoNombreMatch=this.dataApi.ProductoNombreMatch;
            this.pedido.ProductoDescripcionMatch=this.dataApi.ProductoDescripcionMatch;
            this.pedido.CategoriaMatch=this.dataApi.CategoriaMatch;

            this.pedido.Id=this.dataApi.Id;
            this.pedido.IdPedido_Estado="2";    
            this.pedidoService.putPedido(this.pedido)        
            .subscribe(
                (data)=> {
                  this.presentToast('La solicitud fue rechazada');
                  this.navCtrl.setRoot(TabsPage);
                },
                (error)=>{console.log("ERROR en Save to DB: " + error);}
            ) 
          }
          
        },
        (error)=>{console.log(error);}
    )  

    
    
  }
 
  async presentToast(texto) {
    const toast = await this.toastController.create({
      message: texto,
      duration: 3000
    });
    toast.present();
  }
  
}
