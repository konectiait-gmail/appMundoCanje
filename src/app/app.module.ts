import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { AccountPage } from '../pages/account/account';
import { AddreviewPage } from '../pages/addreview/addreview';
import { ChatsPage } from '../pages/chats/chats';
import { ChattingPage } from '../pages/chatting/chatting';
import { ConditionPage } from '../pages/condition/condition';
import { Edit_offerPage } from '../pages/edit_offer/edit_offer';
import { Edit_eventPage } from '../pages/edit_event/edit_event';
import { EventdetailPage } from '../pages/eventdetail/eventdetail';
import { HelpPage } from '../pages/help/help';
import { HomePage } from '../pages/home/home';
import { MapPage } from '../pages/map/map';
import { OfferdetailPage } from '../pages/offerdetail/offerdetail';
import { PasswordPage } from '../pages/password/password';
import { ProfilePage } from '../pages/profile/profile';
import { RegisterPage } from '../pages/register/register';
import { ReviewPage } from '../pages/review/review';
import { SearchPage } from '../pages/search/search';
import { SigninPage } from '../pages/signin/signin';
import { TabsPage } from '../pages/tabs/tabs';
import { CategoriesPage } from '../pages/categories/categories';
import {CategoryresultPage} from '../pages/categoryresult/categoryresult';
import { CanjesPage } from '../pages/canjes/canjes';
import { NewCanjePage } from '../pages/new-canje/new-canje';
import { MatchPage } from '../pages/match/match';
import { NewchattingPage } from '../pages/newchatting/newchatting';
import {ListCanjesPage} from '../pages/list-canjes/list-canjes';
import {ListDescuentosPage} from '../pages/list-descuentos/list-descuentos';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TerminosServiceProvider } from '../providers/terminos-service/terminos-service';
import { FaqProvider } from '../providers/faq/faq';
import { CategoryServiceProvider } from '../providers/category-service/category-service';
import { AutenticationServiceProvider } from '../providers/autentication-service/autentication-service';
import { UserServiceProvider } from '../providers/user-service/user-service';
import { Camera, CameraOptions } from '@ionic-native/camera';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

import * as firebase from 'firebase';
import { GlobalProvider } from '../providers/global/global';
import { ProductServiceProvider } from '../providers/product-service/product-service';
import { GlobalProductProvider } from '../providers/global-product/global-product';
import { ChatServiceProvider } from '../providers/chat-service/chat-service';
import { GoogleMaps } from '@ionic-native/google-maps';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { CiudadesServiceProvider } from '../providers/ciudades-service/ciudades-service';
import { PedidosServiceProvider } from '../providers/pedidos-service/pedidos-service';
import { GlobalPedidoProvider } from '../providers/global-pedido/global-pedido';
import { ChatDetalleServiceProvider } from '../providers/chat-detalle-service/chat-detalle-service';
import { Push, PushObject, PushOptions } from '@ionic-native/push';
import { NotificationServiceProvider } from '../providers/notification-service/notification-service';
 
firebase.initializeApp({
  apiKey: "AIzaSyB1V9Scjuy2FzVELWlycpjYoUxnqoqrP2w",
    authDomain: "mundo-canje-app.firebaseapp.com",
    databaseURL: "https://mundo-canje-app.firebaseio.com",
    projectId: "mundo-canje-app",
    storageBucket: "mundo-canje-app.appspot.com",
    messagingSenderId: "943473640737",
    appId: "1:943473640737:web:522571b9430f56fcb22a60"
});

@NgModule({
  declarations: [
    MyApp,
    AccountPage,
    AddreviewPage,
    ChatsPage,
    ChattingPage,
    ConditionPage,
    Edit_offerPage,
    Edit_eventPage,
    EventdetailPage,
    HelpPage,
    HomePage,
    MapPage,
    OfferdetailPage,
    PasswordPage,
    ProfilePage,
    RegisterPage,
    ReviewPage,
    SearchPage,
    SigninPage,
    TabsPage,
    CategoriesPage,
    CategoryresultPage,
    CanjesPage,
    NewCanjePage,
    MatchPage,
    NewchattingPage,
    ListCanjesPage,
    ListDescuentosPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient]
      }
    })
  ], 
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AccountPage,
    AddreviewPage,
    ChatsPage,
    ChattingPage,
    ConditionPage,
    Edit_offerPage,
    Edit_eventPage,
    EventdetailPage,
    HelpPage,
    HomePage,
    MapPage,
    OfferdetailPage,
    PasswordPage,
    ProfilePage,
    RegisterPage,
    ReviewPage,
    SearchPage,
    SigninPage,
    TabsPage,
    CategoriesPage,
    CategoryresultPage,
    CanjesPage,
    NewCanjePage,
    MatchPage,
    NewchattingPage,
    ListCanjesPage,
    ListDescuentosPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    TerminosServiceProvider,
    FaqProvider,
    CategoryServiceProvider,
    AutenticationServiceProvider,
    UserServiceProvider,
    GlobalProvider,
    ProductServiceProvider,
    GlobalProductProvider,
    ChatServiceProvider,
    GoogleMaps,
    Geolocation,
    CiudadesServiceProvider,
    PedidosServiceProvider,
    GlobalPedidoProvider,
    Camera,
    ChatDetalleServiceProvider,
    Push,
    NotificationServiceProvider
  ]
})
export class AppModule {}
