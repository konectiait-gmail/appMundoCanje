import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
//import {  GoogleMaps,  GoogleMap,  GoogleMapsEvent,  GoogleMapOptions} from '@ionic-native/google-maps';
import { SearchPage } from '../search/search';
import { ProductServiceProvider } from '../../providers/product-service/product-service';
import { Geolocation } from '@ionic-native/geolocation/ngx';

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



@Component({
  selector: 'page-map',
  templateUrl: 'map.html'
})
export class MapPage {
  //map: GoogleMap;
  canjesLst;
  ubicLat;
  ubicLng;
  
  constructor(public navCtrl: NavController, public serviceProd: ProductServiceProvider, public modalCtrl: ModalController, public geolocation:Geolocation) {
    //this.loadMap();
    this.ObtenerUbicacion();
  }
  
  ionViewDidLoad(){
    //this.map=this.abrirMAPA();
    
  }
  

 search() {
    let modal = this.modalCtrl.create(SearchPage);
    modal.present();
  } 
  
  ObtenerUbicacion(){

    var options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0
    };
    
      navigator.geolocation.getCurrentPosition(this.onSuccess, this.onError);
      //this.GetUbicacionesCanjes2();
  }
  onError(error) {
      alert("Error al obtener la posicion");
  }

   onSuccess(position) {
      console.log("LAT: "+position.coords.latitude);
      console.log("LONG: "+position.coords.longitude);

       let mapOptions: GoogleMapOptions = {
        camera: {
          target: {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          },
          zoom: 12,
          tilt: 30
        }
      };

      let map2 = GoogleMaps.create('map_canvas', mapOptions);
      /*
      let marker: Marker = map2.addMarkerSync({
        title: 'Estoy aqui',
        icon: 'blue',
        animation: 'DROP',
        position: {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        }
      });
      */

      let marker: Marker;
      let points: any[] = [
        {lat: -34.619334, lng: -58.451590, title : "1"},
        {lat: -34.623878, lng: -58.424973, title : "2"},
        {lat: -34.631167, lng: -58.395548, title : "3"},
        {lat: -34.612941, lng: -58.371614, title : "4"}
        ];

        map2.addMarkerSync({
          title: 'Estoy aqui',
          icon: 'red',
          animation: 'DROP',
          position: {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          }
        });

        points.forEach(item => {
          map2.addMarkerSync({
            title: item.title,
            icon: 'blue',
            animation: 'DROP',
            position: {
              lat: item.lat,
              lng: item.lng
            }
          });
        });
    }

    GetUbicacionesCanjes2(){
      let mapOptions: GoogleMapOptions = {
        camera: {          
          zoom: 20,
          tilt: 30
        }
      };
      let map2 = GoogleMaps.create('map_canvas',mapOptions);
      
      let marker: Marker;
      let points: any[] = [
        {lat: -34.619334, lng: -58.451590, title : "1"},
        {lat: -34.623878, lng: -58.424973, title : "2"},
        {lat: -34.631167, lng: -58.395548, title : "3"},
        {lat: -34.612941, lng: -58.371614, title : "4"}
        ];

        points.forEach(item => {
          map2.addMarkerSync({
            title: item.title,
            icon: 'blue',
            animation: 'DROP',
            position: {
              lat: item.lat,
              lng: item.lng
            }
          });
        });


      
      

    }

    GetUbicacionesCanjes(){

      this.serviceProd.getProductByIdTipo("1")        
      .subscribe(
          (data:any)=> {
            this.canjesLst = data; 

            let mapOptions: GoogleMapOptions = {
              camera: {
                /*
                target: {
                  lat: this.canjesLst[9].lat,
                  lng: this.canjesLst[9].lng
                },
                */
                zoom: 12,
                tilt: 30
              }
            };
            let map2 = GoogleMaps.create('map_canvas',mapOptions);
            console.log("La latitite es:"+this.canjesLst[8].lat);
            
             
            /*
            for(var i in this.canjesLst){
              if(this.canjesLst[i].lat !=0 && this.canjesLst[i].lng !=0){
                
                map2.addMarkerSync({
                  title: 'pepe',
                  icon: 'blue',
                  animation: 'DROP',
                  position: {
                    lat: parseFloat(this.canjesLst[i].lat),
                    lng: parseFloat(this.canjesLst[i].lng)
                    
                  }
                });
                
              }
            }
            */
            
            let points: any[] = [
              {lat: -34.619334, lng: -58.451590, title : "1"},
              {lat: -34.623878, lng: -58.424973, title : "2"},
              {lat: -34.631167, lng: -58.395548, title : "3"},
              {lat: -34.612941, lng: -58.371614, title : "4"}
              ];
              //points.push({lat: parseFloat(this.canjesLst[8].lat), lng: parseFloat(this.canjesLst[8].lng),title :this.canjesLst[8].Nombre});
      
              points.forEach(item => {
                map2.addMarkerSync({
                  title: item.title,
                  icon: 'blue',
                  animation: 'DROP',
                  position: {
                    lat: item.lat,
                    lng: item.lng
                  }
                });
              });


      /*
            let map2 = GoogleMaps.create('map_canvas', mapOptions);
            
            let marker: Marker = map2.addMarkerSync({
              title: 'Estoy aqui',
              icon: 'blue',
              animation: 'DROP',
              position: {
                lat: this.canjesLst[9].lat,
                lng: this.canjesLst[9].lng
              }
            });
            */
//////////////////////////////////////////////


  
/////////////////////////////////////////////
/*
            for(var i in this.canjesLst){
              console.log(this.canjesLst[i]);//This will print the objects
              if(this.canjesLst[i].lat !=0 && this.canjesLst[i].lng !=0){
                let marker: Marker = map2.addMarkerSync({
                  title: this.canjesLst[i].Nombre,
                  icon: 'red',
                  animation: 'DROP',
                  position: {
                    lat: this.canjesLst[i].lat,
                    lng: this.canjesLst[i].lng
                  }
                });
                
              }
            }
            */
          },
          (error)=>{console.log(error);}
      )

    }

 
}
  

 

