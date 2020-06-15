import { Component } from '@angular/core';
import { NavController,ViewController } from 'ionic-angular';
import { CategoriesPage } from '../categories/categories';
import {CategoryresultPage} from '../categoryresult/categoryresult';
import { CategoryServiceProvider } from '../../providers/category-service/category-service';
import { ProductServiceProvider } from '../../providers/product-service/product-service';
import { OfferdetailPage } from '../offerdetail/offerdetail';

@Component({
  selector: 'page-search',
  templateUrl: 'search.html'
})
export class SearchPage {
  categoriasLst;
  listBusqueda;
  constructor(public navCtrl: NavController,  public viewCtrl: ViewController, public serviceCat: CategoryServiceProvider, public prodServ: ProductServiceProvider) {
    this.ObtenerCategorias();
  }
  dismiss() {
		this.viewCtrl.dismiss();
  }
  VerCategorias(){
    this.navCtrl.push(CategoriesPage)
  }
  category_result(){
    this.navCtrl.push(CategoryresultPage)
  } 
  getItems(busqueda){    
    let val = busqueda.target.value;
    /*
    if (q.trim() == '') {
        return;
    }
    */
   this.BuscarCanjes(val);
    
  }
  BuscarCanjes(nombreCanje) {    
    this.prodServ.getProductByName(nombreCanje)        
    .subscribe(
        (data)=> {
          this.listBusqueda=data;
          
        },
        (error)=>{console.log(error);}
    )        
    
  }
  offerdetail(IdProd){
    console.log("El producto id es: "+IdProd);
    this.navCtrl.push(OfferdetailPage,{idProd:IdProd});
  }

  ObtenerCategorias() {    
    this.serviceCat.GetCategorias()        
    .subscribe(
        (data)=> {
          this.categoriasLst=data;          
        },
        (error)=>{console.log(error);}
    )        
    
  }

}
