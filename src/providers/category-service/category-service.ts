import { HttpClientModule, HttpParams, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GlobalProvider } from "../../providers/global/global";

@Injectable()
export class CategoryServiceProvider {

  
  constructor(public http: HttpClient, public global:GlobalProvider) {
    //console.log('Hello CategoryServiceProvider Provider');
  }

  GetCategorias() {
    console.log("La API es: "+this.global.ApiUrl);
    return this.http.get(this.global.ApiUrl+'categorias/');
  }

}
