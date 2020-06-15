webpackJsonp([1],{

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SigninPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs_tabs__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__register_register__ = __webpack_require__(337);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__password_password__ = __webpack_require__(339);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_autentication_service_autentication_service__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_global_global__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_user_service_user_service__ = __webpack_require__(60);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};








//import { Observable } from 'rxjs';
var SigninPage = /** @class */ (function () {
    function SigninPage(navCtrl, loadingCtrl, authService, toastController, userService, user) {
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.authService = authService;
        this.toastController = toastController;
        this.userService = userService;
        this.user = user;
    }
    SigninPage.prototype.tabs = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__tabs_tabs__["a" /* TabsPage */]);
    };
    SigninPage.prototype.register = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__register_register__["a" /* RegisterPage */]);
    };
    SigninPage.prototype.password = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__password_password__["a" /* PasswordPage */]);
    };
    SigninPage.prototype.IngresarUsuario = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({ content: 'Cargando...' });
        loading.present();
        console.log("El mail es: " + this.user.Mail);
        console.log("El pass es: " + this.user.password);
        this.authService.loginUser(this.user.Mail, this.user.password)
            .then(function (info) {
            console.log('Usuario conectado');
            //this.user.Token = info.user.uid;
            _this.getUserByToken(info.user.uid);
            loading.dismiss();
        })
            .catch(function (error) {
            _this.presentToast('Usuario o clave incorrecto');
            console.log("Errorororor......");
            loading.dismiss();
        });
    };
    SigninPage.prototype.presentToast = function (texto) {
        return __awaiter(this, void 0, void 0, function () {
            var toast;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastController.create({
                            message: texto,
                            duration: 3000
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    SigninPage.prototype.getUserByToken = function (token) {
        var _this = this;
        this.userService.getUserByToken(token)
            .subscribe(function (data) {
            //this.presentToast('OK');
            if (data == null) {
                _this.presentToast('Usuario o clave incorrecto');
            }
            else {
                console.log(data);
                //this.dataApi = JSON.stringify(data);
                var data2 = JSON.stringify(data);
                _this.dataApi = JSON.parse(data2);
                //Set USer
                _this.user.Id = _this.dataApi.Id;
                _this.user.Mail = _this.dataApi.Mail;
                _this.user.password = "";
                _this.user.Nombre = _this.dataApi.Nombre;
                _this.user.Telefono = _this.dataApi.Telefono;
                _this.user.Imagen = _this.dataApi.Imagen;
                _this.user.Token = token;
                _this.user.Direccion = _this.dataApi.Direccion;
                _this.user.Razon_Social = _this.dataApi.Razon_Social;
                _this.user.Estado = _this.dataApi.Estado;
                _this.user.IdTipo = _this.dataApi.IdTipo;
                _this.user.Cuit = _this.dataApi.Cuit;
                _this.user.IdPlan = _this.dataApi.IdPlan;
                _this.user.IdLocalidad = _this.dataApi.IdLocalidad;
                _this.user.Fecha_Alta = _this.dataApi.Fecha_Alta;
                ////
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__tabs_tabs__["a" /* TabsPage */], { tokenU: token });
            }
        }, function (error) { console.log(error); });
    };
    SigninPage.prototype.presentLoadingDefault = function () {
        var loading = this.loadingCtrl.create({ content: 'Cargando...' });
        loading.present();
        /*
          setTimeout(() => {
            loading.dismiss();
          }, 5000);
          */
    };
    SigninPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-signin',template:/*ion-inline-start:"D:\ionic\MundoCanjeApp\app\appDesa\src\pages\signin\signin.html"*/'<ion-header class="bg-transparent">\n\n    <ion-navbar>\n\n        <ion-title>\n\n            <span class="start" (click)="register()">\n\n                <span  style="font-size: 2.5rem;">+ </span>\n\n                {{\'register\' | translate}}\n\n            </span>\n\n        </ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="bg-color">\n\n    <div class="banner">\n\n        <img src="assets/imgs/fondo1-1.jpg" class="background">\n\n        <div class="logo">\n\n            <!--<img src="assets/imgs/logo.png"> -->\n\n            <img src="assets/imgs/Logomundo-canje.png">\n\n            \n\n        </div>\n\n    </div>\n\n    <div class="form">        \n\n        <ion-list no-lines padding-left padding-right>\n\n            <ion-item>\n\n                <ion-label floating>{{\'email_address\' | translate}}</ion-label>\n\n                <ion-input type="email" [(ngModel)]="user.Mail" value="samanthasmith@mail.com"></ion-input>\n\n            </ion-item>\n\n            <ion-item class="password">\n\n                <ion-label floating>{{\'password\' | translate}}</ion-label>\n\n                <ion-input type="password" [(ngModel)]="user.password" class="password" value="******"></ion-input>\n\n                <h5 class="text-theme" item-end (click)="password()">{{\'forgot\' | translate}}</h5>\n\n            </ion-item>\n\n            <button ion-button block class="btn" (click)="IngresarUsuario()" round>{{\'Enter\' | translate}}</button>\n\n            <!--\n\n            <p text-center class="text-white">{{\'or_continue_with\' | translate}}</p>\n\n            -->\n\n            <button ion-button block class="btn-xs" (click)="tabs()" round>{{\'enter_invited\' | translate}}</button>\n\n            \n\n            <div class="socile d-flex">\n\n                <button ion-button icon-start block outline class="btn text-blue" round>\n\n                    <ion-icon> <img src="assets/imgs/ic_facebook.png"></ion-icon>\n\n                    {{\'facebook\' | translate}}\n\n                </button>\n\n                <button ion-button icon-start block outline class="btn text-blue" round>\n\n                    <ion-icon class="google"> <img src="assets/imgs/ic_google.png"></ion-icon>\n\n                    {{\'google\' | translate}}\n\n                </button>\n\n            </div>\n\n        </ion-list>\n\n    </div>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\ionic\MundoCanjeApp\app\appDesa\src\pages\signin\signin.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_5__providers_autentication_service_autentication_service__["a" /* AutenticationServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */], __WEBPACK_IMPORTED_MODULE_7__providers_user_service_user_service__["a" /* UserServiceProvider */], __WEBPACK_IMPORTED_MODULE_6__providers_global_global__["a" /* GlobalProvider */]])
    ], SigninPage);
    return SigninPage;
}());

//# sourceMappingURL=signin.js.map

/***/ }),

/***/ 13:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GlobalProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var GlobalProvider = /** @class */ (function () {
    function GlobalProvider() {
        this.ApiUrl = "http://mundocanje.tk/api/";
    }
    GlobalProvider.prototype.getUser = function () {
        return this.user;
    };
    GlobalProvider.prototype.setUser = function (user) {
        this.user = user;
    };
    GlobalProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])()
    ], GlobalProvider);
    return GlobalProvider;
}());

//# sourceMappingURL=global.js.map

/***/ }),

/***/ 145:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoriesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__categoryresult_categoryresult__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__search_search__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_category_service_category_service__ = __webpack_require__(57);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CategoriesPage = /** @class */ (function () {
    function CategoriesPage(navCtrl, modalCtrl, serviceCat) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.serviceCat = serviceCat;
        this.ObtenerCategorias();
    }
    CategoriesPage.prototype.search = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__search_search__["a" /* SearchPage */]);
        modal.present();
    };
    CategoriesPage.prototype.category_result = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__categoryresult_categoryresult__["a" /* CategoryresultPage */]);
    };
    CategoriesPage.prototype.ObtenerCategorias = function () {
        var _this = this;
        this.serviceCat.GetCategorias()
            .subscribe(function (data) {
            _this.categoriasLst = data;
            console.log(data);
            console.log("La categorìa 1: " + _this.categoriasLst[0].Nombre);
        }, function (error) { console.log(error); });
    };
    CategoriesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-categories',template:/*ion-inline-start:"D:\ionic\MundoCanjeApp\app\appDesa\src\pages\categories\categories.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>{{\'categories\' | translate}}\n            <!-- <span class="end">\n                <img src="assets/imgs/ic_search.png" (click)="search()">\n            </span>-->\n        </ion-title> \n    </ion-navbar>\n</ion-header>\n\n<ion-content class="bg-color">\n    <ion-list no-lines>\n        <!-- <ion-item (click)="category_result()">\n            <img src="assets/imgs/ca1.png" class="bg">\n            <div text-center class="text">\n                <h2 class="text-white">{{\'food_restaurants\' | translate}}</h2>\n                <p class="text-gray">150 Canjes</p>\n            </div>\n        </ion-item>\n        <ion-item (click)="category_result()">\n            <img src="assets/imgs/ca2.png" class="bg">\n            <div text-center class="text">\n                <h2 class="text-white"> {{\'Moda\' | translate}}</h2>\n                <p class="text-gray">198 Canjes</p>\n            </div>\n        </ion-item>\n        <ion-item (click)="category_result()">\n            <img src="assets/imgs/ca4.png" class="bg">\n            <div text-center class="text">\n                <h2 class="text-white">{{\'dairy_bakery\' | translate}}</h2>\n                <p class="text-gray">110 Canjes</p>\n            </div>\n        </ion-item>\n        <ion-item (click)="category_result()">\n            <img src="assets/imgs/ca3.png" class="bg">\n            <div text-center class="text">\n                <h2 class="text-white">{{\'fashion_store\' | translate}}</h2>\n                <p class="text-gray">209 Canjes</p>\n            </div>\n        </ion-item>\n        <ion-item (click)="category_result()">\n            <img src="assets/imgs/ca5.png" class="bg">\n            <div text-center class="text">\n                <h2 class="text-white">{{\'salon_spa\' | translate}}</h2>\n                <p class="text-gray">111 Canjes</p>\n            </div>\n        </ion-item> -->\n\n        <ion-item *ngFor="let d of categoriasLst; let i = index" (click)="category_result()">\n            <img [src]="d.Imagen" class="bg">\n            <div text-center class="text">\n                <h2 class="text-white">{{d.Nombre | translate}}</h2>\n                <p class="text-gray">{{d.Id}} Canjes</p>\n            </div>\n        </ion-item>\n    </ion-list>\n</ion-content>\n'/*ion-inline-end:"D:\ionic\MundoCanjeApp\app\appDesa\src\pages\categories\categories.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */], __WEBPACK_IMPORTED_MODULE_4__providers_category_service_category_service__["a" /* CategoryServiceProvider */]])
    ], CategoriesPage);
    return CategoriesPage;
}());

//# sourceMappingURL=categories.js.map

/***/ }),

/***/ 162:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_global_global__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the CategoryServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var ChatServiceProvider = /** @class */ (function () {
    function ChatServiceProvider(http, global) {
        this.http = http;
        this.global = global;
    }
    ChatServiceProvider.prototype.getChats = function () {
        return this.http.get(this.global.ApiUrl + 'chats');
    };
    ChatServiceProvider.prototype.getChatsByUsuario = function (IdUser) {
        return this.http.get(this.global.ApiUrl + 'chats/ChatsByIdUsuario/' + IdUser);
    };
    ChatServiceProvider.prototype.postChat = function (chat) {
        chat.Id = "0";
        console.log(chat);
        return this.http.post(this.global.ApiUrl + 'Chats/', chat);
    };
    ChatServiceProvider.prototype.putChat = function (chat) {
        console.log(chat);
        return this.http.put(this.global.ApiUrl + 'Chats/' + chat.Id, chat);
    };
    ChatServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__providers_global_global__["a" /* GlobalProvider */]])
    ], ChatServiceProvider);
    return ChatServiceProvider;
}());

//# sourceMappingURL=chat-service.js.map

/***/ }),

/***/ 164:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AutenticationServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase_app__ = __webpack_require__(701);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase_app__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AutenticationServiceProvider = /** @class */ (function () {
    function AutenticationServiceProvider(http) {
        this.http = http;
        console.log('Hello AutenticationServiceProvider Provider');
    }
    AutenticationServiceProvider.prototype.registerUser = function (usuario, clave) {
        return new Promise(function (resolve, reject) {
            __WEBPACK_IMPORTED_MODULE_2_firebase_app__["auth"]().createUserWithEmailAndPassword(usuario, clave)
                .then(function (res) { return resolve(res); }, function (err) { return reject(err); });
        });
    };
    AutenticationServiceProvider.prototype.loginUser = function (usuario, clave) {
        return new Promise(function (resolve, reject) {
            __WEBPACK_IMPORTED_MODULE_2_firebase_app__["auth"]().signInWithEmailAndPassword(usuario, clave)
                .then(function (res) { return resolve(res); }, function (err) { return reject(err); });
        });
    };
    AutenticationServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], AutenticationServiceProvider);
    return AutenticationServiceProvider;
}());

//# sourceMappingURL=autentication-service.js.map

/***/ }),

/***/ 165:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReviewPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__match_match__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__canjes_canjes__ = __webpack_require__(167);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ReviewPage = /** @class */ (function () {
    function ReviewPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ReviewPage.prototype.ViewMatch = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__match_match__["a" /* MatchPage */]);
    };
    ReviewPage.prototype.ViewCanjes = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__canjes_canjes__["a" /* CanjesPage */]);
    };
    ReviewPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-review',template:/*ion-inline-start:"D:\ionic\MundoCanjeApp\app\appDesa\src\pages\review\review.html"*/'<ion-header class="bg-transparent">\n    <ion-navbar>\n        <ion-title>{{\'notifications\' | translate}}</ion-title>\n    </ion-navbar>\n    <div class="banner">\n        <img src="assets/imgs/Fondo2_1080.jpg" class="bg">\n        <h4 class="d-flex text-white">\n            <ion-badge item-end>{{\'4.3\' | translate}}\n                <ion-icon name="md-star"></ion-icon>\n            </ion-badge>\n            10 Notificaciones nuevas\n        </h4>\n    </div>\n</ion-header>\n\n<ion-content class="bg-color">\n    <ion-list no-lines>\n        <ion-item (click)="ViewMatch()">\n            <div class="item_header d-flex">\n                <div class="profile d-flex">\n                    <div class="profile-img">\n                        <img src="assets/imgs/dp1.png">\n                    </div>\n                    <h2>\n                        Martina Valdez\n                        <span class="text-gray">2 Horas</span>\n                    </h2>\n                </div>\n                <div class="rating end">\n                    <ion-icon name="md-star" class="acteive"></ion-icon>\n                    <ion-icon name="md-star" class="acteive"></ion-icon>\n                    <ion-icon name="md-star" class="acteive"></ion-icon>\n                    <ion-icon name="md-star" class="acteive"></ion-icon>\n                    <ion-icon name="md-star" class=""></ion-icon>\n                </div>\n            </div>\n            <p class="text-black text">\n                Hola tengo una bicicleta playera es muy bueno estado para intercambiar por las clases de Guitarra. Precio estimado $2500\n            </p>\n        </ion-item>\n        <ion-item (click)="ViewCanjes()">\n            <div class="item_header d-flex">\n                <div class="profile d-flex">\n                    <div class="profile-img">\n                        <img src="assets/imgs/dp2.png">\n                    </div>\n                    <h2>\n                        Yo - Canje Ofrecido\n                        <span class="text-gray">5 Horas</span>\n                    </h2>\n                </div>\n                <div class="rating end">\n                    <ion-icon name="md-star" class="acteive"></ion-icon>\n                    <ion-icon name="md-star" class="acteive"></ion-icon>\n                    <ion-icon name="md-star" class="acteive"></ion-icon>\n                    <ion-icon name="md-star" class="acteive"></ion-icon>\n                    <ion-icon name="md-star" class="acteive"></ion-icon>\n                </div>\n            </div>\n            <p class="text-black text">\n                Martin, ¿cómo estás? Me gustaría canjear tu par de zapatillas All Star por servicio de Aire Acondicionado. Precio estimado $2000\n            </p>\n        </ion-item>\n        <ion-item (click)="ViewMatch()">\n            <div class="item_header d-flex">\n                <div class="profile d-flex">\n                    <div class="profile-img">\n                        <img src="assets/imgs/dp3.png">\n                    </div>\n                    <h2>\n                        Julia Mendes\n                        <span class="text-gray">15/10/2019</span>\n                    </h2>\n                </div>\n                <div class="rating end">\n                    <ion-icon name="md-star" class="acteive"></ion-icon>\n                    <ion-icon name="md-star" class="acteive"></ion-icon>\n                    <ion-icon name="md-star" class="acteive"></ion-icon>\n                    <ion-icon name="md-star" class=""></ion-icon>\n                    <ion-icon name="md-star" class=""></ion-icon>\n                </div>\n            </div>\n            <p class="text-black text">\n                Hola tengo una cámara de fotos Kodak para cambiar por las clases de Guitarra. Precio estimado $1900\n            </p>\n        </ion-item>\n\n        <ion-item (click)="ViewMatch()">\n            <div class="item_header d-flex">\n                <div class="profile d-flex">\n                    <div class="profile-img">\n                        <img src="assets/imgs/user4.jpg">\n                    </div>\n                    <h2>\n                        Silvia Paez\n                        <span class="text-gray">15/10/2019</span>\n                    </h2>\n                </div>\n                <div class="rating end">\n                    <ion-icon name="md-star" class="acteive"></ion-icon>\n                    <ion-icon name="md-star" class="acteive"></ion-icon>\n                    <ion-icon name="md-star" class="acteive"></ion-icon>\n                    <ion-icon name="md-star" class="acteive"></ion-icon>\n                    <ion-icon name="md-star" class=""></ion-icon>\n                </div>\n            </div>\n            <p class="text-black text">\n                Quisiera cambiar un microondas por tus Anteojos Rayban. Precio estimado $3500\n            </p>\n        </ion-item>\n        <ion-item (click)="ViewCanjes()">\n            <div class="item_header d-flex">\n                <div class="profile d-flex">\n                    <div class="profile-img">\n                        <img src="assets/imgs/dp2.png">\n                    </div>\n                    <h2>\n                        Yo - Canje Ofrecido\n                        <span class="text-gray">14/10/2019</span>\n                    </h2>\n                </div>\n                <div class="rating end">\n                    <ion-icon name="md-star" class="acteive"></ion-icon>\n                    <ion-icon name="md-star" class="acteive"></ion-icon>\n                    <ion-icon name="md-star" class="acteive"></ion-icon>\n                    <ion-icon name="md-star" class="acteive"></ion-icon>\n                    <ion-icon name="md-star" class="acteive"></ion-icon>\n                </div>\n            </div>\n            <p class="text-black text">\n                Quisiera la parrillada para dos personas. Ofrezco servicio de reparación de aire Acondicionado. Precio $2000\n            </p>\n        </ion-item>\n        <ion-item (click)="ViewMatch()">\n            <div class="item_header d-flex">\n                <div class="profile d-flex">\n                    <div class="profile-img">\n                        <img src="assets/imgs/user3.jpg">\n                    </div>\n                    <h2>\n                        Pablo Mesenas\n                        <span class="text-gray">10/10/2019</span>\n                    </h2>\n                </div>\n                <div class="rating end">\n                    <ion-icon name="md-star" class="acteive"></ion-icon>\n                    <ion-icon name="md-star" class="acteive"></ion-icon>\n                    <ion-icon name="md-star" class="acteive"></ion-icon>\n                    <ion-icon name="md-star" class=""></ion-icon>\n                    <ion-icon name="md-star" class=""></ion-icon>\n                </div>\n            </div>\n            <p class="text-black text">\n                Quisiera cambiar servicios de páginas web por tus Anteojos Rayban. Precio estimado $3000\n            </p>\n        </ion-item>\n    </ion-list>\n</ion-content>\n'/*ion-inline-end:"D:\ionic\MundoCanjeApp\app\appDesa\src\pages\review\review.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]])
    ], ReviewPage);
    return ReviewPage;
}());

//# sourceMappingURL=review.js.map

/***/ }),

/***/ 166:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MatchPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs_tabs__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_pedidos_service_pedidos_service__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_global_pedido_global_pedido__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__chatting_chatting__ = __webpack_require__(80);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



//import { HomePage } from '../home/home';



var MatchPage = /** @class */ (function () {
    function MatchPage(navCtrl, navParams, toastController, pedido, pedidoService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastController = toastController;
        this.pedido = pedido;
        this.pedidoService = pedidoService;
        this.gender = "female";
        this.canjePedido = this.navParams.get('canjePedido');
    }
    MatchPage.prototype.tabs = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__tabs_tabs__["a" /* TabsPage */]);
    };
    MatchPage.prototype.goToSlide = function () {
        this.slides.slideTo(2, 500);
    };
    MatchPage.prototype.AceptaMatch = function () {
        var _this = this;
        //PUT estado=4
        console.log("EL pedido aceptado es:" + this.canjePedido.Id);
        //this.pedido.Id=this.canjePedido.Id;
        //getPedidosById
        this.pedidoService.getPedidosById(this.canjePedido.Id)
            .subscribe(function (data) {
            //this.presentToast('OK');
            if (data == null) {
                _this.presentToast('Error al obtener el Canje');
            }
            else {
                console.log(data);
                //this.dataApi = JSON.stringify(data);
                var data2 = JSON.stringify(data);
                _this.dataApi = JSON.parse(data2);
                _this.pedido.IdProducto = _this.dataApi.IdProducto;
                _this.pedido.IdUsuario = _this.dataApi.IdUsuario;
                console.log("La Categoria es: " + _this.dataApi.CategoriaMatch);
                console.log("La pedido.FechaPedido es: " + _this.pedido.FechaPedido);
                _this.pedido.Comentarios = _this.dataApi.Comentarios;
                _this.pedido.Importe = _this.dataApi.Importe;
                _this.pedido.ImagenMatch = _this.dataApi.ImagenMatch;
                _this.pedido.IdProductoMatch = _this.dataApi.IdProductoMatch;
                _this.pedido.ProductoNombreMatch = _this.dataApi.ProductoNombreMatch;
                _this.pedido.ProductoDescripcionMatch = _this.dataApi.ProductoDescripcionMatch;
                _this.pedido.CategoriaMatch = _this.dataApi.CategoriaMatch;
                _this.pedido.Id = _this.dataApi.Id;
                _this.pedido.IdPedido_Estado = "4";
                _this.pedidoService.putPedido(_this.pedido)
                    .subscribe(function (data) {
                    _this.presentToast('La solicitud se aceptó');
                    //this.navCtrl.push(NewchattingPage)
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__tabs_tabs__["a" /* TabsPage */]);
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__chatting_chatting__["a" /* ChattingPage */], { UserRecep: _this.dataApi.IdUsuario });
                }, function (error) { console.log("ERROR en Save to DB: " + error); });
                ////
            }
        }, function (error) { console.log(error); });
        //////////////
    };
    MatchPage.prototype.RechazaMatch = function () {
        var _this = this;
        //PUT estado=2
        this.pedidoService.getPedidosById(this.canjePedido.Id)
            .subscribe(function (data) {
            //this.presentToast('OK');
            if (data == null) {
                _this.presentToast('Error al obtener el Canje');
            }
            else {
                console.log(data);
                //this.dataApi = JSON.stringify(data);
                var data2 = JSON.stringify(data);
                _this.dataApi = JSON.parse(data2);
                _this.pedido.IdProducto = _this.dataApi.IdProducto;
                _this.pedido.IdUsuario = _this.dataApi.IdUsuario;
                _this.pedido.Comentarios = _this.dataApi.Comentarios;
                _this.pedido.Importe = _this.dataApi.Importe;
                _this.pedido.ImagenMatch = _this.dataApi.ImagenMatch;
                _this.pedido.IdProductoMatch = _this.dataApi.IdProductoMatch;
                _this.pedido.ProductoNombreMatch = _this.dataApi.ProductoNombreMatch;
                _this.pedido.ProductoDescripcionMatch = _this.dataApi.ProductoDescripcionMatch;
                _this.pedido.CategoriaMatch = _this.dataApi.CategoriaMatch;
                _this.pedido.Id = _this.dataApi.Id;
                _this.pedido.IdPedido_Estado = "2";
                _this.pedidoService.putPedido(_this.pedido)
                    .subscribe(function (data) {
                    _this.presentToast('La solicitud fue rechazada');
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__tabs_tabs__["a" /* TabsPage */]);
                }, function (error) { console.log("ERROR en Save to DB: " + error); });
            }
        }, function (error) { console.log(error); });
    };
    MatchPage.prototype.presentToast = function (texto) {
        return __awaiter(this, void 0, void 0, function () {
            var toast;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastController.create({
                            message: texto,
                            duration: 3000
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Slides */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Slides */])
    ], MatchPage.prototype, "slides", void 0);
    MatchPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-match',template:/*ion-inline-start:"D:\ionic\MundoCanjeApp\app\appDesa\src\pages\match\match.html"*/'<ion-header>\n  <ion-navbar>\n      <!--<ion-title>{{\'match\' | translate}}<span class="end text-theme" (click)="tabs() ">{{\'save\' | translate}}</span></ion-title>-->\n      <ion-title>{{\'match\' | translate}}</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content class="bg-color">\n  <div class="form" padding-left padding-right>\n      <ion-list no-lines>          \n          <ion-slides pager="true" autoplay="3000" loop="true">\n              <ion-slide>\n                  <div class="store_img">\n                      <img [src]="canjePedido.ImagenMatch">  \n                      <ion-badge item-end>${{canjePedido.Importe}}</ion-badge>            \n                  </div>\n              </ion-slide>\n              <!--\n              <ion-slide>\n                  <div class="store_img">\n                      <img src="assets/imgs/cachafaz2.jpg">  \n                      <ion-badge item-end>$1.500</ion-badge>            \n                  </div>\n              </ion-slide>\n              <ion-slide>\n                  <div class="store_img">\n                      <img src="assets/imgs/cachafaz3.jpg">  \n                      <ion-badge item-end>$1.500</ion-badge>            \n                  </div>\n              </ion-slide>\n              -->\n            </ion-slides>\n          <ion-item>\n              <ion-label floating>{{\'event_title\' | translate}}</ion-label>\n              <ion-textarea type="text" disabled="true" value="{{canjePedido.ProductoNombreMatch}}"></ion-textarea>\n          </ion-item>  \n      </ion-list>\n  </div>\n</ion-content>\n<ion-footer no-border class="d-flex">\n    <ion-icon class="material-icons text-white colorRed start" (click)="RechazaMatch()">thumb_down_alt</ion-icon>\n    <ion-icon class="material-icons text-white colorGreen end" (click)="AceptaMatch()">thumb_up_alt</ion-icon>\n  </ion-footer>\n'/*ion-inline-end:"D:\ionic\MundoCanjeApp\app\appDesa\src\pages\match\match.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */], __WEBPACK_IMPORTED_MODULE_4__providers_global_pedido_global_pedido__["a" /* GlobalPedidoProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_pedidos_service_pedidos_service__["a" /* PedidosServiceProvider */]])
    ], MatchPage);
    return MatchPage;
}());

//# sourceMappingURL=match.js.map

/***/ }),

/***/ 167:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CanjesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__store_store__ = __webpack_require__(702);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__eventdetail_eventdetail__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__offerdetail_offerdetail__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__search_search__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__map_map__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__edit_event_edit_event__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__new_canje_new_canje__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__match_match__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_product_service_product_service__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_pedidos_service_pedidos_service__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_user_service_user_service__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_global_global__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};














var CanjesPage = /** @class */ (function () {
    function CanjesPage(navCtrl, modalCtrl, userService, navParams, serviceProd, servicePedido, user) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.userService = userService;
        this.navParams = navParams;
        this.serviceProd = serviceProd;
        this.servicePedido = servicePedido;
        this.user = user;
        this.near = "Ofrecidos";
        this.tokenUsuario = this.navParams.get('tokenU');
        this.CanjesOfrecidos = false;
        console.log("El mail por ejemplo es:" + this.user.Mail);
        console.log("El Id por ejemplo es:" + this.user.Id);
        this.getOfrecidos(this.user.Id);
        this.getRecibidos(this.user.Id);
        this.getCanjeados(this.user.Id);
    }
    CanjesPage.prototype.NuevoCanje = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__new_canje_new_canje__["a" /* NewCanjePage */]);
    };
    CanjesPage.prototype.store = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__store_store__["a" /* StorePage */]);
    };
    CanjesPage.prototype.offerdetail = function (IdProd) {
        console.log("El IdProductoMatch es:" + IdProd);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__offerdetail_offerdetail__["a" /* OfferdetailPage */], { idProd: IdProd, estado: 'canjeado' });
    };
    CanjesPage.prototype.eventdetail = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__eventdetail_eventdetail__["a" /* EventdetailPage */]);
    };
    CanjesPage.prototype.map = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__map_map__["a" /* MapPage */]);
    };
    CanjesPage.prototype.search = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_5__search_search__["a" /* SearchPage */]);
        modal.present();
    };
    CanjesPage.prototype.edit_event = function (Producto) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__edit_event_edit_event__["a" /* Edit_eventPage */], { productoEdit: Producto });
    };
    CanjesPage.prototype.ViewMatch = function (pedido) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__match_match__["a" /* MatchPage */], { canjePedido: pedido });
    };
    CanjesPage.prototype.ViewProfile = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__edit_event_edit_event__["a" /* Edit_eventPage */]);
    };
    CanjesPage.prototype.getOfrecidos = function (idUsuario) {
        var _this = this;
        this.serviceProd.getProductByUser(idUsuario)
            .subscribe(function (data) {
            _this.canjesLst = data;
            if (data.length > 0) {
                _this.CanjesOfrecidos = true;
            }
        }, function (error) { console.log(error); });
    };
    CanjesPage.prototype.getRecibidos = function (idUsuario) {
        var _this = this;
        //Obtener el idUsuario  
        this.servicePedido.getPedidosRecibidosByUser(idUsuario)
            .subscribe(function (data) {
            _this.recibidosLst = data;
        }, function (error) { console.log(error); });
    };
    CanjesPage.prototype.getCanjeados = function (idUsuario) {
        var _this = this;
        this.servicePedido.getPedidosConfirmadosByUser(idUsuario)
            .subscribe(function (data) {
            _this.canjeadosLst = data;
        }, function (error) { console.log(error); });
    };
    CanjesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-canjes',template:/*ion-inline-start:"D:\ionic\MundoCanjeApp\app\appDesa\src\pages\canjes\canjes.html"*/'<ion-header class="bg-color">\n\n  <ion-navbar>\n\n      <ion-title class="text-theme">{{\'canje_title\' | translate}}         \n\n      </ion-title>\n\n  </ion-navbar>\n\n  <ion-segment [(ngModel)]="near">\n\n      <ion-segment-button value="Ofrecidos">\n\n          {{\'offers\' | translate}}\n\n      </ion-segment-button>\n\n      <ion-segment-button value="Recibidos">\n\n          {{\'requested\' | translate}}\n\n      </ion-segment-button>\n\n      <ion-segment-button value="Canjeados">\n\n          {{\'redeemed\' | translate}}\n\n      </ion-segment-button>\n\n  </ion-segment>\n\n</ion-header>\n\n\n\n<ion-content class="bg-color">\n\n  <div [ngSwitch]="near">\n\n      <!--*ngSwitchCase="\'Ofrecidos\'" No funciona con 2 *ng-->\n\n      <ion-list no-lines *ngSwitchCase="\'Ofrecidos\'">\n\n        <div *ngFor="let d of canjesLst; let i = index" >            \n\n            <ion-item (click)="edit_event(d)">   \n\n                    <img [src]="d.Imagen" class="bg">          \n\n                    <ion-badge item-end>\n\n                            <ion-icon name="md-stopwatch"></ion-icon>\n\n                            {{d.Ult_Dias}} Días\n\n                    </ion-badge>          \n\n                    <div class="text">\n\n                        <h2>{{d.Nombre}}</h2>\n\n                        <p class="d-flex">\n\n                        <span class="text-theme">{{d.Descripcion}}</span>\n\n                        <span class=""> | {{d.Categoria}}</span>\n\n                        <span class="end">$ {{d.Importe}}</span>\n\n                        </p>                  \n\n                    </div>\n\n            </ion-item>        \n\n        </div>\n\n        <div class="CanjeadosEmpty" *ngIf="!CanjesOfrecidos">\n\n                <img  src="assets/imgs/NoCanjes.png" >          \n\n                <h2 >No hay canjes ofrecidos</h2>           \n\n          </div>\n\n    \n\n      </ion-list>      \n\n      <ion-list class="ListReview" no-lines *ngSwitchCase="\'Recibidos\'" >\n\n          <div *ngFor="let d of recibidosLst">\n\n                <ion-item  (click)="ViewMatch(d)">\n\n                    <div class="item_header d-flex">\n\n                        <div class="profile d-flex">\n\n                            <div class="profile-img">\n\n                                <img [src]="d.Img_Usuario">\n\n                            </div>\n\n                            <h2 class="text-black">\n\n                                    {{d.Nombre_Usuario}}\n\n                                <span class="text-gray">{{d.Ult_Dias}} Días</span>\n\n                            </h2>\n\n                        </div>\n\n                        <!--\n\n                        <div class="rating end">\n\n                            <ion-icon name="md-star" class="acteive"></ion-icon>\n\n                            <ion-icon name="md-star" class="acteive"></ion-icon>\n\n                            <ion-icon name="md-star" class="acteive"></ion-icon>\n\n                            <ion-icon name="md-star" class="acteive"></ion-icon>\n\n                            <ion-icon name="md-star" class=""></ion-icon>\n\n                        </div>\n\n                        -->\n\n                        <div class="end">\n\n                                <ion-badge item-end (click)="ViewProfile(); $event.stopPropagation()">\n\n                                      <!--  <ion-icon name="md-stopwatch"></ion-icon>-->\n\n                                        Ver Perfil\n\n                                </ion-badge>                                  \n\n                            </div>\n\n                            \n\n                    </div>\n\n                    <p class="text-white text">\n\n                            {{d.Comentarios}}. Precio estimado ${{d.Importe}}\n\n                    </p>\n\n                </ion-item>\n\n\n\n                \n\n          </div>\n\n          <div class="RecibidosEmpty" *ngIf="!recibidosLst.length">\n\n                <img  src="assets/imgs/NoCanjes.png" >          \n\n                <h2 >No hay canjes recibidos</h2>\n\n           \n\n          </div>\n\n         \n\n    </ion-list>\n\n      <ion-list *ngSwitchCase="\'Canjeados\'">\n\n        <div *ngFor="let d of canjeadosLst">\n\n            <ion-item (click)="offerdetail(d.IdProductoMatch)">\n\n                <img [src]="d.ImagenMatch" class="bg">\n\n                <ion-badge item-end>\n\n                    <ion-icon name="md-calendar"></ion-icon>\n\n                    {{d.Fecha_Pedido}}\n\n                </ion-badge>\n\n                <div class="text">\n\n                    <h2>{{d.ProductoNombreMatch}}</h2>\n\n                    <p class="d-flex">\n\n                        <span class="text-theme">{{d.ProductoDescripcionMatch}}</span>\n\n                        <span class="">| {{d.CategoriaMatch}}</span>\n\n                    </p>\n\n                </div>\n\n            </ion-item>\n\n        </div>\n\n        <div class="CanjeadosEmpty" *ngIf="!canjeadosLst.length">\n\n                <img  src="assets/imgs/NoCanjes.png" >          \n\n                <h2 >No hay artículos canjeados</h2>           \n\n          </div>\n\n      </ion-list>\n\n  </div>\n\n  \n\n</ion-content>\n\n<ion-footer no-border class="d-flex">\n\n  <ion-icon class="material-icons text-white bg-theme end" (click)="NuevoCanje()">add</ion-icon>\n\n</ion-footer>'/*ion-inline-end:"D:\ionic\MundoCanjeApp\app\appDesa\src\pages\canjes\canjes.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */], __WEBPACK_IMPORTED_MODULE_12__providers_user_service_user_service__["a" /* UserServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_10__providers_product_service_product_service__["a" /* ProductServiceProvider */], __WEBPACK_IMPORTED_MODULE_11__providers_pedidos_service_pedidos_service__["a" /* PedidosServiceProvider */], __WEBPACK_IMPORTED_MODULE_13__providers_global_global__["a" /* GlobalProvider */]])
    ], CanjesPage);
    return CanjesPage;
}());

//# sourceMappingURL=canjes.js.map

/***/ }),

/***/ 168:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewCanjePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_product_service_product_service__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_global_product_global_product__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tabs_tabs__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_category_service_category_service__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_global_global__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_pedidos_service_pedidos_service__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_global_pedido_global_pedido__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_geolocation_ngx__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_camera__ = __webpack_require__(107);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};











var NewCanjePage = /** @class */ (function () {
    function NewCanjePage(navCtrl, toastController, geolocation, productService, product, pedido, categService, user, pedidoService, camera) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.toastController = toastController;
        this.geolocation = geolocation;
        this.productService = productService;
        this.product = product;
        this.pedido = pedido;
        this.categService = categService;
        this.user = user;
        this.pedidoService = pedidoService;
        this.camera = camera;
        this.gender = "female";
        this.geolocationSuccess = function (position) {
            _this.latitude = position.coords.latitude;
            _this.longitude = position.coords.longitude;
        };
        this.ObtenerCategorias();
        this.ObtenerUbicacion();
        this.product.Nombre = "";
        this.product.Descripcion = "";
        this.product.Importe = 0;
        this.base64Image = "";
    }
    NewCanjePage.prototype.tabs = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__tabs_tabs__["a" /* TabsPage */]);
    };
    NewCanjePage.prototype.postCanje = function () {
        var _this = this;
        console.log("LAT: " + this.latitude);
        console.log("LONG: " + this.longitude);
        this.product.Id = '0';
        this.product.IdTipo = '1';
        this.product.TipoDespublicacion = '1';
        this.product.IdEstado = '1';
        if (this.product.Imagen == null) {
            this.product.Imagen = "http://mundocanje.tk/Imagenes/Productos/NoDisponible.png";
        }
        this.product.IdUsuario = this.user.Id;
        var myDate = new Date().toDateString();
        this.product.Fecha_Publicacion = myDate;
        this.product.lat = this.latitude;
        this.product.lng = this.longitude;
        this.product.Imagen = this.base64Image;
        this.productService.postProduct(this.product)
            .subscribe(function (data) {
            var data2 = JSON.stringify(data);
            _this.dataApi = JSON.parse(data2);
            _this.pedido.Id = "0";
            _this.pedido.IdProducto = _this.dataApi.Id; //Poner id que devuelve el data
            _this.pedido.IdPedido_Estado = "1";
            _this.pedido.FechaPedido = myDate;
            _this.presentToast('Canje creado correctamente');
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__tabs_tabs__["a" /* TabsPage */]);
            /*
                      this.pedidoService.postPedido(this.pedido)
                      .subscribe(
                          (data)=> {
                            this.presentToast('Canje creado correctamente');
                            this.navCtrl.setRoot(TabsPage);
                          },
                          (error)=>{console.log("ERROR en Save to DB: " + error);}
                      )
            */
        }, function (error) { console.log("ERROR en Save to DB: " + error); });
    };
    NewCanjePage.prototype.presentToast = function (texto) {
        return __awaiter(this, void 0, void 0, function () {
            var toast;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastController.create({
                            message: texto,
                            duration: 3000
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    NewCanjePage.prototype.ObtenerCategorias = function () {
        var _this = this;
        this.categService.GetCategorias()
            .subscribe(function (data) {
            _this.CategoriasLst = data;
        }, function (error) { console.log(error); });
    };
    NewCanjePage.prototype.ObtenerUbicacion = function () {
        var options = {
            enableHighAccuracy: true,
            timeout: 5000,
            maximumAge: 0
        };
        navigator.geolocation.getCurrentPosition(this.geolocationSuccess, this.onError);
    };
    NewCanjePage.prototype.onError = function (error) {
        alert("Error al obtener la posicion");
    };
    NewCanjePage.prototype.takePhoto = function (sourceType) {
        var _this = this;
        var options = {
            quality: 50,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            correctOrientation: true,
            sourceType: sourceType,
        };
        this.camera.getPicture(options).then(function (imageData) {
            _this.base64Image = 'data:image/jpeg;base64,' + imageData;
        }, function (err) {
            // Handle error
        });
    };
    NewCanjePage.prototype.AccessCamera = function () {
        this.takePhoto(1);
    };
    NewCanjePage.prototype.AccessGallery = function () {
        this.takePhoto(0);
    };
    NewCanjePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-new-canje',template:/*ion-inline-start:"D:\ionic\MundoCanjeApp\app\appDesa\src\pages\new-canje\new-canje.html"*/'<ion-header>\n\n  <ion-navbar>\n\n      <ion-title>{{\'new_canje\' | translate}}<span class="end text-theme" (click)="postCanje() ">{{\'save\' | translate}}</span></ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content class="bg-color">\n\n  <div class="form" padding-left padding-right>\n\n      <ion-list no-lines padding-left padding-right>\n\n          <div class="store_img">\n\n             <img [src]="base64Image" *ngIf="base64Image" />      \n\n             <!-- <ion-icon name="md-camera" class="text-white bg-theme add-pic"></ion-icon>-->\n\n              <ion-fab center style="bottom: 30px;" >\n\n                <button ion-fab style="background-color: #b9b6b6;">\n\n                    <ion-icon name="md-camera" class="text-white bg-theme add-pic"></ion-icon>\n\n                </button>\n\n                <ion-fab-list side="left">\n\n                  <button ion-fab (click)="AccessGallery()">\n\n                    <ion-icon name="md-photos" class="text-white bg-theme add-pic"></ion-icon>\n\n                  </button>\n\n                </ion-fab-list>\n\n                <ion-fab-list side="right">  \n\n                  <button ion-fab (click)="AccessCamera()">\n\n                    <ion-icon name="md-camera" class="text-white bg-theme add-pic"></ion-icon>\n\n                  </button>\n\n                </ion-fab-list>\n\n              </ion-fab>\n\n          </div>\n\n          <ion-item>\n\n              <ion-label floating>{{\'canje_name\' | translate}}</ion-label>\n\n              <ion-textarea type="text" value="" [(ngModel)]="product.Nombre"></ion-textarea>\n\n          </ion-item>           \n\n          <ion-item>\n\n                <ion-label floating>{{\'event_title\' | translate}}</ion-label>\n\n                <ion-textarea type="text" value="" [(ngModel)]="product.Descripcion"></ion-textarea>\n\n            </ion-item>            \n\n          <!--<ion-item>\n\n              <ion-label floating>{{\'address2\' | translate}}</ion-label>\n\n              <ion-input type="text" value=""></ion-input>\n\n          </ion-item>-->\n\n          \n\n          <ion-item>\n\n                <ion-label floating>{{\'categories\' | translate}}</ion-label>                \n\n              <ion-select [(ngModel)]="product.IdCategoria">>                \n\n                    <ion-option *ngFor="let iCategoria of CategoriasLst; let i = index" [value]="iCategoria.Id" >\n\n                        {{iCategoria.Nombre}} \n\n                    </ion-option>\n\n                </ion-select>\n\n          </ion-item>\n\n          <ion-row>\n\n              <ion-col col-6>\n\n                  <ion-item>\n\n                      <ion-label item-start>{{\'quantity\' | translate}}</ion-label>\n\n                      <div class="input_box d-flex" item-end>\n\n                          <ion-icon class="material-icons text-black">settings</ion-icon>\n\n                          <ion-input [(ngModel)]="product.Cantidad" type="number" value="1"></ion-input>\n\n                      </div>\n\n                  </ion-item>\n\n              </ion-col>\n\n              <ion-col col-6>\n\n                  <ion-item>\n\n                      <ion-label item-start>{{\'price\' | translate}}</ion-label>\n\n                      <div class="input_box d-flex" item-end>\n\n                          <ion-icon class="text-black" name="cash"></ion-icon>\n\n                          <ion-input type="text" value="0" [(ngModel)]="product.Importe"></ion-input>\n\n                      </div>\n\n                  </ion-item>\n\n              </ion-col>\n\n          </ion-row>\n\n      </ion-list>\n\n\n\n      \n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\ionic\MundoCanjeApp\app\appDesa\src\pages\new-canje\new-canje.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */], __WEBPACK_IMPORTED_MODULE_9__ionic_native_geolocation_ngx__["a" /* Geolocation */], __WEBPACK_IMPORTED_MODULE_2__providers_product_service_product_service__["a" /* ProductServiceProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_global_product_global_product__["a" /* GlobalProductProvider */], __WEBPACK_IMPORTED_MODULE_8__providers_global_pedido_global_pedido__["a" /* GlobalPedidoProvider */], __WEBPACK_IMPORTED_MODULE_5__providers_category_service_category_service__["a" /* CategoryServiceProvider */], __WEBPACK_IMPORTED_MODULE_6__providers_global_global__["a" /* GlobalProvider */], __WEBPACK_IMPORTED_MODULE_7__providers_pedidos_service_pedidos_service__["a" /* PedidosServiceProvider */], __WEBPACK_IMPORTED_MODULE_10__ionic_native_camera__["a" /* Camera */]])
    ], NewCanjePage);
    return NewCanjePage;
}());

//# sourceMappingURL=new-canje.js.map

/***/ }),

/***/ 199:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 199;

/***/ }),

/***/ 243:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/modal-notification/modal-notification.module": [
		737,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 243;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 30:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_global_product_global_product__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_global_global__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/*
  Generated class for the CategoryServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var ProductServiceProvider = /** @class */ (function () {
    function ProductServiceProvider(http, product, global) {
        this.http = http;
        this.product = product;
        this.global = global;
    }
    ProductServiceProvider.prototype.getHome = function () {
        return this.http.get(this.global.ApiUrl + 'productos/HomeApp');
    };
    ProductServiceProvider.prototype.getProductByUser = function (idUsuario) {
        return this.http.get(this.global.ApiUrl + 'productos/ProductsByUser/' + idUsuario);
    };
    ProductServiceProvider.prototype.getProductByIdTipo = function (IdTipo) {
        return this.http.get(this.global.ApiUrl + 'productos/GetProductosByIdTipo/' + IdTipo);
    };
    ProductServiceProvider.prototype.getProductById = function (id) {
        return this.http.get(this.global.ApiUrl + 'productos/' + id);
    };
    ProductServiceProvider.prototype.getProductByName = function (nombre) {
        return this.http.get(this.global.ApiUrl + 'productos/ProductsByName/' + nombre);
    };
    ProductServiceProvider.prototype.putProduct = function (product) {
        console.log(product);
        return this.http.put(this.global.ApiUrl + 'Productos/' + product.Id, product);
    };
    ProductServiceProvider.prototype.deleteProduct = function (product) {
        console.log(product);
        return this.http.delete(this.global.ApiUrl + 'Productos/' + product.Id);
    };
    ProductServiceProvider.prototype.postProduct = function (product) {
        product.Id = "0";
        console.log(product);
        return this.http.post(this.global.ApiUrl + 'Productos/', product);
    };
    ProductServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__providers_global_product_global_product__["a" /* GlobalProductProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_global_global__["a" /* GlobalProvider */]])
    ], ProductServiceProvider);
    return ProductServiceProvider;
}());

//# sourceMappingURL=product-service.js.map

/***/ }),

/***/ 31:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__map_map__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(344);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__chats_chats__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__canjes_canjes__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TabsPage = /** @class */ (function () {
    function TabsPage(navParams) {
        this.navParams = navParams;
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_4__canjes_canjes__["a" /* CanjesPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_3__chats_chats__["a" /* ChatsPage */];
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_1__map_map__["a" /* MapPage */];
        this.tokenUsuario = this.navParams.get('tokenU');
        console.log("El token del usuario es:" + this.tokenUsuario);
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\ionic\MundoCanjeApp\app\appDesa\src\pages\tabs\tabs.html"*/'<ion-tabs>\n    <ion-tab [root]="tab1Root" [rootParams]="navParams.data" tabTitle="{{\'navigate\' | translate}}" tabsHideOnSubPages="true"></ion-tab>\n    <ion-tab [root]="tab2Root" [rootParams]="navParams.data" tabTitle="{{\'canje_title\' | translate}}" tabsHideOnSubPages="true"></ion-tab>\n    <ion-tab [root]="tab3Root" [rootParams]="navParams.data" tabTitle="{{\'chats\' | translate}}" tabsHideOnSubPages="true"></ion-tab>\n    <ion-tab [root]="tab4Root" [rootParams]="navParams.data" tabTitle="{{\'map\' | translate}}" tabsHideOnSubPages="true"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"D:\ionic\MundoCanjeApp\app\appDesa\src\pages\tabs\tabs.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5_ionic_angular__["j" /* NavParams */]])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 335:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatDetalleServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_global_global__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ChatDetalleServiceProvider = /** @class */ (function () {
    function ChatDetalleServiceProvider(http, global) {
        this.http = http;
        this.global = global;
    }
    ChatDetalleServiceProvider.prototype.getChatsDetails = function () {
        return this.http.get(this.global.ApiUrl + 'chats');
    };
    ChatDetalleServiceProvider.prototype.getChatsDetailsByUsuario = function (IdUserEmisor, IdUserReceptor) {
        return this.http.get(this.global.ApiUrl + 'Chats_Detalles/ChatsDetailsByIdUsuario/' + IdUserEmisor + '/' + IdUserReceptor);
    };
    ChatDetalleServiceProvider.prototype.postChatDetails = function (chat) {
        chat.Id = "0";
        console.log(chat);
        return this.http.post(this.global.ApiUrl + 'Chats_Detalles/', chat);
    };
    ChatDetalleServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__providers_global_global__["a" /* GlobalProvider */]])
    ], ChatDetalleServiceProvider);
    return ChatDetalleServiceProvider;
}());

//# sourceMappingURL=chat-detalle-service.js.map

/***/ }),

/***/ 336:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_user_service_user_service__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tabs_tabs__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_global_global__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_camera__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__signin_signin__ = __webpack_require__(108);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};







var ProfilePage = /** @class */ (function () {
    function ProfilePage(navCtrl, userServ, toastController, user, camera) {
        this.navCtrl = navCtrl;
        this.userServ = userServ;
        this.toastController = toastController;
        this.user = user;
        this.camera = camera;
        this.shaop_category = "Dairy";
        this.base64Image = user.Imagen;
    }
    ProfilePage.prototype.signin = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__signin_signin__["a" /* SigninPage */]);
    };
    ProfilePage.prototype.takePhoto = function (sourceType) {
        var _this = this;
        var options = {
            quality: 50,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            correctOrientation: true,
            sourceType: sourceType,
        };
        this.camera.getPicture(options).then(function (imageData) {
            _this.base64Image = 'data:image/jpeg;base64,' + imageData;
        }, function (err) {
            // Handle error
        });
    };
    ProfilePage.prototype.AccessCamera = function () {
        this.takePhoto(1);
    };
    ProfilePage.prototype.AccessGallery = function () {
        this.takePhoto(0);
    };
    ProfilePage.prototype.putUsuario = function () {
        var _this = this;
        if (this.user.Imagen == null) {
            this.user.Imagen = "http://mundocanje.tk/Imagenes/Productos/NoDisponible.png";
        }
        this.user.Imagen = this.base64Image;
        this.userServ.putUser(this.user)
            .subscribe(function (data) {
            _this.presentToast('Los cambios se guardaron correctamente');
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__tabs_tabs__["a" /* TabsPage */]);
        }, function (error) { console.log("ERROR en Save to DB: " + error); });
    };
    ProfilePage.prototype.presentToast = function (texto) {
        return __awaiter(this, void 0, void 0, function () {
            var toast;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastController.create({
                            message: texto,
                            duration: 3000
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    ProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-profile',template:/*ion-inline-start:"D:\ionic\MundoCanjeApp\app\appDesa\src\pages\profile\profile.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>{{\'my_profile\' | translate}}<span class="end text-theme" (click)="putUsuario() ">{{\'save\' | translate}}</span></ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content class="bg-color">\n    <div class="form" padding-left padding-right>\n        <ion-list no-lines padding-left padding-right>\n            <div class="store_img">\n                <img [src]="base64Image" *ngIf="base64Image" />      \n                <!-- <ion-icon name="md-camera" class="text-white bg-theme add-pic"></ion-icon>-->\n                 <ion-fab center style="bottom: 30px;" >\n                   <button ion-fab style="background-color: #b9b6b6;">\n                       <ion-icon name="md-camera" class="text-white bg-theme add-pic"></ion-icon>\n                   </button>\n                   <ion-fab-list side="left">\n                     <button ion-fab (click)="AccessGallery()">\n                       <ion-icon name="md-photos" class="text-white bg-theme add-pic"></ion-icon>\n                     </button>\n                   </ion-fab-list>\n                   <ion-fab-list side="right">  \n                     <button ion-fab (click)="AccessCamera()">\n                       <ion-icon name="md-camera" class="text-white bg-theme add-pic"></ion-icon>\n                     </button>\n                   </ion-fab-list>\n                 </ion-fab>\n             </div>\n            <ion-item>\n                <ion-label floating>{{\'shop_name\' | translate}}</ion-label>\n                <ion-input type="text" [(ngModel)]="user.Nombre" value=""></ion-input>\n            </ion-item>\n\n            \n\n            <ion-item>\n                <ion-label floating>Telefono</ion-label>\n                <ion-input type="text" [(ngModel)]="user.Telefono" value=""></ion-input>\n            </ion-item>\n\n            <ion-item>\n                <ion-label floating>{{\'email_address\' | translate}}</ion-label>\n                <ion-input type="text" [(ngModel)]="user.Mail" value=""></ion-input>\n            </ion-item>\n            <ion-item>\n                <ion-label floating>Direccion</ion-label>\n                <ion-input type="text" [(ngModel)]="user.Direccion" value=""></ion-input>\n            </ion-item>\n        </ion-list>\n    </div>\n</ion-content>\n'/*ion-inline-end:"D:\ionic\MundoCanjeApp\app\appDesa\src\pages\profile\profile.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_user_service_user_service__["a" /* UserServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */], __WEBPACK_IMPORTED_MODULE_4__providers_global_global__["a" /* GlobalProvider */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_camera__["a" /* Camera */]])
    ], ProfilePage);
    return ProfilePage;
}());

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 337:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_autentication_service_autentication_service__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_user_service_user_service__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_global_global__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__tabs_tabs__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_ciudades_service_ciudades_service__ = __webpack_require__(338);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};







var RegisterPage = /** @class */ (function () {
    function RegisterPage(navCtrl, authService, toastController, userService, user, ciudadServ) {
        this.navCtrl = navCtrl;
        this.authService = authService;
        this.toastController = toastController;
        this.userService = userService;
        this.user = user;
        this.ciudadServ = ciudadServ;
        this.user.Mail = "";
        this.user.password = "";
        this.TipoUsuario = "1";
        this.ObtenerCiudades();
    }
    RegisterPage.prototype.tabs = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__tabs_tabs__["a" /* TabsPage */]);
    };
    RegisterPage.prototype.SetTipoUsuario = function (tipoUsuario) {
        this.TipoUsuario = tipoUsuario;
    };
    RegisterPage.prototype.RegistrarUsuario = function () {
        var _this = this;
        var tokenFb = "";
        this.authService.registerUser(this.user.Mail, this.user.password)
            .then(function (info) {
            console.log('usuario registrado');
            _this.presentToast('Registrado correctamente');
            tokenFb = info.user.uid;
            _this.user.Token = tokenFb;
            _this.user.Imagen = "";
            _this.user.IdPlan = "1"; //Se registra con plan básico por default.
            _this.user.IdLocalidad = _this.IdCiudad;
            _this.user.Estado = "1";
            _this.user.IdTipo = _this.TipoUsuario;
            var myDate = new Date().toDateString();
            _this.user.Fecha_Alta = myDate;
            console.log('Token ' + tokenFb);
            _this.registerToDB2.then(function (result) {
                //window.alert(result); // true
                console.log("Registracion correcta");
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__tabs_tabs__["a" /* TabsPage */], { tokenU: tokenFb });
            }).catch(function (error) {
                _this.presentToast(error);
                console.log("Error al registrase");
            });
        })
            .catch(function (error) {
            _this.presentToast(error);
            console.log("ERror......");
        });
    };
    Object.defineProperty(RegisterPage.prototype, "registerToDB2", {
        get: function () {
            var _this = this;
            return new Promise(function (resolve, reject) {
                _this.userService.postUser(_this.user)
                    .subscribe(function (data) {
                    resolve(true);
                }, function (error) {
                    console.log("ERROR en Save to DB: " + error);
                    return false;
                });
            });
        },
        enumerable: true,
        configurable: true
    });
    RegisterPage.prototype.presentToast = function (texto) {
        return __awaiter(this, void 0, void 0, function () {
            var toast;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastController.create({
                            message: texto,
                            duration: 3000
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    RegisterPage.prototype.ObtenerCiudades = function () {
        var _this = this;
        this.ciudadServ.GetCiudades()
            .subscribe(function (data) {
            _this.ListCiudades = data;
            console.log("La ciudad 1: " + _this.ListCiudades[0].Nombre);
        }, function (error) { console.log(error); });
    };
    RegisterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-register',template:/*ion-inline-start:"D:\ionic\MundoCanjeApp\app\appDesa\src\pages\register\register.html"*/'<ion-header class="bg-transparent">\n\n    <ion-navbar>\n\n        <ion-title>{{\'register\' | translate}}</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n<ion-content class="bg-color">\n\n    <div class="profile-img">\n\n        <div class="img-box">\n\n            <!--            <img src="assets/imgs/dp1.png">-->\n\n            <ion-icon name="md-person" class="text-white"></ion-icon>\n\n        </div>\n\n        <ion-icon name="md-camera" class="text-white bg-theme add-pic"></ion-icon>\n\n    </div>\n\n    <div class="form" padding-left padding-right>\n\n        <ion-list no-lines padding-left padding-right>\n\n            <ion-item>\n\n                <ion-label floating>{{\'user_name\' | translate}}</ion-label>\n\n                <ion-input [(ngModel)]="user.Nombre" type="text" value=""></ion-input>\n\n            </ion-item>\n\n           \n\n            <ion-item>\n\n                <ion-label floating>{{\'user_telephone\' | translate}}</ion-label>\n\n                <ion-input [(ngModel)]="user.Telefono" type="number" value=""></ion-input>\n\n            </ion-item>            \n\n            <ion-item>\n\n                <ion-label floating>{{\'user_address\' | translate}}</ion-label>\n\n                <ion-input [(ngModel)]="user.Direccion" type="text" value=""></ion-input>\n\n            </ion-item>\n\n            <ion-item>\n\n                <ion-label floating>{{\'email_address\' | translate}}</ion-label>\n\n                <ion-input [(ngModel)]="user.Mail" type="email" value=""></ion-input>\n\n            </ion-item>\n\n            <ion-item>\n\n                    <ion-label floating>Ciudad</ion-label>\n\n                    \n\n                    <!--       <ion-select > -->\n\n                  <ion-select [(ngModel)]="IdCiudad">                \n\n                        <ion-option *ngFor="let iCiudad of ListCiudades; let i = index" [value]="iCiudad.Id" >\n\n                            {{iCiudad.Nombre}} \n\n                        </ion-option>\n\n                    </ion-select>\n\n                </ion-item>\n\n            \n\n\n\n            <ion-list radio-group style="margin: 10px 0 16px;">                \n\n                  <div class="row">\n\n                    <ion-col col-6 col-sm-6 col-md-6 col-lg-6 >\n\n                        <ion-item>\n\n                        <ion-label>Usuario</ion-label>\n\n                        <ion-radio checked=\'true\' (click)="SetTipoUsuario(1)" value=\'1\'></ion-radio>\n\n                        </ion-item>\n\n                    </ion-col>\n\n                    <ion-col col-6 col-sm-6 col-md-6 col-lg-6 >\n\n                        <ion-item>\n\n                        <ion-label>Comercio</ion-label>\n\n                        <ion-radio (click)="SetTipoUsuario(2)" value=\'2\'></ion-radio>\n\n                        </ion-item>\n\n                    </ion-col>\n\n                  </div>\n\n              \n\n              </ion-list>\n\n            <ion-item [class.hide]="TipoUsuario==1"> \n\n                <ion-label floating>{{\'user_business_name\' | translate}}</ion-label>\n\n                <ion-input [(ngModel)]="user.Razon_Social" type="text" value=""></ion-input>\n\n            </ion-item>            \n\n            <ion-item [class.hide]="TipoUsuario==1">\n\n                <ion-label floating>{{\'user_cuit\' | translate}}</ion-label>\n\n                <ion-input [(ngModel)]="user.Cuit" type="number" value="" maxlength="11"></ion-input>\n\n            </ion-item>\n\n            <ion-item class="password">\n\n                <ion-label floating>{{\'set_password\' | translate}}</ion-label>\n\n                <ion-input [(ngModel)]="user.password" type="password" class="password" value=""></ion-input>\n\n            </ion-item>\n\n            <ion-item class="password">\n\n                <ion-label floating>{{\'confirm_password\' | translate}}</ion-label>\n\n                <ion-input type="password" class="password" value=""></ion-input>\n\n            </ion-item>\n\n            <button ion-button block class="btn" (click)="RegistrarUsuario()" round>{{\'register_now\' | translate}}</button>\n\n        </ion-list>\n\n    </div>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\ionic\MundoCanjeApp\app\appDesa\src\pages\register\register.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_autentication_service_autentication_service__["a" /* AutenticationServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */], __WEBPACK_IMPORTED_MODULE_3__providers_user_service_user_service__["a" /* UserServiceProvider */], __WEBPACK_IMPORTED_MODULE_4__providers_global_global__["a" /* GlobalProvider */], __WEBPACK_IMPORTED_MODULE_6__providers_ciudades_service_ciudades_service__["a" /* CiudadesServiceProvider */]])
    ], RegisterPage);
    return RegisterPage;
}());

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 338:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CiudadesServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_global_global__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CiudadesServiceProvider = /** @class */ (function () {
    function CiudadesServiceProvider(http, global) {
        this.http = http;
        this.global = global;
    }
    CiudadesServiceProvider.prototype.GetCiudades = function () {
        console.log("Obteniendo la ciudad de: " + this.global.ApiUrl);
        return this.http.get(this.global.ApiUrl + 'localidades/');
    };
    CiudadesServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__providers_global_global__["a" /* GlobalProvider */]])
    ], CiudadesServiceProvider);
    return CiudadesServiceProvider;
}());

//# sourceMappingURL=ciudades-service.js.map

/***/ }),

/***/ 339:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PasswordPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs_tabs__ = __webpack_require__(31);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PasswordPage = /** @class */ (function () {
    function PasswordPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    PasswordPage.prototype.tabs = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__tabs_tabs__["a" /* TabsPage */]);
    };
    PasswordPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-password',template:/*ion-inline-start:"D:\ionic\MundoCanjeApp\app\appDesa\src\pages\password\password.html"*/'<ion-header class="bg-transparent">\n    <ion-navbar>\n        <ion-title>{{\'forgot_password\' | translate}}</ion-title>\n    </ion-navbar>\n</ion-header>\n\n\n<ion-content class="bg-color">\n    <div class="banner">\n        <img src="assets/imgs/background.png" class="background">\n        <div class="text">\n            <p class="text-white"><strong>{{\'it_will_take_less_than_a_minutes\' | translate}}</strong></p>\n            <p class="text-white">{{\'let_us_know_your_registered_email_address\' | translate}}</p>\n        </div>\n    </div>\n    <div class="form">\n        <ion-list no-lines padding-left padding-right>\n            <ion-item>\n                <ion-input type="email" placeholder="{{\'registered_email_eddress\' | translate}}"></ion-input>\n            </ion-item>\n            <button ion-button block class="btn" (click)="tabs()" round>{{\'submit\' | translate}}</button>\n        </ion-list>\n    </div>\n</ion-content>\n'/*ion-inline-end:"D:\ionic\MundoCanjeApp\app\appDesa\src\pages\password\password.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]])
    ], PasswordPage);
    return PasswordPage;
}());

//# sourceMappingURL=password.js.map

/***/ }),

/***/ 340:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConditionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_terminos_service_terminos_service__ = __webpack_require__(341);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ConditionPage = /** @class */ (function () {
    function ConditionPage(navCtrl, serviceTerminos) {
        this.navCtrl = navCtrl;
        this.serviceTerminos = serviceTerminos;
        this.GetTerminos();
    }
    ConditionPage.prototype.GetTerminos = function () {
        var _this = this;
        this.serviceTerminos.GetTerminos()
            .subscribe(function (data) {
            for (var i in data) {
                if (data[i].Titulo == "Terminos") {
                    _this.vTerminos = data[i].Descripcion;
                    console.log("El termino es: " + _this.vTerminos);
                }
                if (data[i].Titulo == "TerminosDeUso") {
                    _this.vTerminosDeUso = data[i].Descripcion;
                    console.log("El TerminosDeUso es: " + _this.vTerminosDeUso);
                }
            }
        }, function (error) { console.log(error); });
    };
    ConditionPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-condition',template:/*ion-inline-start:"D:\ionic\MundoCanjeApp\app\appDesa\src\pages\condition\condition.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>{{\'terms_conditions\' | translate}}</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content class="bg-color">\n    <p class="text-black">\n            {{vTerminos}}\n\n    </p>\n    <h2 class="text-blue">{{\'terms_of_use\' | translate}}</h2>\n    <p class="text-black">\n            {{vTerminosDeUso}}\n    </p>\n</ion-content>\n'/*ion-inline-end:"D:\ionic\MundoCanjeApp\app\appDesa\src\pages\condition\condition.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_terminos_service_terminos_service__["a" /* TerminosServiceProvider */]])
    ], ConditionPage);
    return ConditionPage;
}());

//# sourceMappingURL=condition.js.map

/***/ }),

/***/ 341:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TerminosServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_global_global__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TerminosServiceProvider = /** @class */ (function () {
    function TerminosServiceProvider(http, global) {
        this.http = http;
        this.global = global;
        this.favoriteCounter = 0;
        this.favorites = [];
        //console.log('Hello TerminosServiceProvider Provider');
    }
    TerminosServiceProvider.prototype.GetTerminos = function () {
        return this.http.get(this.global.ApiUrl + 'terminos/');
    };
    TerminosServiceProvider.prototype.findAll = function () {
        //return Promise.resolve(restaurants);
        return Promise.resolve(this.GetTerminos());
    };
    TerminosServiceProvider.prototype.findByName = function (searchKey) {
        var key = searchKey.toUpperCase();
        return Promise.resolve(this.GetDatosParams(key));
    };
    TerminosServiceProvider.prototype.getFavorites = function () {
        return Promise.resolve(this.favorites);
    };
    TerminosServiceProvider.prototype.obtenerDatos = function () {
        return this.http.get(this.global.ApiUrl + 'terminos');
    };
    //GetDatosId(id) {
    //return this.http.get(this.apiUrl+'clientes/'+id);
    //}
    TerminosServiceProvider.prototype.GetDatosParams = function (searchKey) {
        var key = searchKey;
        var postData2 = {
            "NombreFantasia": key,
            "Direccion": ""
        };
        return this.http.post(this.global.ApiUrl + 'clientes/clientesbyfiltros', postData2, { headers: { 'Accept': 'application/json', 'Content-Type': 'application/json', } });
    };
    TerminosServiceProvider.prototype.SendComentarios = function (restaurant, usuarioID, comentario, rating1, rating2, rating3, rating4) {
        console.log("ID de comecio2:" + restaurant.Id);
        console.log("El usuaroID es :" + usuarioID);
        var postData2 = {
            "Id": 0,
            "IdCliente": restaurant.Id,
            "IdUsuario": usuarioID,
            "FechaAlta": "",
            "Comentario": comentario,
            "rating1": rating1,
            "rating2": rating2,
            "rating3": rating3,
            "rating4": rating4
        };
        console.log("va a mandar alto pos3");
        return this.http.post(this.global.ApiUrl + 'Clientes_Comentarios', postData2, { headers: { 'Accept': 'application/json', 'Content-Type': 'application/json', } });
    };
    TerminosServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__providers_global_global__["a" /* GlobalProvider */]])
    ], TerminosServiceProvider);
    return TerminosServiceProvider;
}());

//# sourceMappingURL=terminos-service.js.map

/***/ }),

/***/ 342:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HelpPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_faq_faq__ = __webpack_require__(343);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HelpPage = /** @class */ (function () {
    function HelpPage(navCtrl, serviceFaq) {
        this.navCtrl = navCtrl;
        this.serviceFaq = serviceFaq;
        this.GetFaq();
    }
    HelpPage.prototype.GetFaq = function () {
        var _this = this;
        this.serviceFaq.GetPreguntas_Frecuentes()
            .subscribe(function (data) {
            _this.pregFrec = data;
            console.log(data);
            console.log("La faq 1: " + _this.pregFrec[0].Pregunta);
        }, function (error) { console.log(error); });
    };
    HelpPage.prototype.toggleDetails = function (data) {
        if (data.showDetails) {
            data.showDetails = false;
        }
        else {
            data.showDetails = true;
        }
    };
    HelpPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-help',template:/*ion-inline-start:"D:\ionic\MundoCanjeApp\app\appDesa\src\pages\help\help.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>{{\'help\' | translate}}</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content class="bg-color">\n    <ion-list no-lines>\n        <!--\n        <ion-item [ngClass]="faqExpand1 ? \'active\' : \'\' " (click)="faqExpandToggle1()">\n            <h2 class="text-blue d-flex">{{\'what_is_neargo\' | translate}}\n                <ion-icon class="material-icons end text-theme">keyboard_arrow_down</ion-icon>\n            </h2>\n            <div class="text_box">\n                <p class="text-violet"> Primera plataforma y App de canje para usuarios, comercios y servicios. Mundo Canje es una opción rápida y eficiente de optimizar recursos en un mundo cada vez más conectado. </p>\n            </div>\n        </ion-item>\n        <ion-item [ngClass]="faqExpand2 ? \'active\' : \'\' " (click)="faqExpandToggle2()">\n            <h2 class="text-blue d-flex">{{\'can_l_list_my_store_on_neargo\' | translate}}\n                <ion-icon class="material-icons end text-theme">keyboard_arrow_down</ion-icon>\n            </h2>\n            <div class="text_box">\n                <p class="text-blue"> MundoCanje dispone de 3 planes para los socios. Plan Basico: Puede generar hasta 5 canjes mensuales. El plan intermedio posibilita la generación de hasta 15 canjes mensuales y el Plan Full posibilita canjes ilimitados.</p>\n            </div>\n        </ion-item>\n        <ion-item [ngClass]="faqExpand3 ? \'active\' : \'\' " (click)="faqExpandToggle3()">\n            <h2 class="text-blue d-flex">{{\'how_to_complain_about_services\' | translate}}\n                <ion-icon class="material-icons end text-theme">keyboard_arrow_down</ion-icon>\n            </h2>\n            <div class="text_box">\n                <p class="text-black"> Los canjes se generan entre los usuarios, previamente aceptado el importe estimado. Puede ser por el total, o realizando la diferencia del importe a la otra parte.</p>\n            </div>\n        </ion-item>\n        <ion-item [ngClass]="faqExpand4 ? \'active\' : \'\' " (click)="faqExpandToggle4()">\n            <h2 class="text-blue d-flex">{{\'wahat_is_service_charnge\' | translate}}\n                <ion-icon class="material-icons end text-theme">keyboard_arrow_down</ion-icon>\n            </h2>\n            <div class="text_box">\n                <p class="text-black"> La app cuenta con diversas categorías, como ser: Indumentaria, Moda, Gastronomía, Música, Cursos, etc. Todas las semanas se siguen agregando nuevas categorías.</p>\n            </div>\n        </ion-item>\n        <ion-item [ngClass]="faqExpand5 ? \'active\' : \'\' " (click)="faqExpandToggle5()">\n            <h2 class="text-blue d-flex">{{\'user_data_pol\' | translate}}\n                <ion-icon class="material-icons end text-theme">keyboard_arrow_down</ion-icon>\n            </h2>\n            <div class="text_box">\n                <p class="text-black"> Todos los datos de los usuarios son privados y no pueden ser visualizados al navegar la app. Solamente se envían al usuario al momento de realizar el canje, con previa aceptación del usuario.</p>\n            </div>\n        </ion-item>\n        <ion-item [ngClass]="faqExpand6 ? \'active\' : \'\' " (click)="faqExpandToggle6()">\n            <h2 class="text-blue d-flex">{{\'are_those_services_are_free\' | translate}}\n                <ion-icon class="material-icons end text-theme">keyboard_arrow_down</ion-icon>\n            </h2>\n            <div class="text_box ">\n                <p class="text-black"> MundoCanje no cobra por transacción o pago en linea. Solamente recibe créditos por los planes de socios.</p>\n            </div>\n        </ion-item>\n        <ion-item [ngClass]="faqExpand7 ? \'active\' : \'\' " (click)="faqExpandToggle7()">\n            <h2 class="text-blue d-flex">{{\'can_i_create_event\' | translate}}\n                <ion-icon class="material-icons end text-theme">keyboard_arrow_down</ion-icon>\n            </h2>\n            <div class="text_box">\n                <p class="text-black"> Los canjes se pueden crear en cualquier momento y al mismo tiempo son compartidos por toda la comunidad.</p>\n            </div>\n        </ion-item>\n        <ion-item [ngClass]="faqExpand8 ? \'active\' : \'\' " (click)="faqExpandToggle8()">\n            <h2 class="text-blue d-flex">{{\'i_want_to_create_an_offer\' | translate}}\n                <ion-icon class="material-icons end text-theme">keyboard_arrow_down</ion-icon>\n            </h2>\n            <div class="text_box">\n                <p class="text-black"> La diferencia de los canjes pueden abonarse en Efectivo al retirar el producto o por pagos eléctronicos mediante Mercadopago. El usuario deberá elegir el método de pago que más le convenga.</p>\n            </div>\n        </ion-item>\n-->\n\n        <ion-item *ngFor="let d of pregFrec; let i = index"  (click)="toggleDetails(d)" [ngClass]="{\'active\': d.showDetails }">\n            <h2 class="text-blue d-flex">{{d.Pregunta | translate}}\n                <ion-icon class="material-icons end text-theme">keyboard_arrow_down</ion-icon>\n            </h2>\n            <div class="text_box">\n                <p class="text-violet"> {{d.Respuesta}} </p>\n            </div>\n        </ion-item>\n    </ion-list>\n</ion-content>\n'/*ion-inline-end:"D:\ionic\MundoCanjeApp\app\appDesa\src\pages\help\help.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_faq_faq__["a" /* FaqProvider */]])
    ], HelpPage);
    return HelpPage;
}());

//# sourceMappingURL=help.js.map

/***/ }),

/***/ 343:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FaqProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_global_global__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FaqProvider = /** @class */ (function () {
    function FaqProvider(http, global) {
        this.http = http;
        this.global = global;
        this.favoriteCounter = 0;
        this.favorites = [];
        //console.log('Hello FaqProvider Provider');
    }
    FaqProvider.prototype.GetPreguntas_Frecuentes = function () {
        return this.http.get(this.global.ApiUrl + 'preguntas_frecuentes/');
    };
    FaqProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__providers_global_global__["a" /* GlobalProvider */]])
    ], FaqProvider);
    return FaqProvider;
}());

//# sourceMappingURL=faq.js.map

/***/ }),

/***/ 344:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__edit_offer_edit_offer__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__edit_event_edit_event__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__eventdetail_eventdetail__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__offerdetail_offerdetail__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__search_search__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__map_map__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__categories_categories__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__categoryresult_categoryresult__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__list_canjes_list_canjes__ = __webpack_require__(345);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__list_descuentos_list_descuentos__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__account_account__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__new_canje_new_canje__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_category_service_category_service__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__providers_product_service_product_service__ = __webpack_require__(30);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







//import { ChatsPage } from '../chats/chats';









var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, modalCtrl, navParams, serviceCat, serviceProd) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.navParams = navParams;
        this.serviceCat = serviceCat;
        this.serviceProd = serviceProd;
        this.near = "offers";
        this.tokenUsuario = this.navParams.get('tokenU');
        this.ObtenerCategorias();
        this.getHome();
        console.log("EL token del usuario es:" + this.tokenUsuario);
    }
    HomePage.prototype.edit_offer = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__edit_offer_edit_offer__["a" /* Edit_offerPage */]);
    };
    HomePage.prototype.NuevoCanje = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_13__new_canje_new_canje__["a" /* NewCanjePage */]);
    };
    HomePage.prototype.edit_event = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__edit_event_edit_event__["a" /* Edit_eventPage */]);
    };
    HomePage.prototype.offerdetail = function (IdProd) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__offerdetail_offerdetail__["a" /* OfferdetailPage */], { idProd: IdProd });
    };
    HomePage.prototype.eventdetail = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__eventdetail_eventdetail__["a" /* EventdetailPage */]);
    };
    HomePage.prototype.map = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__map_map__["a" /* MapPage */]);
    };
    HomePage.prototype.perfil = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_12__account_account__["a" /* AccountPage */]);
    };
    HomePage.prototype.VerCategorias = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__categories_categories__["a" /* CategoriesPage */]);
    };
    HomePage.prototype.VerMasCanjes = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_10__list_canjes_list_canjes__["a" /* ListCanjesPage */]);
    };
    HomePage.prototype.VerMasDescuentos = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_11__list_descuentos_list_descuentos__["a" /* ListDescuentosPage */]);
    };
    HomePage.prototype.category_result = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__categoryresult_categoryresult__["a" /* CategoryresultPage */]);
    };
    HomePage.prototype.search = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_6__search_search__["a" /* SearchPage */]);
        modal.present();
    };
    HomePage.prototype.ObtenerCategorias = function () {
        var _this = this;
        this.serviceCat.GetCategorias()
            .subscribe(function (data) {
            _this.categoriasLst = data;
            console.log("La categorìa 1: " + _this.categoriasLst[0].Nombre);
        }, function (error) { console.log(error); });
    };
    HomePage.prototype.getHome = function () {
        var _this = this;
        this.serviceProd.getHome()
            .subscribe(function (data) {
            _this.result = data; // get data in result variable
            _this.bannersLst = data.Banners;
            _this.canjesLst = data.Canjes;
            _this.descuentosLst = data.Descuentos;
        }, function (error) { console.log(error); });
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"D:\ionic\MundoCanjeApp\app\appDesa\src\pages\home\home.html"*/'<ion-header class="bg-color">\n\n    <ion-navbar>\n\n        <ion-title class="text-theme">  \n\n            <img src="assets/imgs/banner_mc.png" width="50%" height="50%" (click)="search()">\n\n            <span class="end">                \n\n                <img src="assets/imgs/ic_search-4.png" (click)="search()">\n\n                <img src="assets/imgs/ic_account-4.png" (click)="perfil()">\n\n\n\n            </span>\n\n        </ion-title>\n\n    </ion-navbar>\n\n    \n\n</ion-header>\n\n\n\n<ion-content class="bg-color">\n\n    <!--    \n\n    <image-gallery-layout-1>\n\n                <ion-grid card-background-page no-padding>\n\n                  <ion-row>\n\n                      <ion-col col-12 col-sm-4 col-md-6 col-lg-4 col-xl-3>\n\n                          <ion-card background-size style="background-image: url(\'assets/imgs/9-2.png\')">\n\n                          </ion-card>    \n\n                      </ion-col>\n\n                  </ion-row>			\n\n              </ion-grid>\n\n          </image-gallery-layout-1>\n\n        -->\n\n        <div class="banner"  *ngFor="let d of bannersLst; let i = index">\n\n            <img [src]="d.Imagen" class="bg">                \n\n       </div>\n\n       \n\n       <div class="categories">\n\n            <h2 (click)="VerCategorias()" class="text-gray d-flex">{{\'Categorias\' | translate}}<span  class="text-violet end">{{\'view_all\' | translate}}</span></h2>\n\n        </div>\n\n        <div class="fixed-bottom">\n\n                <ion-scroll scrollX="true" style="height: 108px;white-space: nowrap;">\n\n                    \n\n                    <ion-card *ngFor="let d of categoriasLst; let i = index" >\n\n                        <ion-item (click)="category_result()">\n\n                            <ion-avatar item-start>\n\n                                <img [src]="d.Imagen">\n\n                            </ion-avatar>\n\n                            <h2>   {{d.Nombre}} </h2>                                \n\n                            <h3 class="d-flex">\n\n                                <ion-badge item-end>{{d.CantProductos}}\n\n                                    <ion-icon name="md-star"></ion-icon>\n\n                                </ion-badge>\n\n                                <span>Productos</span>\n\n                            </h3>\n\n                        </ion-item>\n\n                    </ion-card>\n\n                    <!--<ion-card>\n\n                        <ion-item (click)="category_result()">\n\n                            <ion-avatar item-start>\n\n                                <img src="assets/imgs/3.png">\n\n                            </ion-avatar>\n\n                            <h2>Restaurants</h2>                                \n\n                            <h3 class="d-flex">\n\n                                <ion-badge item-end>{{\'15\' | translate}}\n\n                                    <ion-icon name="md-star"></ion-icon>\n\n                                </ion-badge>\n\n                                <span>Productos</span>\n\n                            </h3>\n\n                        </ion-item>\n\n                    </ion-card>\n\n                    <ion-card>\n\n                        <ion-item (click)="category_result()">\n\n                            <ion-avatar item-start>\n\n                                <img src="assets/imgs/6.png">\n\n                            </ion-avatar>\n\n                            <h2>Moda</h2>                                \n\n                            <h3 class="d-flex">\n\n                                <ion-badge item-end>{{\'150\' | translate}}\n\n                                    <ion-icon name="md-star"></ion-icon>\n\n                                </ion-badge>\n\n                                <span>Productos</span>\n\n                            </h3>\n\n                        </ion-item>\n\n                    </ion-card>\n\n                    <ion-card>\n\n                        <ion-item (click)="category_result()">\n\n                            <ion-avatar item-start>\n\n                                <img src="assets/imgs/8.png">\n\n                            </ion-avatar>\n\n                            <h2>Calzados</h2>                                \n\n                            <h3 class="d-flex">\n\n                                <ion-badge item-end>{{\'50\' | translate}}\n\n                                    <ion-icon name="md-star"></ion-icon>\n\n                                </ion-badge>\n\n                                <span>Productos</span>\n\n                            </h3>\n\n                        </ion-item>\n\n                    </ion-card>\n\n                    <ion-card>\n\n                        <ion-item (click)="category_result()">\n\n                            <ion-avatar item-start>\n\n                                <img src="assets/imgs/9.png">\n\n                            </ion-avatar>\n\n                            <h2>Decoración</h2>                                \n\n                            <h3 class="d-flex">\n\n                                <ion-badge item-end>{{\'10\' | translate}}\n\n                                    <ion-icon name="md-star"></ion-icon>\n\n                                </ion-badge>\n\n                                <span>Productos</span>\n\n                            </h3>\n\n                        </ion-item>\n\n                    </ion-card>\n\n                    <ion-card>\n\n                        <ion-item (click)="category_result()">\n\n                            <ion-avatar item-start>\n\n                                <img src="assets/imgs/10.png">\n\n                            </ion-avatar>\n\n                            <h2>Música</h2>                                \n\n                            <h3 class="d-flex">\n\n                                <ion-badge item-end>{{\'10\' | translate}}\n\n                                    <ion-icon name="md-star"></ion-icon>\n\n                                </ion-badge>\n\n                                <span>Productos</span>\n\n                            </h3>\n\n                        </ion-item>\n\n                    </ion-card>-->\n\n                    \n\n                </ion-scroll>\n\n            </div>\n\n\n\n            <div class="categories">\n\n                <h2 class="text-gray d-flex">{{\'Últimos canjes\' | translate}}</h2>\n\n            </div>\n\n            <div>\n\n                <ion-list class="offers" >\n\n                         <!--   <ion-row >-->\n\n                             <div *ngFor="let d of canjesLst; let i = index; let odd=odd;"> \n\n                                    <div class="row" *ngIf="i % 2 === 0">\n\n                                        <ion-col col-6 col-sm-6 col-md-6 col-lg-6 >\n\n                                            <ion-item (click)="offerdetail(d.Id)" class="itemGrilla"  >\n\n                                                    <img [src]="canjesLst[i].Imagen" class="bg">\n\n                                                    <ion-badge item-end>\n\n                                                        <ion-icon name="md-stopwatch"></ion-icon>\n\n                                                        {{canjesLst[i].Ult_Dias}} Días\n\n                                                    </ion-badge>\n\n                                                    <div class="text">\n\n                                                        <h2 class="H2Grilla">{{canjesLst[i].Nombre}}</h2>\n\n                                                    </div>\n\n                                                </ion-item>\n\n                                        </ion-col>\n\n                                        <ion-col col-6 col-sm-6 col-md-6 col-lg-6 >\n\n                                            <ion-item (click)="offerdetail(canjesLst[i+1].Id)" class="itemGrilla"  >\n\n                                                <img [src]="canjesLst[i+1].Imagen" class="bg">\n\n                                                <ion-badge item-end>\n\n                                                    <ion-icon name="md-stopwatch"></ion-icon>\n\n                                                    {{canjesLst[i+1].Ult_Dias}} Días\n\n                                                </ion-badge>\n\n                                                <div class="text">\n\n                                                    <h2 class="H2Grilla">{{canjesLst[i+1].Nombre}}</h2>\n\n                                                </div>\n\n                                            </ion-item>\n\n                                        </ion-col>\n\n                                    </div>\n\n                             </div>\n\n                                    \n\n                            <!--    </ion-row >	-->\n\n\n\n\n\n                                    <!--<ion-col col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6>\n\n                                        <ion-item (click)="offerdetail()" class="itemGrilla" >\n\n                                                <img src="assets/imgs/10.png" class="bg">\n\n                                                <ion-badge item-end>\n\n                                                    <ion-icon name="md-stopwatch"></ion-icon>\n\n                                                    6 Dias\n\n                                                </ion-badge>\n\n                                                <div class="text">\n\n                                                    <h2 class="H2Grilla">10 Clases de Guitarra acústica </h2>\n\n                                                \n\n                                                    \n\n                                                </div>\n\n                                            </ion-item>\n\n                                    </ion-col>\n\n                                </ion-row>			\n\n                            \n\n                                <ion-row>\n\n                                    <ion-col col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6>\n\n                                        <ion-item (click)="offerdetail()" class="itemGrilla" >\n\n                                            <img src="assets/imgs/3.png" class="bg">\n\n                                            <ion-badge item-end>\n\n                                                <ion-icon name="md-stopwatch"></ion-icon>\n\n                                                5 Hrs\n\n                                            </ion-badge>\n\n                                            <div class="text">\n\n                                                <h2 class="H2Grilla">Desayuno completo para 2 personas</h2>\n\n                                              \n\n                                            </div>\n\n                                        </ion-item>\n\n                                    </ion-col>\n\n                                    <ion-col col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6>\n\n                                        <ion-item (click)="offerdetail()" class="itemGrilla" >\n\n                                            <img src="assets/imgs/20.jpg" class="bg">\n\n                                            <ion-badge item-end>\n\n                                                <ion-icon name="md-stopwatch"></ion-icon>\n\n                                                2 Dias\n\n                                            </ion-badge>\n\n                                            <div class="text">\n\n                                                <h2 class="H2Grilla">Servicios de Gasista matriculado</h2>\n\n                                              \n\n                                               \n\n                                            </div>\n\n                                        </ion-item>\n\n                                    </ion-col>-->\n\n                        	\n\n                </ion-list>\n\n            </div>\n\n\n\n            \n\n\n\n            <div class="categories">\n\n                    <h2 class="text-gray d-flex">{{\'Canjes Destacados\' | translate}}</h2>\n\n                </div>\n\n            <div>\n\n                <ion-list class="offers"  *ngFor="let d of canjesLst; let i = index">\n\n                    <ion-item (click)="offerdetail(d.Id)">\n\n                        <img [src]="d.Imagen" class="bg">\n\n                        <ion-badge item-end>\n\n                            <ion-icon name="md-stopwatch"></ion-icon>\n\n                            {{d.Ult_Dias}} Días\n\n                        </ion-badge>                        \n\n                        <div class="text">\n\n                                <h2>{{d.Nombre}}</h2>\n\n                                <p class="d-flex">\n\n                                    <span class="text-theme">{{d.Descripcion}}</span>\n\n                                    <span class=""> | {{d.Categoria}}</span>\n\n                                    <span class="end">$ {{d.Precio}}</span>\n\n                                </p>                  \n\n                            </div>\n\n                    </ion-item>\n\n                </ion-list>\n\n        \n\n        \n\n            </div>\n\n            <ion-list no-lines padding-left padding-right class="listButton" >\n\n                <div class="socile d-flex">\n\n                    <button ion-button icon-start block class="btn text-white" round (click)="VerMasCanjes()">\n\n                        <ion-icon class="material-icons text-white">add</ion-icon>\n\n                        Ver Más Canjes\n\n                    </button>\n\n                </div>\n\n            </ion-list>\n\n\n\n            <div class="categories">\n\n                    <h2 class="text-gray d-flex">{{\'Cupones\' | translate}}</h2>\n\n                </div>\n\n            <div>\n\n                <ion-list class="offers"  *ngFor="let d of descuentosLst; let i = index">\n\n                    <ion-item (click)="offerdetail()">\n\n                        <img [src]="d.Imagen" class="bg">\n\n                        <ion-badge item-end>\n\n                            <ion-icon name="md-stopwatch"></ion-icon>\n\n                            {{d.Ult_Dias}} Días\n\n                        </ion-badge>\n\n                        <div class="text">\n\n                            <h2>{{d.Nombre}}</h2>\n\n                            <p class="d-flex text-theme">\n\n                                {{d.Descripcion}}\n\n                            </p>\n\n                        </div>\n\n                    </ion-item>\n\n                   \n\n                </ion-list>\n\n        \n\n        \n\n            </div>\n\n            <ion-list no-lines padding-left padding-right class="listButton">\n\n                <div class="socile d-flex">\n\n                    <button ion-button icon-start block class="btn text-white" round (click)="VerMasDescuentos()">\n\n                        <ion-icon class="material-icons text-white">add</ion-icon>\n\n                        Ver Más Cupones\n\n                    </button>\n\n                </div>\n\n            </ion-list>\n\n</ion-content>\n\n<ion-footer no-border class="d-flex">\n\n    <ion-icon class="material-icons text-white bg-theme end" (click)="NuevoCanje()">add</ion-icon>\n\n</ion-footer>\n\n'/*ion-inline-end:"D:\ionic\MundoCanjeApp\app\appDesa\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_14__providers_category_service_category_service__["a" /* CategoryServiceProvider */], __WEBPACK_IMPORTED_MODULE_15__providers_product_service_product_service__["a" /* ProductServiceProvider */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 345:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListCanjesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__edit_offer_edit_offer__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__edit_event_edit_event__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__eventdetail_eventdetail__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__offerdetail_offerdetail__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__search_search__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__chats_chats__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__map_map__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__account_account__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_product_service_product_service__ = __webpack_require__(30);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var ListCanjesPage = /** @class */ (function () {
    function ListCanjesPage(navCtrl, modalCtrl, prodServ) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.prodServ = prodServ;
        this.ObtenerCanjes();
    }
    ListCanjesPage.prototype.ObtenerCanjes = function () {
        var _this = this;
        this.prodServ.getProductByIdTipo("1")
            .subscribe(function (data) {
            _this.listCanjes = data;
            console.log("El canje 1: " + _this.listCanjes[0].Nombre);
        }, function (error) { console.log(error); });
    };
    ListCanjesPage.prototype.edit_offer = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__edit_offer_edit_offer__["a" /* Edit_offerPage */]);
    };
    ListCanjesPage.prototype.edit_event = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__edit_event_edit_event__["a" /* Edit_eventPage */]);
    };
    ListCanjesPage.prototype.offerdetail = function (IdProd) {
        console.log("El producto id es: " + IdProd);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__offerdetail_offerdetail__["a" /* OfferdetailPage */], { idProd: IdProd });
    };
    ListCanjesPage.prototype.eventdetail = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__eventdetail_eventdetail__["a" /* EventdetailPage */]);
    };
    ListCanjesPage.prototype.map = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__map_map__["a" /* MapPage */]);
    };
    ListCanjesPage.prototype.map22 = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__chats_chats__["a" /* ChatsPage */]);
    };
    ListCanjesPage.prototype.perfil = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__account_account__["a" /* AccountPage */]);
    };
    ListCanjesPage.prototype.search = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_6__search_search__["a" /* SearchPage */]);
        modal.present();
    };
    ListCanjesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-list-canjes',template:/*ion-inline-start:"D:\ionic\MundoCanjeApp\app\appDesa\src\pages\list-canjes\list-canjes.html"*/'<ion-header class="bg-color">\n        <ion-navbar>\n                <ion-title class="text-theme">  \n                    <img src="assets/imgs/banner_mc.png" width="50%" height="50%" (click)="search()">\n                    <span class="end">                \n                        <img src="assets/imgs/ic_search-4.png" (click)="search()">\n                        <img src="assets/imgs/ic_account-4.png" (click)="perfil()">\n        \n                    </span>\n                </ion-title>\n            </ion-navbar>  \n  </ion-header>\n  \n  <ion-content class="bg-color">\n    <div>\n        <ion-list  class="offers" *ngFor="let d of listCanjes; let i = index">\n            <ion-item (click)="offerdetail(d.Id)">\n                <img [src]="d.Imagen" class="bg">\n                <ion-badge item-end>\n                    <ion-icon name="md-stopwatch"></ion-icon>\n                    {{d.Ult_Dias}}  Días\n                </ion-badge>\n                <div class="text">\n                    <h2>{{d.Nombre}}</h2>\n                    <p class="d-flex">\n                      <span class="text-theme">{{d.Descripcion}}</span>\n                      <span class=""> | {{d.Categoria}}</span>\n                      <span class="end">$ {{d.Importe}}</span>\n                    </p>                  \n                </div>\n            </ion-item>\n\n          <!--\n            <ion-item (click)="offerdetail()">\n                <img src="assets/imgs/12.jpg" class="bg">\n                <ion-badge item-end>\n                    <ion-icon name="md-stopwatch"></ion-icon>\n                    2 Días\n                </ion-badge>\n                <div class="text">\n                    <h2>1 Parrillada completa para 4 personas</h2>\n                    <p class="d-flex text-theme">\n                        5 {{\'people_send\' | translate}}\n                    </p>\n                </div>\n            </ion-item>\n            <ion-item (click)="offerdetail()">\n                <img src="assets/imgs/13.jpg" class="bg">\n                <ion-badge item-end>\n                    <ion-icon name="md-stopwatch"></ion-icon>\n                    6 Días\n                </ion-badge>\n                <div class="text">\n                    <h2>1 Docena de empanadas de carne </h2>\n                    <p class="d-flex text-theme">\n                        10 {{\'people_send\' | translate}}\n                    </p>\n                </div>\n            </ion-item>\n            <ion-item (click)="offerdetail()">\n                <img src="assets/imgs/14.jpg" class="bg">\n                <ion-badge item-end>\n                    <ion-icon name="md-stopwatch"></ion-icon>\n                    5 Hrs\n                </ion-badge>\n                <div class="text">\n                    <h2>Menú del día completo para dos personas</h2>\n                    <p class="d-flex text-theme">\n                        1 {{\'people_send\' | translate}}\n                    </p>\n                </div>\n            </ion-item>\n  \n            <ion-item (click)="offerdetail()">\n                <img src="assets/imgs/16.jpg" class="bg">\n                <ion-badge item-end>\n                    <ion-icon name="md-stopwatch"></ion-icon>\n                    2 Días\n                </ion-badge>\n                <div class="text">\n                    <h2>12 Alfajores Cachafaz dulce de leche</h2>\n                    <p class="d-flex text-theme">\n                        2 {{\'people_send\' | translate}}\n                    </p>\n                </div>\n            </ion-item>\n            <ion-item (click)="offerdetail()">\n                <img src="assets/imgs/17.jpg" class="bg">\n                <ion-badge item-end>\n                    <ion-icon name="md-stopwatch"></ion-icon>\n                    6 Días\n                </ion-badge>\n                <div class="text">\n                    <h2>Choripan + gaseosa para llevar </h2>\n                    <p class="d-flex text-theme">\n                        3 {{\'people_send\' | translate}}\n                    </p>\n                </div>\n            </ion-item>\n            <ion-item (click)="offerdetail()">\n                <img src="assets/imgs/18.jpg" class="bg">\n                <ion-badge item-end>\n                    <ion-icon name="md-stopwatch"></ion-icon>\n                    5 Hrs\n                </ion-badge>\n                <div class="text">\n                    <h2>24 Facturas mixtas</h2>\n                    <p class="d-flex text-theme">\n                        4 {{\'people_send\' | translate}}\n                    </p>\n                </div>\n            </ion-item>\n\n            -->\n\n        </ion-list>\n  \n    </div>\n  </ion-content>\n  <ion-footer no-border class="d-flex">\n    <ion-icon class="material-icons text-white bg-theme end" *ngIf="near == \'offers\'" (click)="edit_offer()">add</ion-icon>\n    <ion-icon class="material-icons text-white bg-theme end" *ngIf="near == \'events\'" (click)="edit_event()">add</ion-icon>\n  </ion-footer>\n  '/*ion-inline-end:"D:\ionic\MundoCanjeApp\app\appDesa\src\pages\list-canjes\list-canjes.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */], __WEBPACK_IMPORTED_MODULE_10__providers_product_service_product_service__["a" /* ProductServiceProvider */]])
    ], ListCanjesPage);
    return ListCanjesPage;
}());

//# sourceMappingURL=list-canjes.js.map

/***/ }),

/***/ 346:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListDescuentosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__edit_offer_edit_offer__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__edit_event_edit_event__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__eventdetail_eventdetail__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__offerdetail_offerdetail__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__search_search__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__chats_chats__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__map_map__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__account_account__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_product_service_product_service__ = __webpack_require__(30);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var ListDescuentosPage = /** @class */ (function () {
    function ListDescuentosPage(navCtrl, modalCtrl, prodServ) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.prodServ = prodServ;
        this.ObtenerDescuentos();
    }
    ListDescuentosPage.prototype.ObtenerDescuentos = function () {
        var _this = this;
        this.prodServ.getProductByIdTipo("2")
            .subscribe(function (data) {
            _this.listDescuentos = data;
            console.log("El canje 1: " + _this.listDescuentos[0].Nombre);
        }, function (error) { console.log(error); });
    };
    ListDescuentosPage.prototype.edit_offer = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__edit_offer_edit_offer__["a" /* Edit_offerPage */]);
    };
    ListDescuentosPage.prototype.edit_event = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__edit_event_edit_event__["a" /* Edit_eventPage */]);
    };
    ListDescuentosPage.prototype.offerdetail = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__offerdetail_offerdetail__["a" /* OfferdetailPage */]);
    };
    ListDescuentosPage.prototype.eventdetail = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__eventdetail_eventdetail__["a" /* EventdetailPage */]);
    };
    ListDescuentosPage.prototype.map = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__map_map__["a" /* MapPage */]);
    };
    ListDescuentosPage.prototype.map22 = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__chats_chats__["a" /* ChatsPage */]);
    };
    ListDescuentosPage.prototype.perfil = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__account_account__["a" /* AccountPage */]);
    };
    ListDescuentosPage.prototype.search = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_6__search_search__["a" /* SearchPage */]);
        modal.present();
    };
    ListDescuentosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-list-descuentos',template:/*ion-inline-start:"D:\ionic\MundoCanjeApp\app\appDesa\src\pages\list-descuentos\list-descuentos.html"*/'<ion-header class="bg-color">\n    <ion-navbar>\n        <ion-title class="text-theme">{{\'app_title\' | translate}}\n            <span class="end">\n                \n                <img src="assets/imgs/ic_search-4.png" (click)="search()">\n                <img src="assets/imgs/ic_account-4.png" (click)="perfil()">\n            </span>\n        </ion-title>\n    </ion-navbar>  \n  </ion-header>\n  \n  <ion-content class="bg-color">\n    <div>\n        <ion-list  class="offers" *ngFor="let d of listDescuentos; let i = index">\n            <ion-item (click)="offerdetail()">\n                <img [src]="d.Imagen" class="bg">\n                <ion-badge item-end>\n                    <ion-icon name="md-stopwatch"></ion-icon>\n                    {{d.Ult_Dias}} Días\n                </ion-badge>\n                <div class="text">\n                    <h2>{{d.Nombre}}</h2>\n                    <p class="d-flex text-theme">\n                        {{d.Descripcion}}\n                    </p>\n                </div>\n            </ion-item>\n\n        </ion-list>\n  \n    </div>\n  </ion-content>\n  <ion-footer no-border class="d-flex">\n    <ion-icon class="material-icons text-white bg-theme end" *ngIf="near == \'offers\'" (click)="edit_offer()">add</ion-icon>\n    <ion-icon class="material-icons text-white bg-theme end" *ngIf="near == \'events\'" (click)="edit_event()">add</ion-icon>\n  </ion-footer>\n  '/*ion-inline-end:"D:\ionic\MundoCanjeApp\app\appDesa\src\pages\list-descuentos\list-descuentos.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */], __WEBPACK_IMPORTED_MODULE_10__providers_product_service_product_service__["a" /* ProductServiceProvider */]])
    ], ListDescuentosPage);
    return ListDescuentosPage;
}());

//# sourceMappingURL=list-descuentos.js.map

/***/ }),

/***/ 38:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__categories_categories__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__categoryresult_categoryresult__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_category_service_category_service__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_product_service_product_service__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__offerdetail_offerdetail__ = __webpack_require__(52);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var SearchPage = /** @class */ (function () {
    function SearchPage(navCtrl, viewCtrl, serviceCat, prodServ) {
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
        this.serviceCat = serviceCat;
        this.prodServ = prodServ;
        this.ObtenerCategorias();
    }
    SearchPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    SearchPage.prototype.VerCategorias = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__categories_categories__["a" /* CategoriesPage */]);
    };
    SearchPage.prototype.category_result = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__categoryresult_categoryresult__["a" /* CategoryresultPage */]);
    };
    SearchPage.prototype.getItems = function (busqueda) {
        var val = busqueda.target.value;
        /*
        if (q.trim() == '') {
            return;
        }
        */
        this.BuscarCanjes(val);
    };
    SearchPage.prototype.BuscarCanjes = function (nombreCanje) {
        var _this = this;
        this.prodServ.getProductByName(nombreCanje)
            .subscribe(function (data) {
            _this.listBusqueda = data;
        }, function (error) { console.log(error); });
    };
    SearchPage.prototype.offerdetail = function (IdProd) {
        console.log("El producto id es: " + IdProd);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__offerdetail_offerdetail__["a" /* OfferdetailPage */], { idProd: IdProd });
    };
    SearchPage.prototype.ObtenerCategorias = function () {
        var _this = this;
        this.serviceCat.GetCategorias()
            .subscribe(function (data) {
            _this.categoriasLst = data;
        }, function (error) { console.log(error); });
    };
    SearchPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-search',template:/*ion-inline-start:"D:\ionic\MundoCanjeApp\app\appDesa\src\pages\search\search.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>\n            <ion-icon name="md-close" class="text-theme" (click)="dismiss()"></ion-icon>\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content class="bg-color">\n    <div class="form">\n        <ion-searchbar (ionInput)="getItems($event)" placeholder="{{\'what_are_you_searching_for\' | translate}}" class="text-white"></ion-searchbar>\n        <!--\n        <ion-list no-lines>\n            <ion-item *ngFor="let item of listBusqueda">\n                {{ item.Nombre }}\n            </ion-item>\n        </ion-list>\n        -->\n        <ion-list  class="offers" *ngFor="let d of listBusqueda; let i = index">\n                <ion-item (click)="offerdetail(d.Id)">\n                    <img [src]="d.Imagen" class="bg">\n                    <ion-badge item-end>\n                        <ion-icon name="md-stopwatch"></ion-icon>\n                        {{d.Ult_Dias}}  Días\n                    </ion-badge>\n                    <div class="text">\n                        <h2>{{d.Nombre}}</h2>\n                        <p class="d-flex">\n                          <span class="text-theme">{{d.Descripcion}}</span>\n                          <span class="end">$ {{d.Importe}}</span>\n                        </p>                  \n                    </div>\n                </ion-item>\n        </ion-list>\n<!--\n        <div class="recent-serch">\n            <h2 class="text-gray">{{\'recent_earches\' | translate}}</h2>\n            <p class="text-white">Chinese Restaurant</p>\n            <p class="text-white">Formal Clothes</p>\n            <p class="text-white">Baked Cake</p>\n        </div>\n    -->\n    </div>\n    <div class="categories">\n        <h2 (click)="VerCategorias()" class="text-gray d-flex">{{\'choose_categories\' | translate}}<span class="text-theme end">{{\'view_all\' | translate}}</span></h2>\n        <ion-list no-lines>\n\n            <ion-item *ngFor="let d of categoriasLst; let i = index" (click)="category_result()">\n                    <img [src]="d.Imagen" class="bg">\n                    <div text-center class="text">\n                        <h2 class="text-white">{{d.Nombre | translate}}</h2>\n                        <p class="text-gray">{{d.Id}} Canjes</p>\n                    </div>\n                </ion-item>\n            <!--\n            <ion-item (click)="category_result()">\n                <img src="assets/imgs/ca1.png" class="bg">\n                <div text-center class="text">\n                    <h2 class="text-white">{{\'food_restaurants\' | translate}}</h2>\n                    <p class="text-gray">150 Canjes</p>\n                </div>\n            </ion-item>\n            <ion-item (click)="category_result()">\n                <img src="assets/imgs/ca2.png" class="bg">\n                <div text-center class="text">\n                    <h2 class="text-white"> {{\'Moda\' | translate}}</h2>\n                    <p class="text-gray">198 Canjes</p>\n                </div>\n            </ion-item>\n            <ion-item (click)="category_result()">\n                <img src="assets/imgs/ca4.png" class="bg">\n                <div text-center class="text">\n                    <h2 class="text-white">{{\'dairy_bakery\' | translate}}</h2>\n                    <p class="text-gray">110 Canjes</p>\n                </div>\n            </ion-item>\n            <ion-item (click)="category_result()">\n                <img src="assets/imgs/ca3.png" class="bg">\n                <div text-center class="text">\n                    <h2 class="text-white">{{\'fashion_store\' | translate}}</h2>\n                    <p class="text-gray">209 Canjes</p>\n                </div>\n            </ion-item>\n            <ion-item (click)="category_result()">\n                <img src="assets/imgs/ca5.png" class="bg">\n                <div text-center class="text">\n                    <h2 class="text-white">{{\'salon_spa\' | translate}}</h2>\n                    <p class="text-gray">111 Canjes</p>\n                </div>\n            </ion-item>\n            -->\n        </ion-list>\n    </div>\n</ion-content>\n'/*ion-inline-end:"D:\ionic\MundoCanjeApp\app\appDesa\src\pages\search\search.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */], __WEBPACK_IMPORTED_MODULE_4__providers_category_service_category_service__["a" /* CategoryServiceProvider */], __WEBPACK_IMPORTED_MODULE_5__providers_product_service_product_service__["a" /* ProductServiceProvider */]])
    ], SearchPage);
    return SearchPage;
}());

//# sourceMappingURL=search.js.map

/***/ }),

/***/ 390:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_global_global__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NotificationServiceProvider = /** @class */ (function () {
    function NotificationServiceProvider(http, global) {
        this.http = http;
        this.global = global;
        //console.log('Hello TerminosServiceProvider Provider');
    }
    NotificationServiceProvider.prototype.SendNotificationPush = function (titulo, descripcion) {
        var postData2 = {
            "Titulo": titulo,
            "Descripcion": descripcion
        };
        return this.http.post(this.global.ApiUrl + 'NotificationPush', postData2, { headers: { 'Accept': 'application/json', 'Content-Type': 'application/json', } });
    };
    NotificationServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__providers_global_global__["a" /* GlobalProvider */]])
    ], NotificationServiceProvider);
    return NotificationServiceProvider;
}());

//# sourceMappingURL=notification-service.js.map

/***/ }),

/***/ 391:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(392);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(396);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 396:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export createTranslateLoader */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(720);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__ = __webpack_require__(388);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ngx_translate_http_loader__ = __webpack_require__(721);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_account_account__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_addreview_addreview__ = __webpack_require__(723);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_chats_chats__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_chatting_chatting__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_condition_condition__ = __webpack_require__(340);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_edit_offer_edit_offer__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_edit_event_edit_event__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_eventdetail_eventdetail__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_help_help__ = __webpack_require__(342);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_home_home__ = __webpack_require__(344);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_map_map__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_offerdetail_offerdetail__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_password_password__ = __webpack_require__(339);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_profile_profile__ = __webpack_require__(336);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_register_register__ = __webpack_require__(337);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_review_review__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_search_search__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_signin_signin__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_tabs_tabs__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_categories_categories__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_categoryresult_categoryresult__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_canjes_canjes__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_new_canje_new_canje__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_match_match__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__pages_newchatting_newchatting__ = __webpack_require__(724);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__pages_list_canjes_list_canjes__ = __webpack_require__(345);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__pages_list_descuentos_list_descuentos__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__ionic_native_status_bar__ = __webpack_require__(386);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__ionic_native_splash_screen__ = __webpack_require__(387);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__providers_terminos_service_terminos_service__ = __webpack_require__(341);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__providers_faq_faq__ = __webpack_require__(343);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__providers_category_service_category_service__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__providers_autentication_service_autentication_service__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__providers_user_service_user_service__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__ionic_native_camera__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42_firebase__ = __webpack_require__(725);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_42_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__providers_global_global__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__providers_product_service_product_service__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__providers_global_product_global_product__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__providers_chat_service_chat_service__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__ionic_native_google_maps__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__ionic_native_geolocation_ngx__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49__providers_ciudades_service_ciudades_service__ = __webpack_require__(338);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50__providers_pedidos_service_pedidos_service__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_51__providers_global_pedido_global_pedido__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_52__providers_chat_detalle_service_chat_detalle_service__ = __webpack_require__(335);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_53__ionic_native_push__ = __webpack_require__(389);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_54__providers_notification_service_notification_service__ = __webpack_require__(390);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










































function createTranslateLoader(http) {
    return new __WEBPACK_IMPORTED_MODULE_6__ngx_translate_http_loader__["a" /* TranslateHttpLoader */](http, './assets/i18n/', '.json');
}













__WEBPACK_IMPORTED_MODULE_42_firebase__["initializeApp"]({
    apiKey: "AIzaSyB1V9Scjuy2FzVELWlycpjYoUxnqoqrP2w",
    authDomain: "mundo-canje-app.firebaseapp.com",
    databaseURL: "https://mundo-canje-app.firebaseio.com",
    projectId: "mundo-canje-app",
    storageBucket: "mundo-canje-app.appspot.com",
    messagingSenderId: "943473640737",
    appId: "1:943473640737:web:522571b9430f56fcb22a60"
});
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_account_account__["a" /* AccountPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_addreview_addreview__["a" /* AddreviewPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_chats_chats__["a" /* ChatsPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_chatting_chatting__["a" /* ChattingPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_condition_condition__["a" /* ConditionPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_edit_offer_edit_offer__["a" /* Edit_offerPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_edit_event_edit_event__["a" /* Edit_eventPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_eventdetail_eventdetail__["a" /* EventdetailPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_help_help__["a" /* HelpPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_map_map__["a" /* MapPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_offerdetail_offerdetail__["a" /* OfferdetailPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_password_password__["a" /* PasswordPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_review_review__["a" /* ReviewPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_search_search__["a" /* SearchPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_signin_signin__["a" /* SigninPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_categories_categories__["a" /* CategoriesPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_categoryresult_categoryresult__["a" /* CategoryresultPage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_canjes_canjes__["a" /* CanjesPage */],
                __WEBPACK_IMPORTED_MODULE_29__pages_new_canje_new_canje__["a" /* NewCanjePage */],
                __WEBPACK_IMPORTED_MODULE_30__pages_match_match__["a" /* MatchPage */],
                __WEBPACK_IMPORTED_MODULE_31__pages_newchatting_newchatting__["a" /* NewchattingPage */],
                __WEBPACK_IMPORTED_MODULE_32__pages_list_canjes_list_canjes__["a" /* ListCanjesPage */],
                __WEBPACK_IMPORTED_MODULE_33__pages_list_descuentos_list_descuentos__["a" /* ListDescuentosPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/modal-notification/modal-notification.module#ModalNotificationPageModule', name: 'ModalNotificationPage', segment: 'modal-notification', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__["b" /* TranslateModule */].forRoot({
                    loader: {
                        provide: __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__["a" /* TranslateLoader */],
                        useFactory: createTranslateLoader,
                        deps: [__WEBPACK_IMPORTED_MODULE_4__angular_common_http__["a" /* HttpClient */]]
                    }
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_account_account__["a" /* AccountPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_addreview_addreview__["a" /* AddreviewPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_chats_chats__["a" /* ChatsPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_chatting_chatting__["a" /* ChattingPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_condition_condition__["a" /* ConditionPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_edit_offer_edit_offer__["a" /* Edit_offerPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_edit_event_edit_event__["a" /* Edit_eventPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_eventdetail_eventdetail__["a" /* EventdetailPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_help_help__["a" /* HelpPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_map_map__["a" /* MapPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_offerdetail_offerdetail__["a" /* OfferdetailPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_password_password__["a" /* PasswordPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_review_review__["a" /* ReviewPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_search_search__["a" /* SearchPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_signin_signin__["a" /* SigninPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_categories_categories__["a" /* CategoriesPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_categoryresult_categoryresult__["a" /* CategoryresultPage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_canjes_canjes__["a" /* CanjesPage */],
                __WEBPACK_IMPORTED_MODULE_29__pages_new_canje_new_canje__["a" /* NewCanjePage */],
                __WEBPACK_IMPORTED_MODULE_30__pages_match_match__["a" /* MatchPage */],
                __WEBPACK_IMPORTED_MODULE_31__pages_newchatting_newchatting__["a" /* NewchattingPage */],
                __WEBPACK_IMPORTED_MODULE_32__pages_list_canjes_list_canjes__["a" /* ListCanjesPage */],
                __WEBPACK_IMPORTED_MODULE_33__pages_list_descuentos_list_descuentos__["a" /* ListDescuentosPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_34__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_35__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_36__providers_terminos_service_terminos_service__["a" /* TerminosServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_37__providers_faq_faq__["a" /* FaqProvider */],
                __WEBPACK_IMPORTED_MODULE_38__providers_category_service_category_service__["a" /* CategoryServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_39__providers_autentication_service_autentication_service__["a" /* AutenticationServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_40__providers_user_service_user_service__["a" /* UserServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_43__providers_global_global__["a" /* GlobalProvider */],
                __WEBPACK_IMPORTED_MODULE_44__providers_product_service_product_service__["a" /* ProductServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_45__providers_global_product_global_product__["a" /* GlobalProductProvider */],
                __WEBPACK_IMPORTED_MODULE_46__providers_chat_service_chat_service__["a" /* ChatServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_47__ionic_native_google_maps__["a" /* GoogleMaps */],
                __WEBPACK_IMPORTED_MODULE_48__ionic_native_geolocation_ngx__["a" /* Geolocation */],
                __WEBPACK_IMPORTED_MODULE_49__providers_ciudades_service_ciudades_service__["a" /* CiudadesServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_50__providers_pedidos_service_pedidos_service__["a" /* PedidosServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_51__providers_global_pedido_global_pedido__["a" /* GlobalPedidoProvider */],
                __WEBPACK_IMPORTED_MODULE_41__ionic_native_camera__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_52__providers_chat_detalle_service_chat_detalle_service__["a" /* ChatDetalleServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_53__ionic_native_push__["a" /* Push */],
                __WEBPACK_IMPORTED_MODULE_54__providers_notification_service_notification_service__["a" /* NotificationServiceProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__search_search__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_product_service_product_service__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_geolocation_ngx__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_google_maps__ = __webpack_require__(163);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//import {  GoogleMaps,  GoogleMap,  GoogleMapsEvent,  GoogleMapOptions} from '@ionic-native/google-maps';




var MapPage = /** @class */ (function () {
    function MapPage(navCtrl, serviceProd, modalCtrl, geolocation) {
        this.navCtrl = navCtrl;
        this.serviceProd = serviceProd;
        this.modalCtrl = modalCtrl;
        this.geolocation = geolocation;
        //this.loadMap();
        this.ObtenerUbicacion();
    }
    MapPage.prototype.ionViewDidLoad = function () {
        //this.map=this.abrirMAPA();
    };
    MapPage.prototype.search = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__search_search__["a" /* SearchPage */]);
        modal.present();
    };
    MapPage.prototype.ObtenerUbicacion = function () {
        var options = {
            enableHighAccuracy: true,
            timeout: 5000,
            maximumAge: 0
        };
        navigator.geolocation.getCurrentPosition(this.onSuccess, this.onError);
        //this.GetUbicacionesCanjes2();
    };
    MapPage.prototype.onError = function (error) {
        alert("Error al obtener la posicion");
    };
    MapPage.prototype.onSuccess = function (position) {
        console.log("LAT: " + position.coords.latitude);
        console.log("LONG: " + position.coords.longitude);
        var mapOptions = {
            camera: {
                target: {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                },
                zoom: 12,
                tilt: 30
            }
        };
        var map2 = __WEBPACK_IMPORTED_MODULE_5__ionic_native_google_maps__["a" /* GoogleMaps */].create('map_canvas', mapOptions);
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
        var marker;
        var points = [
            { lat: -34.619334, lng: -58.451590, title: "1" },
            { lat: -34.623878, lng: -58.424973, title: "2" },
            { lat: -34.631167, lng: -58.395548, title: "3" },
            { lat: -34.612941, lng: -58.371614, title: "4" }
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
        points.forEach(function (item) {
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
    };
    MapPage.prototype.GetUbicacionesCanjes2 = function () {
        var mapOptions = {
            camera: {
                zoom: 20,
                tilt: 30
            }
        };
        var map2 = __WEBPACK_IMPORTED_MODULE_5__ionic_native_google_maps__["a" /* GoogleMaps */].create('map_canvas', mapOptions);
        var marker;
        var points = [
            { lat: -34.619334, lng: -58.451590, title: "1" },
            { lat: -34.623878, lng: -58.424973, title: "2" },
            { lat: -34.631167, lng: -58.395548, title: "3" },
            { lat: -34.612941, lng: -58.371614, title: "4" }
        ];
        points.forEach(function (item) {
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
    };
    MapPage.prototype.GetUbicacionesCanjes = function () {
        var _this = this;
        this.serviceProd.getProductByIdTipo("1")
            .subscribe(function (data) {
            _this.canjesLst = data;
            var mapOptions = {
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
            var map2 = __WEBPACK_IMPORTED_MODULE_5__ionic_native_google_maps__["a" /* GoogleMaps */].create('map_canvas', mapOptions);
            console.log("La latitite es:" + _this.canjesLst[8].lat);
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
            var points = [
                { lat: -34.619334, lng: -58.451590, title: "1" },
                { lat: -34.623878, lng: -58.424973, title: "2" },
                { lat: -34.631167, lng: -58.395548, title: "3" },
                { lat: -34.612941, lng: -58.371614, title: "4" }
            ];
            //points.push({lat: parseFloat(this.canjesLst[8].lat), lng: parseFloat(this.canjesLst[8].lng),title :this.canjesLst[8].Nombre});
            points.forEach(function (item) {
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
        }, function (error) { console.log(error); });
    };
    MapPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-map',template:/*ion-inline-start:"D:\ionic\MundoCanjeApp\app\appDesa\src\pages\map\map.html"*/'<ion-header class="">\n    <ion-navbar>\n        <ion-title>{{\'find_in_map\' | translate}}\n            <span class="end"><img src="assets/imgs/ic_search-4.png" (click)="search()"></span>\n        </ion-title>\n\n    </ion-navbar>\n</ion-header>\n\n<!-- <ion-content class="bg-color">\n    <div class="map">\n        <img src="assets/imgs/mapa2.jpg">\n    </div>\n    <div class="near-you">\n        <img src="assets/imgs/ic_pin.png" style="top:30%; left: 10%">\n        <img src="assets/imgs/ic_pin.png" style="top:50%; left: 20%">\n        <img src="assets/imgs/ic_pin.png" style="top:40%; left: 40%">\n        <img src="assets/imgs/ic_pin.png" style="top:60%; left: 50%">\n    </div>\n    <div class="your_location">\n        <ion-icon class="material-icons">brightness_1</ion-icon>\n    </div>\n    <div class="location">\n        <img src="assets/imgs/ic_pin-3.png" style="top:45%; left: 45%">\n    </div>\n</ion-content>\n<ion-footer no-border>\n    <div class="fixed-bottom">\n        <ion-scroll scrollX="true" style="height: 108px;white-space: nowrap;">\n            <ion-card>\n                <ion-item>\n                    <ion-avatar item-start>\n                        <img src="assets/imgs/12.jpg">\n                    </ion-avatar>\n                    <h2>1 Parrillada completa para 4 personas</h2>\n                    <p class="d-flex"><img src="assets/imgs/ic_neargo-5.png">Av. Cabildo 669 (250m)</p>\n                    <h3 class="d-flex">\n                        <ion-badge item-end>{{\'4.3\' | translate}}\n                            <ion-icon name="md-star"></ion-icon>\n                        </ion-badge>\n                        <span>Gastronomía</span>\n                        <span class="end"><img src="assets/imgs/ic_direction.png"></span>\n                    </h3>\n                </ion-item>\n            </ion-card>\n            <ion-card>\n                <ion-item>\n                    <ion-avatar item-start>\n                        <img src="assets/imgs/2.png">\n                    </ion-avatar>\n                    <h2>2 Kg de Bananas + 1 Kg Manzana</h2>\n                    <p class="d-flex"><img src="assets/imgs/ic_neargo-5.png">Echeverría 2602</p>\n                    <h3 class="d-flex">\n                        <ion-badge item-end>{{\'4.3\' | translate}}\n                            <ion-icon name="md-star"></ion-icon>\n                        </ion-badge>\n                        <span>Verdulería</span>\n                        <span class="end"><img src="assets/imgs/ic_direction.png"></span>\n                    </h3>\n                </ion-item>\n            </ion-card>\n            <ion-card>\n                <ion-item>\n                    <ion-avatar item-start>\n                        <img src="assets/imgs/10.png">\n                    </ion-avatar>\n                    <h2>10 Clases de Guitarra Acústica</h2>\n                    <p class="d-flex"><img src="assets/imgs/ic_neargo-5.png">Juramento 561</p>\n                    <h3 class="d-flex">\n                        <ion-badge item-end>{{\'4.5\' | translate}}\n                            <ion-icon name="md-star"></ion-icon>\n                        </ion-badge>\n                        <span>Música</span>\n                        <span class="end"><img src="assets/imgs/ic_direction.png"></span>\n                    </h3>\n                </ion-item>\n            </ion-card>\n        </ion-scroll>\n    </div>\n</ion-footer>\n -->\n\n <ion-content class="bg-color">\n    <div id="map_canvas"></div>\n</ion-content>\n<ion-footer no-border>\n    <div class="fixed-bottom">\n        <ion-scroll scrollX="true" style="height: 108px;white-space: nowrap;">\n            <ion-card>\n                <ion-item>\n                    <ion-avatar item-start>\n                        <img src="assets/imgs/12.jpg">\n                    </ion-avatar>\n                    <h2>1 Parrillada completa para 4 personas</h2>\n                    <p class="d-flex"><img src="assets/imgs/ic_neargo-5.png">Av. Cabildo 669 (250m)</p>\n                    <h3 class="d-flex">\n                        <ion-badge item-end>{{\'4.3\' | translate}}\n                            <ion-icon name="md-star"></ion-icon>\n                        </ion-badge>\n                        <span>Gastronomía</span>\n                        <span class="end"><img src="assets/imgs/ic_direction.png"></span>\n                    </h3>\n                </ion-item>\n            </ion-card>\n            <ion-card>\n                <ion-item>\n                    <ion-avatar item-start>\n                        <img src="assets/imgs/2.png">\n                    </ion-avatar>\n                    <h2>2 Kg de Bananas + 1 Kg Manzana</h2>\n                    <p class="d-flex"><img src="assets/imgs/ic_neargo-5.png">Echeverría 2602</p>\n                    <h3 class="d-flex">\n                        <ion-badge item-end>{{\'4.3\' | translate}}\n                            <ion-icon name="md-star"></ion-icon>\n                        </ion-badge>\n                        <span>Verdulería</span>\n                        <span class="end"><img src="assets/imgs/ic_direction.png"></span>\n                    </h3>\n                </ion-item>\n            </ion-card>\n            <ion-card>\n                <ion-item>\n                    <ion-avatar item-start>\n                        <img src="assets/imgs/10.png">\n                    </ion-avatar>\n                    <h2>10 Clases de Guitarra Acústica</h2>\n                    <p class="d-flex"><img src="assets/imgs/ic_neargo-5.png">Juramento 561</p>\n                    <h3 class="d-flex">\n                        <ion-badge item-end>{{\'4.5\' | translate}}\n                            <ion-icon name="md-star"></ion-icon>\n                        </ion-badge>\n                        <span>Música</span>\n                        <span class="end"><img src="assets/imgs/ic_direction.png"></span>\n                    </h3>\n                </ion-item>\n            </ion-card>\n        </ion-scroll>\n    </div>\n</ion-footer>'/*ion-inline-end:"D:\ionic\MundoCanjeApp\app\appDesa\src\pages\map\map.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__providers_product_service_product_service__["a" /* ProductServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_geolocation_ngx__["a" /* Geolocation */]])
    ], MapPage);
    return MapPage;
}());

//# sourceMappingURL=map.js.map

/***/ }),

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Edit_eventPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_product_service_product_service__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_global_product_global_product__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tabs_tabs__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_category_service_category_service__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_global_global__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_pedidos_service_pedidos_service__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_global_pedido_global_pedido__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_geolocation_ngx__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_camera__ = __webpack_require__(107);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};











var Edit_eventPage = /** @class */ (function () {
    function Edit_eventPage(navCtrl, alertCtrl, navParams, toastController, geolocation, productService, product, pedido, categService, user, pedidoService, camera) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.navParams = navParams;
        this.toastController = toastController;
        this.geolocation = geolocation;
        this.productService = productService;
        this.product = product;
        this.pedido = pedido;
        this.categService = categService;
        this.user = user;
        this.pedidoService = pedidoService;
        this.camera = camera;
        this.gender = "female";
        this.geolocationSuccess = function (position) {
            _this.latitude = position.coords.latitude;
            _this.longitude = position.coords.longitude;
        };
        this.ProductoEdit = this.navParams.get('productoEdit');
        this.ObtenerCategorias();
        //this.ObtenerUbicacion();    
        this.SetProductEdit(this.ProductoEdit);
    }
    Edit_eventPage.prototype.SetProductEdit = function (prod) {
        console.log("El importe es: " + prod.Importe);
        console.log("El IdCategoria es: " + prod.IdCategoria);
        console.log("El IdUsuario es: " + this.user.Id);
        this.product.Id = prod.Id;
        this.product.Nombre = prod.Nombre;
        this.product.Descripcion = prod.Descripcion;
        this.product.IdCategoria = prod.IdCategoria;
        this.product.Cantidad = prod.Cantidad;
        //let Lati2 = parseFloat(latitud); 
        this.product.Importe = parseFloat(prod.Importe);
        this.product.IdTipo = '1';
        this.product.TipoDespublicacion = '1';
        this.product.IdEstado = '1';
        this.product.Imagen = prod.Imagen;
        this.base64Image = prod.Imagen;
        this.product.IdUsuario = this.user.Id;
        this.product.Fecha_Publicacion = prod.Fecha_Publicacion;
        this.product.lat = prod.lat;
        this.product.lng = prod.lng;
    };
    Edit_eventPage.prototype.tabs = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__tabs_tabs__["a" /* TabsPage */]);
    };
    Edit_eventPage.prototype.putCanje = function () {
        //console.log("LAT: "+this.latitude);
        //console.log("LONG: "+this.longitude);
        var _this = this;
        if (this.product.Imagen == null) {
            this.product.Imagen = "http://mundocanje.tk/Imagenes/Productos/NoDisponible.png";
        }
        //this.product.IdUsuario = this.user.Id;
        //var myDate: string = new Date().toDateString();
        //this.product.Fecha_Publicacion = myDate;
        //this.product.lat = this.latitude;
        //this.product.lng = this.longitude;
        this.product.Imagen = this.base64Image;
        this.productService.putProduct(this.product)
            .subscribe(function (data) {
            /*
            let data2 = JSON.stringify(data);
            this.dataApi = JSON.parse(data2);
            this.pedido.Id="0";
            this.pedido.IdProducto=this.dataApi.Id; //Poner id que devuelve el data
            this.pedido.IdPedido_Estado="1";
            this.pedido.FechaPedido=myDate;
            */
            _this.presentToast('Los cambios se guardaron correctamente');
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__tabs_tabs__["a" /* TabsPage */]);
        }, function (error) { console.log("ERROR en Save to DB: " + error); });
    };
    Edit_eventPage.prototype.DeleteProduct = function () {
        var _this = this;
        this.productService.deleteProduct(this.product)
            .subscribe(function (data) {
            _this.presentToast('El Canje se eliminó correctamente');
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__tabs_tabs__["a" /* TabsPage */]);
        }, function (error) { console.log("ERROR en Save to DB: " + error); });
    };
    Edit_eventPage.prototype.EliminarProducto = function () {
        this.presentAlertConfirm();
    };
    Edit_eventPage.prototype.presentAlertConfirm = function () {
        return __awaiter(this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertCtrl.create({
                            title: "Eliminar producto",
                            message: '¿Está seguro de eliminar este producto?',
                            buttons: [
                                {
                                    text: 'No',
                                    role: 'cancel',
                                    cssClass: 'secondary',
                                    handler: function (blah) {
                                        console.log('Confirm Cancel: blah');
                                    }
                                }, {
                                    text: 'Si',
                                    handler: function () {
                                        _this.DeleteProduct();
                                    }
                                }
                            ]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Edit_eventPage.prototype.presentToast = function (texto) {
        return __awaiter(this, void 0, void 0, function () {
            var toast;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastController.create({
                            message: texto,
                            duration: 3000
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    Edit_eventPage.prototype.ObtenerCategorias = function () {
        var _this = this;
        this.categService.GetCategorias()
            .subscribe(function (data) {
            _this.CategoriasLst = data;
        }, function (error) { console.log(error); });
    };
    Edit_eventPage.prototype.ObtenerUbicacion = function () {
        var options = {
            enableHighAccuracy: true,
            timeout: 5000,
            maximumAge: 0
        };
        navigator.geolocation.getCurrentPosition(this.geolocationSuccess, this.onError);
    };
    Edit_eventPage.prototype.onError = function (error) {
        alert("Error al obtener la posicion");
    };
    Edit_eventPage.prototype.takePhoto = function (sourceType) {
        var _this = this;
        var options = {
            quality: 50,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            correctOrientation: true,
            sourceType: sourceType,
        };
        this.camera.getPicture(options).then(function (imageData) {
            _this.base64Image = 'data:image/jpeg;base64,' + imageData;
        }, function (err) {
            // Handle error
        });
    };
    Edit_eventPage.prototype.AccessCamera = function () {
        this.takePhoto(1);
    };
    Edit_eventPage.prototype.AccessGallery = function () {
        this.takePhoto(0);
    };
    Edit_eventPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-edit_event',template:/*ion-inline-start:"D:\ionic\MundoCanjeApp\app\appDesa\src\pages\edit_event\edit_event.html"*/'<ion-header>\n    <ion-navbar>        \n        <ion-title>{{\'edit_event\' | translate}}<span class="end text-theme" (click)="putCanje() ">{{\'save\' | translate}}</span></ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content class="bg-color">\n    <div class="form" padding-left padding-right>\n        <ion-list no-lines padding-left padding-right>\n            <div class="store_img">\n               <img [src]="base64Image" *ngIf="base64Image" />      \n                <ion-fab center style="bottom: 30px;" >\n                  <button ion-fab style="background-color: #b9b6b6;">\n                      <ion-icon name="md-camera" class="text-white bg-theme add-pic"></ion-icon>\n                  </button>\n                  <ion-fab-list side="left">\n                    <button ion-fab (click)="AccessGallery()">\n                      <ion-icon name="md-photos" class="text-white bg-theme add-pic"></ion-icon>\n                    </button>\n                  </ion-fab-list>\n                  <ion-fab-list side="right">  \n                    <button ion-fab (click)="AccessCamera()">\n                      <ion-icon name="md-camera" class="text-white bg-theme add-pic"></ion-icon>\n                    </button>\n                  </ion-fab-list>\n                </ion-fab>\n            </div>\n            <ion-item>\n                <ion-label floating>{{\'canje_name\' | translate}}</ion-label>\n                <ion-textarea type="text" value="" [(ngModel)]="product.Nombre"></ion-textarea>\n            </ion-item>           \n            <ion-item>\n                  <ion-label floating>{{\'event_title\' | translate}}</ion-label>\n                  <ion-textarea type="text" value="" [(ngModel)]="product.Descripcion"></ion-textarea>\n              </ion-item>  \n            <ion-item>\n                  <ion-label floating>{{\'categories\' | translate}}</ion-label>                \n                <ion-select [(ngModel)]="product.IdCategoria">>                \n                      <ion-option *ngFor="let iCategoria of CategoriasLst; let i = index" [value]="iCategoria.Id" >\n                          {{iCategoria.Nombre}} \n                      </ion-option>\n                  </ion-select>\n            </ion-item>\n            <ion-row>\n                <ion-col col-6>\n                    <ion-item>\n                        <ion-label item-start>{{\'quantity\' | translate}}</ion-label>\n                        <div class="input_box d-flex" item-end>\n                            <ion-icon class="material-icons text-black">settings</ion-icon>\n                            <ion-input [(ngModel)]="product.Cantidad" type="number" value="1"></ion-input>\n                        </div>\n                    </ion-item>\n                </ion-col>\n                <ion-col col-6>\n                    <ion-item>\n                        <ion-label item-start>{{\'price\' | translate}}</ion-label>\n                        <div class="input_box d-flex" item-end>\n                            <ion-icon class="text-black" name="cash"></ion-icon>\n                            <ion-input type="text"  [(ngModel)]="product.Importe"></ion-input>\n                        </div>\n                    </ion-item>\n                </ion-col>\n            </ion-row>\n            \n        </ion-list>\n        <br>\n        <ion-list no-lines padding-left padding-right class="listButton" >\n            <button ion-button block class="btn-xs" style="background-color: #e13838;" (click)="EliminarProducto()" round>Eliminar\n                <ion-icon class="material-icons text-white">delete</ion-icon>\n            </button>\n        </ion-list>\n        \n    </div>\n</ion-content>\n'/*ion-inline-end:"D:\ionic\MundoCanjeApp\app\appDesa\src\pages\edit_event\edit_event.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */], __WEBPACK_IMPORTED_MODULE_9__ionic_native_geolocation_ngx__["a" /* Geolocation */], __WEBPACK_IMPORTED_MODULE_2__providers_product_service_product_service__["a" /* ProductServiceProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_global_product_global_product__["a" /* GlobalProductProvider */], __WEBPACK_IMPORTED_MODULE_8__providers_global_pedido_global_pedido__["a" /* GlobalPedidoProvider */], __WEBPACK_IMPORTED_MODULE_5__providers_category_service_category_service__["a" /* CategoryServiceProvider */], __WEBPACK_IMPORTED_MODULE_6__providers_global_global__["a" /* GlobalProvider */], __WEBPACK_IMPORTED_MODULE_7__providers_pedidos_service_pedidos_service__["a" /* PedidosServiceProvider */], __WEBPACK_IMPORTED_MODULE_10__ionic_native_camera__["a" /* Camera */]])
    ], Edit_eventPage);
    return Edit_eventPage;
}());

//# sourceMappingURL=edit_event.js.map

/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OfferdetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__edit_offer_edit_offer__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_product_service_product_service__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_global_global__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_google_maps__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__chatting_chatting__ = __webpack_require__(80);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var OfferdetailPage = /** @class */ (function () {
    function OfferdetailPage(navCtrl, modal, alertCtrl, user, navParams, serviceProd) {
        this.navCtrl = navCtrl;
        this.modal = modal;
        this.alertCtrl = alertCtrl;
        this.user = user;
        this.navParams = navParams;
        this.serviceProd = serviceProd;
        this.ProductoCanjeado = false;
        this.CanjesOfrecidos = false;
        this.IdProducto = this.navParams.get('idProd');
        if (this.navParams.get('estado') == "canjeado") {
            this.ProductoCanjeado = true;
        }
        console.log("El producto id es:" + this.IdProducto);
        this.getProduct(this.IdProducto);
        this.getOfrecidos(this.user.Id);
    }
    OfferdetailPage.prototype.getProduct = function (Id) {
        var _this = this;
        this.serviceProd.getProductById(Id)
            .subscribe(function (data) {
            _this.producto = data;
            if (_this.producto != null) {
                _this.nombreProd = _this.producto.Nombre;
                _this.descripcionProd = _this.producto.Descripcion;
                _this.cantSolicitudes = _this.producto.NroSolicitudes;
                _this.ultDiasProd = _this.producto.Ult_Dias;
                _this.imgProd = _this.producto.Imagen;
                _this.importeProd = _this.producto.Importe;
                _this.IdProdUsuario = _this.producto.IdProductoUsuario;
                //this.MostrarMapa(this.latProd,this.lngProd);
                _this.MostrarMapa(_this.producto.lat, _this.producto.lng);
            }
        }, function (error) { console.log(error); });
    };
    OfferdetailPage.prototype.edit_offer = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__edit_offer_edit_offer__["a" /* Edit_offerPage */]);
    };
    OfferdetailPage.prototype.AbrirPopup = function () {
        //this.presentPrompt();
        if (this.IdProdUsuario != this.user.Id) {
            if (this.CanjesOfrecidos) {
                this.openModal();
            }
            else {
                this.presentAlert("Error", "Necesitás crear canjes para ofrecer");
            }
        }
        else {
            this.presentAlert("Error", "No se puede enviar la solicitud a sí mismo");
        }
    };
    OfferdetailPage.prototype.getOfrecidos = function (idUsuario) {
        var _this = this;
        this.serviceProd.getProductByUser(idUsuario)
            .subscribe(function (data) {
            if (data.length > 0) {
                _this.CanjesOfrecidos = true;
            }
        }, function (error) { console.log(error); });
    };
    OfferdetailPage.prototype.AbrirChat = function () {
        var UserReceptor = this.IdProdUsuario;
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__chatting_chatting__["a" /* ChattingPage */], { UserRecep: UserReceptor });
    };
    OfferdetailPage.prototype.presentAlert = function (Titulo, Descripcion) {
        var alert = this.alertCtrl.create({
            title: Titulo,
            subTitle: Descripcion,
            buttons: ['Aceptar']
        });
        alert.present();
    };
    // MostrarMapa(latitude,longitude) {
    OfferdetailPage.prototype.MostrarMapa = function (latitud, longitud) {
        var Lati2 = parseFloat(latitud);
        var Longi2 = parseFloat(longitud);
        var mapOptions = {
            camera: {
                target: {
                    lat: Lati2,
                    lng: Longi2
                },
                zoom: 12,
                tilt: 30
            }
        };
        var map2 = __WEBPACK_IMPORTED_MODULE_5__ionic_native_google_maps__["a" /* GoogleMaps */].create('map_canvas', mapOptions);
        var marker = map2.addMarkerSync({
            title: 'Ionic',
            icon: 'blue',
            animation: 'DROP',
            position: {
                lat: Lati2,
                lng: Longi2
            }
        });
    };
    //////////////////////////////////
    OfferdetailPage.prototype.openModal = function () {
        var myModalOptions = {
            enableBackdropDismiss: false
        };
        /*
            const myModalData = {
              name: 'Paul Halliday',
              occupation: 'Developer'
            };
            */
        var myModal = this.modal.create('ModalNotificationPage', { idProd: this.IdProducto }, myModalOptions);
        myModal.present();
        myModal.onDidDismiss(function (data) {
            console.log("I have dismissed.");
            console.log(data);
        });
        myModal.onWillDismiss(function (data) {
            console.log("I'm about to dismiss");
            console.log(data);
        });
    };
    OfferdetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-offerdetail',template:/*ion-inline-start:"D:\ionic\MundoCanjeApp\app\appDesa\src\pages\offerdetail\offerdetail.html"*/'<ion-header class="bg-transparent">\n    <ion-navbar>\n        <ion-title>            \n            <ion-badge class="end">\n                <ion-icon name="md-stopwatch"></ion-icon>\n                {{ultDiasProd}} Días\n            </ion-badge>\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content class="bg-color">\n    <div class="banner">\n        <img [src]="imgProd">\n        <div class="store-name">\n            <h2 class="text-white d-flex">{{nombreProd}}\n            </h2>\n        </div>\n    </div>\n    <div class="details">\n        <div class="about">\n            <h3 class="text-black">{{\'about_offer\' | translate}}</h3>\n            <p class="text-black">{{nombreProd}}. Valor estimado: $ {{importeProd}} </p>\n        </div>\n        <div class="interested d-flex">\n            <h3 class="d-flex text-black">\n                    {{cantSolicitudes}}\n                <small class="text-black">{{\'people_send\' | translate}}</small>\n            </h3>\n            <button  *ngIf="!ProductoCanjeado" ion-button block icon-start class="btn text-white end" round (click)="AbrirPopup()">\n                <ion-icon class="material-icons">notifications</ion-icon>\n                {{\'send_invitation\' | translate}}\n            </button>\n            <button *ngIf="ProductoCanjeado" ion-button block icon-start class="btn text-white end" round (click)="AbrirChat()">\n                    <ion-icon class="material-icons">mail</ion-icon>\n                    Enviar Chat\n                </button>\n            \n        </div>\n        \n        \n        <div class="address">\n                <div id="map_canvas"></div>\n            <!--\n            <h3 class="text-white d-flex">{{\'address\' | translate}}\n              \n            </h3>\n            \n            \n            <p class="text-white">Barrio Belgrano. Capital Federal</p>\n            <div class="map">\n                <img src="assets/imgs/mapa3.jpg">\n            </div>\n            <img src="assets/imgs/ic_pin.png" class="location">\n            -->\n        </div>\n        \n    </div>\n\n</ion-content>\n'/*ion-inline-end:"D:\ionic\MundoCanjeApp\app\appDesa\src\pages\offerdetail\offerdetail.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_4__providers_global_global__["a" /* GlobalProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_product_service_product_service__["a" /* ProductServiceProvider */]])
    ], OfferdetailPage);
    return OfferdetailPage;
}());

//# sourceMappingURL=offerdetail.js.map

/***/ }),

/***/ 56:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Edit_offerPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs_tabs__ = __webpack_require__(31);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Edit_offerPage = /** @class */ (function () {
    function Edit_offerPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.gender = "female";
    }
    Edit_offerPage.prototype.tabs = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__tabs_tabs__["a" /* TabsPage */]);
    };
    Edit_offerPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-edit_offer',template:/*ion-inline-start:"D:\ionic\MundoCanjeApp\app\appDesa\src\pages\edit_offer\edit_offer.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>{{\'edit_offer\' | translate}}<span class="end text-theme" (click)="tabs() ">{{\'save\' | translate}}</span></ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content class="bg-color">\n    <div class="form" padding-left padding-right>\n        <ion-list no-lines padding-left padding-right>\n            <div class="store_img">\n                <!--        <img src="assets/imgs/profile.png">-->\n                <ion-icon name="md-camera" class="text-white bg-theme add-pic"></ion-icon>\n            </div>\n            <ion-item>\n                <ion-label floating>{{\'offer_title\' | translate}}</ion-label>\n                <ion-textarea type="text" value="Buy 2 pair of jens and get 2 for absolutel free. HURRY !"></ion-textarea>\n            </ion-item>\n            <ion-item class="about_offer">\n                <ion-label floating>{{\'about_offer2\' | translate}}</ion-label>\n                <ion-textarea type="text" value="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s,"></ion-textarea>t>\n            </ion-item>\n            <ion-item>\n                <ion-label floating>{{\'address2\' | translate}}</ion-label>\n                <ion-input type="text" value="1124, Old Church Street (250m)"></ion-input>\n            </ion-item>\n            <ion-row>\n                <ion-col col-6>\n                    <ion-item>\n                        <ion-label item-start>{{\'offer_start_date\' | translate}}</ion-label>\n                        <div class="input_box d-flex" item-end>\n                            <ion-icon class="material-icons text-white">event</ion-icon>\n                            <ion-input type="text" value="25 - June - 18"></ion-input>\n                        </div>\n                    </ion-item>\n                </ion-col>\n                <ion-col col-6>\n                    <ion-item>\n                        <ion-label item-start>{{\'offer_end_date\' | translate}}</ion-label>\n                        <div class="input_box d-flex" item-end>\n                            <ion-icon class="material-icons text-white">event</ion-icon>\n                            <ion-input type="text" value="29 - June - 18"></ion-input>\n                        </div>\n                    </ion-item>\n                </ion-col>\n            </ion-row>\n        </ion-list>\n    </div>\n</ion-content>\n'/*ion-inline-end:"D:\ionic\MundoCanjeApp\app\appDesa\src\pages\edit_offer\edit_offer.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]])
    ], Edit_offerPage);
    return Edit_offerPage;
}());

//# sourceMappingURL=edit_offer.js.map

/***/ }),

/***/ 57:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoryServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_global_global__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CategoryServiceProvider = /** @class */ (function () {
    function CategoryServiceProvider(http, global) {
        this.http = http;
        this.global = global;
        //console.log('Hello CategoryServiceProvider Provider');
    }
    CategoryServiceProvider.prototype.GetCategorias = function () {
        console.log("La API es: " + this.global.ApiUrl);
        return this.http.get(this.global.ApiUrl + 'categorias/');
    };
    CategoryServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__providers_global_global__["a" /* GlobalProvider */]])
    ], CategoryServiceProvider);
    return CategoryServiceProvider;
}());

//# sourceMappingURL=category-service.js.map

/***/ }),

/***/ 59:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventdetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__chatting_chatting__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__edit_event_edit_event__ = __webpack_require__(51);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EventdetailPage = /** @class */ (function () {
    function EventdetailPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    EventdetailPage.prototype.edit_event = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__edit_event_edit_event__["a" /* Edit_eventPage */]);
    };
    EventdetailPage.prototype.VerChat = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__chatting_chatting__["a" /* ChattingPage */]);
    };
    EventdetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-eventdetail',template:/*ion-inline-start:"D:\ionic\MundoCanjeApp\app\appDesa\src\pages\eventdetail\eventdetail.html"*/'<ion-header class="bg-transparent">\n    <ion-navbar>\n        <ion-title>\n            <ion-badge class="end">\n                <ion-icon name="md-calendar"></ion-icon>\n                14/10/2019\n            </ion-badge>\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content class="bg-color">\n    <div class="banner">\n        <img src=\'assets/imgs/12.jpg\'>\n        <div class="store-name">\n            <h2 class="text-white d-flex">1 Parrillada completa para 4 personas</h2>\n        </div>\n    </div>\n    <div class="details">\n        <div class="about">\n            <h3 class="text-black">{{\'about_event2\' | translate}}</h3>\n            <p class="text-black">Parrilla Locos de Asar. El comercio intercambia 1 parrillada para 4 personas que consta de: Vacío, Asado, Chorizos, Morcillas y achuras. No incluye bebidas o entradas. Por un valor de $3.100</p>\n        </div>\n        <div class="interested d-flex">\n            <h3 class="d-flex text-black">\n                12 <small class="text-black">{{\'people_send\' | translate}}</small>\n            </h3>\n            <button ion-button block icon-start class="btn text-white end"  round (click)="VerChat()">\n                <ion-icon class="material-icons">chat</ion-icon>\n                {{\'chats_view\' | translate}}\n            </button>\n        </div>\n        <div class="address">\n            <h3 class="text-white d-flex">{{\'address\' | translate}}\n             <!--   <span class="text-theme end ">{{\'get_direction\' | translate}}</span> -->\n            </h3>\n            <p class="text-white">Belgrano. Buenos Aires</p>\n            <div class="map">\n                <img src="assets/imgs/mapa3.jpg">\n            </div>\n            <img src="assets/imgs/ic_pin.png" class="location">\n        </div>\n    </div>\n\n</ion-content>\n'/*ion-inline-end:"D:\ionic\MundoCanjeApp\app\appDesa\src\pages\eventdetail\eventdetail.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]])
    ], EventdetailPage);
    return EventdetailPage;
}());

//# sourceMappingURL=eventdetail.js.map

/***/ }),

/***/ 60:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_global_global__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the CategoryServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var UserServiceProvider = /** @class */ (function () {
    function UserServiceProvider(http, user) {
        this.http = http;
        this.user = user;
    }
    UserServiceProvider.prototype.postUser = function (user) {
        user.Id = "0";
        console.log(user);
        return this.http.post(this.user.ApiUrl + 'Usuarios/', user);
    };
    UserServiceProvider.prototype.getUserByToken = function (token) {
        //return this.http.get(this.user.ApiUrl+'Usuarios/GetUsuarioByToken?Token='+token);
        return this.http.get(this.user.ApiUrl + 'Usuarios/GetUsuarioByToken/' + token);
    };
    UserServiceProvider.prototype.getUserById = function (idUsuario) {
        return this.http.get(this.user.ApiUrl + 'Usuarios/GetUsuariosById/' + idUsuario);
    };
    UserServiceProvider.prototype.putUser = function (usuario) {
        console.log(usuario);
        return this.http.put(this.user.ApiUrl + 'Usuarios/' + usuario.Id, usuario);
        //return this.http.put('http://localhost:51199/api/Usuarios/'+usuario.Id, usuario);
    };
    UserServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__providers_global_global__["a" /* GlobalProvider */]])
    ], UserServiceProvider);
    return UserServiceProvider;
}());

//# sourceMappingURL=user-service.js.map

/***/ }),

/***/ 61:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PedidosServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_global_global__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_global_pedido_global_pedido__ = __webpack_require__(62);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PedidosServiceProvider = /** @class */ (function () {
    function PedidosServiceProvider(http, global, pedido) {
        this.http = http;
        this.global = global;
        this.pedido = pedido;
    }
    PedidosServiceProvider.prototype.getPedidosById = function (idPedido) {
        return this.http.get(this.global.ApiUrl + 'Pedidos/' + idPedido);
    };
    PedidosServiceProvider.prototype.getPedidosRecibidosByUser = function (idUsuario) {
        return this.http.get(this.global.ApiUrl + 'Pedidos/CanjesRecibidosByUsuario/' + idUsuario);
    };
    PedidosServiceProvider.prototype.getPedidosConfirmadosByUser = function (idUsuario) {
        return this.http.get(this.global.ApiUrl + 'Pedidos/CanjesConfirmadosByUsuario/' + idUsuario);
    };
    PedidosServiceProvider.prototype.postPedido = function (pedido) {
        pedido.Id = "0";
        console.log(pedido);
        return this.http.post(this.global.ApiUrl + 'Pedidos/', pedido);
    };
    PedidosServiceProvider.prototype.putPedido = function (pedido) {
        //pedido.Id="0";
        console.log(pedido);
        return this.http.put(this.global.ApiUrl + 'Pedidos/' + pedido.Id, pedido);
    };
    PedidosServiceProvider.prototype.UpdatePedidoState = function (pedido) {
        console.log(pedido);
        return this.http.post(this.global.ApiUrl + 'Pedidos/UpdatePedidoState/', pedido);
    };
    PedidosServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__providers_global_global__["a" /* GlobalProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_global_pedido_global_pedido__["a" /* GlobalPedidoProvider */]])
    ], PedidosServiceProvider);
    return PedidosServiceProvider;
}());

//# sourceMappingURL=pedidos-service.js.map

/***/ }),

/***/ 62:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GlobalPedidoProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var GlobalPedidoProvider = /** @class */ (function () {
    function GlobalPedidoProvider() {
    }
    GlobalPedidoProvider.prototype.getPedido = function () {
        return this.pedido;
    };
    GlobalPedidoProvider.prototype.setPedido = function (pedido) {
        this.pedido = pedido;
    };
    GlobalPedidoProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])()
    ], GlobalPedidoProvider);
    return GlobalPedidoProvider;
}());

//# sourceMappingURL=global-pedido.js.map

/***/ }),

/***/ 702:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StorePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__review_review__ = __webpack_require__(165);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var StorePage = /** @class */ (function () {
    function StorePage(navCtrl) {
        this.navCtrl = navCtrl;
        this.slides = [
            {
                image: "assets/imgs/background.png",
            },
            {
                image: "assets/imgs/2.png",
            },
            {
                image: "assets/imgs/3.png",
            }
        ];
    }
    StorePage.prototype.review = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__review_review__["a" /* ReviewPage */]);
    };
    StorePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-store',template:/*ion-inline-start:"D:\ionic\MundoCanjeApp\app\appDesa\src\pages\store\store.html"*/'<ion-header class="bg-transparent">\n    <ion-navbar>\n        <ion-title></ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content class="bg-color">\n    <div class="banner">\n        <img src="assets/imgs/background.png">\n    </div>\n    <div class="details">\n        <div class="store-name">\n            <h2 class="text-white">Golden Bakery</h2>\n            <p class="d-flex text-gray">Dairy & Bakery </p>\n            <h4 class="d-flex text-white">\n                <ion-badge item-end class="bg-theme text-white">4.3\n                    <ion-icon name="md-star"></ion-icon>\n                </ion-badge>\n                {{\'98_people_rated\' | translate}}<span class="end text-theme" (click)="review()">{{\'read_all\' | translate}}</span>\n            </h4>\n        </div>\n        <div class="about">\n            <h3 class="text-white">{{\'aboput\' | translate}}</h3>\n            <p class="text-white">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s</p>\n        </div>\n        <div class="contact d-flex">\n            <div class="opening">\n                <h3 class="text-white">{{\'opening_hours\' | translate}}</h3>\n                <p class="text-theme">{{\'open_now\' | translate}}<span class="text-white">(08:00 - 22:00)</span></p>\n            </div>\n            <div text-end class="end">\n                <ion-icon name="md-heart" class="text-white bg-theme fevret"></ion-icon>\n                <ion-icon name="md-chatboxes" class="heart text-white bg-theme"></ion-icon>\n                <ion-icon name="md-call" class="text-white bg-theme"></ion-icon>\n            </div>\n        </div>\n        <div class="address">\n            <h3 class="text-white d-flex">{{\'address\' | translate}}\n                <span class="text-theme end ">{{\'get_direction\' | translate}}</span>\n            </h3>\n            <p class="text-white">1124, Old Church Street (250m)</p>\n            <div class="map">\n                <img src="assets/imgs/map-location.png">\n            </div>\n            <img src="assets/imgs/ic_pin.png" class="location">\n        </div>\n    </div>\n\n</ion-content>\n'/*ion-inline-end:"D:\ionic\MundoCanjeApp\app\appDesa\src\pages\store\store.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]])
    ], StorePage);
    return StorePage;
}());

//# sourceMappingURL=store.js.map

/***/ }),

/***/ 720:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(386);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(387);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_signin_signin__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__node_modules_ngx_translate_core__ = __webpack_require__(388);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_push__ = __webpack_require__(389);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, translate, push) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.translate = translate;
        this.push = push;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_signin_signin__["a" /* SigninPage */];
        this.initializeApp();
        this.pushSetup();
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
            _this.translate.setDefaultLang('en');
            _this.translate.use('en');
        });
    };
    MyApp.prototype.pushSetup = function () {
        var options = {
            android: {
                senderID: '943473640737'
            },
            ios: {
                alert: 'true',
                badge: true,
                sound: 'false'
            },
            browser: {
                pushServiceURL: 'http://push.api.phonegap.com/v1/push'
            }
        };
        var pushObject = this.push.init(options);
        var topic = "mundocanje"; //this way ,topics are working in android but not in ios
        pushObject.subscribe(topic);
        pushObject.on('notification').subscribe(function (notification) { return console.log('Received a notification', notification); });
        pushObject.on('registration').subscribe(function (registration) { return console.log('Device registered', registration); });
        pushObject.on('error').subscribe(function (error) { return console.error('Error with Push plugin', error); });
    };
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\ionic\MundoCanjeApp\app\appDesa\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"D:\ionic\MundoCanjeApp\app\appDesa\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_5__node_modules_ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_push__["a" /* Push */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 723:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddreviewPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs_tabs__ = __webpack_require__(31);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AddreviewPage = /** @class */ (function () {
    function AddreviewPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    AddreviewPage.prototype.tabs = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__tabs_tabs__["a" /* TabsPage */]);
    };
    AddreviewPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-addreview',template:/*ion-inline-start:"D:\ionic\MundoCanjeApp\app\appDesa\src\pages\addreview\addreview.html"*/'<ion-header class="bg-transparent">\n    <ion-navbar>\n        <ion-title>{{\'add_review\' | translate}}</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content class="bg-color">\n    <div class="banner">\n        <img src="assets/imgs/background.png" class="bg">\n        <div class="rating">\n            <ion-icon name="md-star-outline"></ion-icon>\n            <ion-icon name="md-star-outline"></ion-icon>\n            <ion-icon name="md-star-outline"></ion-icon>\n            <ion-icon name="md-star-outline"></ion-icon>\n            <ion-icon name="md-star-outline"></ion-icon>\n        </div>\n    </div>\n    <div class="form">\n        <ion-list no-lines padding-left padding-right>\n            <ion-item>\n                <ion-input type="email" placeholder="{{\'let_us_know\' | translate}}"></ion-input>\n            </ion-item>\n            <button ion-button block class="btn" (click)="tabs()" round>{{\'submit_review\' | translate}}</button>\n        </ion-list>\n    </div>\n</ion-content>\n'/*ion-inline-end:"D:\ionic\MundoCanjeApp\app\appDesa\src\pages\addreview\addreview.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]])
    ], AddreviewPage);
    return AddreviewPage;
}());

//# sourceMappingURL=addreview.js.map

/***/ }),

/***/ 724:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewchattingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NewchattingPage = /** @class */ (function () {
    function NewchattingPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    NewchattingPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad NewchattingPage');
    };
    NewchattingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-newchatting',template:/*ion-inline-start:"D:\ionic\MundoCanjeApp\app\appDesa\src\pages\newchatting\newchatting.html"*/'<ion-header class="bg-transparent">\n    <ion-navbar>\n        <ion-title>\n            <span class="text-white">Luciano Fernandez<small>online</small></span>\n        </ion-title>\n    </ion-navbar>\n    <div class="banner">\n        <img src="assets/imgs/16.jpg" class="bg">\n    </div>\n</ion-header>\n\n<ion-content class="bg-color">\n    <div class="send chat-box" padding>\n        <h6>Buen día, acepté la solicitud. Estarían faltando $350 para completar el total</h6>\n        <p>11:58</p>\n    </div>\n    \n    \n</ion-content>\n<ion-footer no-border>\n    <div class="fixed-bottom form">\n        <ion-list class="" no-lines>\n            <ion-item>\n                <ion-input type="text" placeholder="{{\'type_your_message\' | translate}}"></ion-input>\n                <div class="" item-end>\n                    <ion-icon name="attach" class="attach"></ion-icon>\n                    <ion-icon name="md-send" class=""></ion-icon>\n                </div>\n            </ion-item>\n        </ion-list>\n    </div>\n</ion-footer>\n'/*ion-inline-end:"D:\ionic\MundoCanjeApp\app\appDesa\src\pages\newchatting\newchatting.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], NewchattingPage);
    return NewchattingPage;
}());

//# sourceMappingURL=newchatting.js.map

/***/ }),

/***/ 80:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChattingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_global_global__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_user_service_user_service__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_chat_service_chat_service__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_chat_detalle_service_chat_detalle_service__ = __webpack_require__(335);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ChattingPage = /** @class */ (function () {
    function ChattingPage(navCtrl, navParams, chatDetServ, chatServ, user, userService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.chatDetServ = chatDetServ;
        this.chatServ = chatServ;
        this.user = user;
        this.userService = userService;
        this.UsEmisor = this.user.Id;
        this.UsIdReceptor = this.navParams.get('UserRecep');
        console.log("El usuario emisor es:" + this.UsEmisor);
        console.log("El usuario receptor es:" + this.UsIdReceptor);
        this.getUserById(this.UsIdReceptor);
        this.getChatsByUsuario(this.UsEmisor, this.UsIdReceptor);
    }
    /*
      ngOnInit() {
        this.getChatsByUsuario(this.UsEmisor, this.UsIdReceptor);
        this.scrollToBottom();
      }
      */
    ChattingPage.prototype.doRefresh = function (refresher) {
        console.log('Begin async operation');
        this.getChatsByUsuario(this.UsEmisor, this.UsIdReceptor);
        setTimeout(function () {
            console.log('Async operation has ended');
            refresher.complete();
        }, 2000);
    };
    ChattingPage.prototype.getUserById = function (idUsuario) {
        var _this = this;
        this.userService.getUserById(idUsuario)
            .subscribe(function (data) {
            if (data == null) {
                console.log("No se pudo encontrar el usuario receptor");
            }
            else {
                //this.dataApi = JSON.stringify(data);
                var data2 = JSON.stringify(data);
                _this.dataApi = JSON.parse(data2);
                _this.UsNombreReceptor = _this.dataApi.Nombre;
                _this.UsImgReceptor = _this.dataApi.Imagen;
            }
        }, function (error) { console.log(error); });
    };
    ChattingPage.prototype.getChatsByUsuario = function (idEmisor, IdReceptor) {
        var _this = this;
        this.chatDetServ.getChatsDetailsByUsuario(idEmisor, IdReceptor)
            .subscribe(function (data) {
            if (data == null) {
                console.log("No se pudo encontrar el usuario receptor");
            }
            else {
                _this.chatDetalleApi = data;
                if (data[0] != null) {
                    _this.idChat = data[0].IdChat;
                }
                else {
                    _this.idChat = 0;
                }
                /*
                let data2 = JSON.stringify(data);
                this.dataApi = JSON.parse(data2);
                this.UsNombreReceptor = this.dataApi.Nombre;
                this.UsImgReceptor = this.dataApi.Imagen;
                */
            }
        }, function (error) { console.log(error); });
    };
    ChattingPage.prototype.SendChat = function () {
        var _this = this;
        var myDate = new Date().toDateString();
        if (this.idChat == 0) {
            var postChat = {
                "Id": "0",
                "Usuario_Emisor": this.UsEmisor,
                "Usuario_Receptor": this.UsIdReceptor,
                "Fecha_Ultimo_Mensaje": myDate,
                "Ultimo_Mensaje": this.MensajeSend
            };
            this.chatServ.postChat(postChat)
                .subscribe(function (data) {
                var data2 = JSON.stringify(data);
                _this.dataApi = JSON.parse(data2);
                _this.idChat = _this.dataApi.Id;
                _this.PostChatDetail();
            }, function (error) { console.log(error); });
        }
        else {
            var putChat = {
                "Id": this.idChat,
                "Usuario_Emisor": this.UsEmisor,
                "Usuario_Receptor": this.UsIdReceptor,
                "Fecha_Ultimo_Mensaje": myDate,
                "Ultimo_Mensaje": this.MensajeSend
            };
            this.chatServ.putChat(putChat)
                .subscribe(function (data) {
                _this.PostChatDetail();
            }, function (error) { console.log(error); });
        }
    };
    ChattingPage.prototype.PostChatDetail = function () {
        var _this = this;
        var myDate = new Date().toDateString();
        var postChatDetail = {
            "Id": "0",
            "Usuario_Emisor": this.UsEmisor,
            "Usuario_Receptor": this.UsIdReceptor,
            "Fecha_Mensaje": myDate,
            "Mensaje": this.MensajeSend,
            "IdChat": this.idChat
        };
        this.chatDetServ.postChatDetails(postChatDetail)
            .subscribe(function (data) {
            console.log("Mensaje enviado");
            _this.getChatsByUsuario(_this.UsEmisor, _this.UsIdReceptor);
            _this.MensajeSend = "";
        }, function (error) { console.log(error); });
    };
    ChattingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-chatting',template:/*ion-inline-start:"D:\ionic\MundoCanjeApp\app\appDesa\src\pages\chatting\chatting.html"*/'<ion-header class="bg-transparent">\n    <ion-navbar>\n        <ion-title>\n            <span class="text-white">{{UsNombreReceptor}}<small>online</small></span>\n        </ion-title>\n    </ion-navbar>\n    <div class="banner">\n       <!-- <img src="assets/imgs/background.png" class="bg"> -->\n       <img [src]="UsImgReceptor" class="bg">\n    </div>\n</ion-header>\n\n<ion-content class="bg-color">\n    <ion-refresher (ionRefresh)="doRefresh($event)">\n        <ion-refresher-content></ion-refresher-content>\n    </ion-refresher>\n    \n    <div *ngFor="let d of chatDetalleApi; let i = index" (ionRefresh)="doRefresh($event)">\n        <div *ngIf="(d.Usuario_Emisor == UsEmisor)" class="send chat-box" padding>\n            <h6>{{d.Mensaje}}</h6>\n            <p>{{d.Fecha_Mensaje | date:"dd/MM/yyyy"}}</p>\n        </div>\n        <div *ngIf="(d.Usuario_Emisor == UsIdReceptor)" class="received chat-box" padding>\n            <h6>{{d.Mensaje}}</h6>\n            <p>{{d.Fecha_Mensaje | date:"dd/MM/yyyy"}}</p>\n        </div>\n    </div>\n        \n    <!--\n    <div class="send chat-box" padding>\n        <h6>¿Qué tal?, buenas tardes. Que bueno que podemos concretar el canje</h6>\n        <p>11:58</p>\n    </div>\n    <div class="received chat-box" padding>\n        <h6>Si, buenísimo !<br>¿Las dos docenas de facturas van a ser mixtas o todas Medialunas?</h6>\n        <p>11:59</p>\n    </div>\n    <div class="send chat-box" padding>\n        <h6>Quisiera que sean mixtas. ¿En qué horario puedo ir a realizar el intercambio?</h6>\n        <p>12:00</p>\n    </div>\n    <div class="received chat-box" padding>\n        <h6>Hasta las 19.00 hs. estoy en el negocio. Te espero</h6>\n        <p>12:10</p>\n    </div>\n    <div class="send chat-box" padding>\n        <h6>Perfecto, llegaré en 1 hora. Muchas gracias por todo</h6>\n        <p>12:12</p>\n    </div>\n    <div class="received chat-box" padding>\n        <h6>Muy bien, nos vemos!</h6>\n        <p>12:20</p>\n    </div>\n    -->\n</ion-content>\n<ion-footer no-border>\n    <div class="fixed-bottom form">\n        <ion-list class="" no-lines>\n            <ion-item>\n                <ion-input  [(ngModel)]="MensajeSend" type="text" placeholder="{{\'type_your_message\' | translate}}"></ion-input>\n                <div class="" item-end>\n                    <ion-icon name="attach" class="attach"></ion-icon>\n                    <ion-icon (click)="SendChat()" name="md-send" class=""></ion-icon>\n                    \n                </div>\n            </ion-item>\n        </ion-list>\n    </div>\n</ion-footer>\n'/*ion-inline-end:"D:\ionic\MundoCanjeApp\app\appDesa\src\pages\chatting\chatting.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_5__providers_chat_detalle_service_chat_detalle_service__["a" /* ChatDetalleServiceProvider */], __WEBPACK_IMPORTED_MODULE_4__providers_chat_service_chat_service__["a" /* ChatServiceProvider */], __WEBPACK_IMPORTED_MODULE_2__providers_global_global__["a" /* GlobalProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_user_service_user_service__["a" /* UserServiceProvider */]])
    ], ChattingPage);
    return ChattingPage;
}());

//# sourceMappingURL=chatting.js.map

/***/ }),

/***/ 81:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_chat_service_chat_service__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__search_search__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__chatting_chatting__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_global_global__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ChatsPage = /** @class */ (function () {
    function ChatsPage(navCtrl, user, modalCtrl, serviceChat) {
        this.navCtrl = navCtrl;
        this.user = user;
        this.modalCtrl = modalCtrl;
        this.serviceChat = serviceChat;
        this.idUsuarioPropio = this.user.Id;
        console.log("EWl id propio es: " + this.idUsuarioPropio);
        this.getChats(this.idUsuarioPropio);
    }
    ChatsPage.prototype.chatting = function (chat) {
        var UsIdReceptor = chat.Usuario_Emisor;
        if (this.idUsuarioPropio != chat.Usuario_Receptor) {
            UsIdReceptor = chat.Usuario_Receptor;
        }
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__chatting_chatting__["a" /* ChattingPage */], { UserRecep: UsIdReceptor });
    };
    ChatsPage.prototype.search = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__search_search__["a" /* SearchPage */]);
        modal.present();
    };
    ChatsPage.prototype.getChats = function (idUser) {
        var _this = this;
        this.serviceChat.getChatsByUsuario(idUser)
            .subscribe(function (data) {
            _this.chatLst = data;
        }, function (error) { console.log(error); });
    };
    ChatsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-chats',template:/*ion-inline-start:"D:\ionic\MundoCanjeApp\app\appDesa\src\pages\chats\chats.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <ion-title>{{\'chats_history\' | translate}}<span class="end">\n\n                <img src="assets/imgs/ic_search-4.png" (click)="search()">\n\n            </span></ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="bg-color">\n\n    \n\n<!--\n\n    <ion-list no-lines *ngFor="let d of chatLst; let i = index">\n\n        <ion-item class="active" (click)="chatting()">\n\n            <div class="img-box">\n\n                <img src="assets/imgs/background.png">\n\n            </div>\n\n            <div class="details">\n\n                <h2 class="text-white d-flex">Las Medialunas del Abuelo<span class="end">{{d.Fecha_Ultimo_Mensaje}}</span></h2>\n\n                <p class="text-white d-flex">{{d.Ultimo_Mensaje}}<span class="end notifications">1</span></p>\n\n            </div>\n\n        </ion-item>\n\n-->\n\n<ion-list no-lines *ngFor="let d of chatLst; let i = index">\n\n        <ion-item (click)="chatting(d)">\n\n                <div  *ngIf="(d.Usuario_Emisor != idUsuarioPropio)"  class="img-box">\n\n                    <img [src]="d.ImgUsuarioEmisor">\n\n                </div>\n\n                <div *ngIf="(d.Usuario_Receptor != idUsuarioPropio)" class="img-box">\n\n                        <img [src]="d.ImgUsuarioReceptor">\n\n                    </div>\n\n                <div *ngIf="(d.Usuario_Emisor != idUsuarioPropio)" class="details">\n\n                    <h2 class="text-white d-flex">{{d.NombreUsuarioEmisor}}<span class="end">{{d.Fecha_Ultimo_Mensaje | date:"dd/MM/yyyy"}}</span></h2>\n\n                    <p class=" d-flex">{{d.Ultimo_Mensaje}}<span class="end"></span></p>\n\n                </div>\n\n                <div *ngIf="(d.Usuario_Receptor != idUsuarioPropio)" class="details">\n\n                        <h2 class="text-white d-flex">{{d.NombreUsuarioReceptor}}<span class="end">{{d.Fecha_Ultimo_Mensaje | date:"dd/MM/yyyy"}}</span></h2>\n\n                        <p class=" d-flex">{{d.Ultimo_Mensaje}}<span class="end"></span></p>\n\n                    </div>\n\n            </ion-item>\n\n    <!--\n\n        <ion-item (click)="chatting()">\n\n            <div class="img-box">\n\n                <img src="assets/imgs/chat_2.jpg">\n\n            </div>\n\n            <div class="details">\n\n                <h2 class="text-white d-flex">María Sanchez<span class="end">12:30</span></h2>\n\n                <p class=" d-flex">Estamos en contacto.<span class="end"></span></p>\n\n            </div>\n\n        </ion-item>\n\n        <ion-item (click)="chatting()">\n\n            <div class="img-box">\n\n                <img src="assets/imgs/chat_3.jpg">\n\n            </div>\n\n            <div class="details">\n\n                <h2 class="text-white d-flex">Paula Paz<span class="end">10:23</span></h2>\n\n                <p class=" d-flex">Esta semana estoy hasta las 14.00 hs.<span class="end"></span></p>\n\n            </div>\n\n        </ion-item>\n\n        <ion-item (click)="chatting()">\n\n            <div class="img-box">\n\n                <img src="assets/imgs/chat_4.jpg">\n\n            </div>\n\n            <div class="details">\n\n                <h2 class="text-white d-flex">La Continental<span class="end"> 10:30</span></h2>\n\n                <p class="d-flex">El canje se realizó con éxito.<span class="end"></span></p>\n\n            </div>\n\n        </ion-item>\n\n        <ion-item (click)="chatting()">\n\n            <div class="img-box">\n\n                <img src="assets/imgs/chat_5.jpg">\n\n            </div>\n\n            <div class="details">\n\n                <h2 class="text-white d-flex">Peluquería Leo Paparella<span class="end">12:30</span></h2>\n\n                <p class=" d-flex">Te esperamos de 14 a 21 hs.<span class="end"></span></p>\n\n            </div>\n\n        </ion-item>\n\n        <ion-item (click)="chatting()">\n\n            <div class="img-box">\n\n                <img src="assets/imgs/chat_6.jpg">\n\n            </div>\n\n            <div class="details">\n\n                <h2 class="text-white d-flex">Dietética La Colmena<span class="end">Ayer</span></h2>\n\n                <p class=" d-flex">Muchas gracias, me quedó perfecto.<span class="end"></span></p>\n\n            </div>\n\n        </ion-item>\n\n\n\n        -->\n\n    </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\ionic\MundoCanjeApp\app\appDesa\src\pages\chats\chats.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_5__providers_global_global__["a" /* GlobalProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */], __WEBPACK_IMPORTED_MODULE_2__providers_chat_service_chat_service__["a" /* ChatServiceProvider */]])
    ], ChatsPage);
    return ChatsPage;
}());

//# sourceMappingURL=chats.js.map

/***/ }),

/***/ 82:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_global_global__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__profile_profile__ = __webpack_require__(336);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__review_review__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__condition_condition__ = __webpack_require__(340);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__help_help__ = __webpack_require__(342);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__signin_signin__ = __webpack_require__(108);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var AccountPage = /** @class */ (function () {
    function AccountPage(navCtrl, user, platform) {
        this.navCtrl = navCtrl;
        this.user = user;
        this.platform = platform;
        this.base64Image = user.Imagen;
    }
    AccountPage.prototype.profile = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__profile_profile__["a" /* ProfilePage */]);
    };
    AccountPage.prototype.review = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__review_review__["a" /* ReviewPage */]);
    };
    AccountPage.prototype.condition = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__condition_condition__["a" /* ConditionPage */]);
    };
    AccountPage.prototype.help = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__help_help__["a" /* HelpPage */]);
    };
    AccountPage.prototype.logout = function () {
        //this.navCtrl.popToRoot();
        //this.navCtrl.push(SigninPage)
        //this.platform.exitApp();
        this.platform.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_7__signin_signin__["a" /* SigninPage */]);
    };
    AccountPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-account',template:/*ion-inline-start:"D:\ionic\MundoCanjeApp\app\appDesa\src\pages\account\account.html"*/'<ion-header class="bg-transparent">\n    <ion-navbar>\n        <ion-title>Menu</ion-title>\n    </ion-navbar>\n    <div class="banner">\n        <img src="assets/imgs/Fondo2_1080.jpg" class="bg">\n        <div class="profile d-flex" (click)="profile()">\n            <div class="profile-img">\n                <img [src]="base64Image" *ngIf="base64Image">\n            </div>\n            <h2>\n                {{user.Nombre}}\n                <span class="text-gray">{{\'view_profile\' | translate}}</span>\n            </h2>\n        </div>\n    </div>\n</ion-header>\n\n<ion-content class="bg-color">\n    <ion-list no-lines>\n        <ion-item (click)="review()">\n            <img src="assets/imgs/ic_notification-1.png" item-start>\n            <h2 class="text-blue">{{\'notifications\' | translate}}</h2>\n            <p class="text-gray">{{\'view_all_notifications\' | translate}}</p>\n            <ion-badge item-end>\n                10\n                <ion-icon name="md-notifications"></ion-icon>\n            </ion-badge>\n        </ion-item>\n        <ion-item>\n            <img src="assets/imgs/ic_share-1.png" item-start>\n            <h2 class="text-blue">{{\'share_app\' | translate}}</h2>\n            <p class="text-gray">{{\'invite_frindes_family\' | translate}}</p>\n        </ion-item>\n        <ion-item (click)="help()">\n            <img src="assets/imgs/ic_help-1.png" item-start>\n            <h2 class="text-blue">{{\'need_help\' | translate}}</h2>\n            <p class="text-gray">{{\'faq\' | translate}}</p>\n        </ion-item>\n        <ion-item>\n            <img src="assets/imgs/ic_thumbs-up-hand-1.png" item-start>\n            <h2 class="text-blue">{{\'rate_app\' | translate}}</h2>\n            <p class="text-gray">{{\'rate_us\' | translate}}</p>\n        </ion-item>\n        <ion-item (click)="condition()">\n            <img src="assets/imgs/ic-term-condition-1.png" item-start>\n            <h2 class="text-blue">{{\'terms_conditions\' | translate}}</h2>\n            <p class="text-gray">{{\'our_terms_conditions\' | translate}}</p>\n        </ion-item>\n        <ion-item (click)="logout()">\n                <img src="assets/imgs/logout.png" item-start>\n                <h2 class="text-blue">Salir</h2>     \n                <p class="text-gray">Cerrar sesión</p>           \n            </ion-item>\n    </ion-list>\n</ion-content>\n'/*ion-inline-end:"D:\ionic\MundoCanjeApp\app\appDesa\src\pages\account\account.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_global_global__["a" /* GlobalProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */]])
    ], AccountPage);
    return AccountPage;
}());

//# sourceMappingURL=account.js.map

/***/ }),

/***/ 95:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GlobalProductProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/*
  Generated class for the GlobalProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var GlobalProductProvider = /** @class */ (function () {
    function GlobalProductProvider() {
    }
    //ImageData: string;
    GlobalProductProvider.prototype.getProduct = function () {
        return this.product;
    };
    GlobalProductProvider.prototype.setProduct = function (product) {
        this.product = product;
    };
    GlobalProductProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])()
    ], GlobalProductProvider);
    return GlobalProductProvider;
}());

//# sourceMappingURL=global-product.js.map

/***/ }),

/***/ 96:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoryresultPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__edit_offer_edit_offer__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__edit_event_edit_event__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__eventdetail_eventdetail__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__offerdetail_offerdetail__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__search_search__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__chats_chats__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__map_map__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__account_account__ = __webpack_require__(82);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var CategoryresultPage = /** @class */ (function () {
    function CategoryresultPage(navCtrl, modalCtrl) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
    }
    CategoryresultPage.prototype.edit_offer = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__edit_offer_edit_offer__["a" /* Edit_offerPage */]);
    };
    CategoryresultPage.prototype.edit_event = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__edit_event_edit_event__["a" /* Edit_eventPage */]);
    };
    CategoryresultPage.prototype.offerdetail = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__offerdetail_offerdetail__["a" /* OfferdetailPage */]);
    };
    CategoryresultPage.prototype.eventdetail = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__eventdetail_eventdetail__["a" /* EventdetailPage */]);
    };
    CategoryresultPage.prototype.map = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__map_map__["a" /* MapPage */]);
    };
    CategoryresultPage.prototype.map22 = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__chats_chats__["a" /* ChatsPage */]);
    };
    CategoryresultPage.prototype.perfil = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__account_account__["a" /* AccountPage */]);
    };
    CategoryresultPage.prototype.search = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_6__search_search__["a" /* SearchPage */]);
        modal.present();
    };
    CategoryresultPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-categoryresult',template:/*ion-inline-start:"D:\ionic\MundoCanjeApp\app\appDesa\src\pages\categoryresult\categoryresult.html"*/'<ion-header class="bg-color">\n  <ion-navbar>\n      <ion-title class="text-theme">{{\'app_title\' | translate}}\n          <span class="end">\n              \n              <img src="assets/imgs/ic_search-4.png" (click)="search()">\n              <img src="assets/imgs/ic_account-4.png" (click)="perfil()">\n          </span>\n      </ion-title>\n  </ion-navbar>  \n</ion-header>\n\n<ion-content class="bg-color">\n  <div>\n      <ion-list  class="offers">\n          <ion-item (click)="offerdetail()">\n              <img src="assets/imgs/12.jpg" class="bg">\n              <ion-badge item-end>\n                  <ion-icon name="md-stopwatch"></ion-icon>\n                  2 Días\n              </ion-badge>\n              <div class="text">\n                  <h2>1 Parrillada completa para 4 personas</h2>\n                  <p class="d-flex text-theme">\n                      5 {{\'people_send\' | translate}}\n                  </p>\n              </div>\n          </ion-item>\n          <ion-item (click)="offerdetail()">\n              <img src="assets/imgs/13.jpg" class="bg">\n              <ion-badge item-end>\n                  <ion-icon name="md-stopwatch"></ion-icon>\n                  6 Días\n              </ion-badge>\n              <div class="text">\n                  <h2>1 Docena de empanadas de carne </h2>\n                  <p class="d-flex text-theme">\n                      10 {{\'people_send\' | translate}}\n                  </p>\n              </div>\n          </ion-item>\n          <ion-item (click)="offerdetail()">\n              <img src="assets/imgs/14.jpg" class="bg">\n              <ion-badge item-end>\n                  <ion-icon name="md-stopwatch"></ion-icon>\n                  5 Hrs\n              </ion-badge>\n              <div class="text">\n                  <h2>Menú del día completo para dos personas</h2>\n                  <p class="d-flex text-theme">\n                      1 {{\'people_send\' | translate}}\n                  </p>\n              </div>\n          </ion-item>\n\n          <ion-item (click)="offerdetail()">\n              <img src="assets/imgs/16.jpg" class="bg">\n              <ion-badge item-end>\n                  <ion-icon name="md-stopwatch"></ion-icon>\n                  2 Días\n              </ion-badge>\n              <div class="text">\n                  <h2>12 Alfajores Cachafaz dulce de leche</h2>\n                  <p class="d-flex text-theme">\n                      2 {{\'people_send\' | translate}}\n                  </p>\n              </div>\n          </ion-item>\n          <ion-item (click)="offerdetail()">\n              <img src="assets/imgs/17.jpg" class="bg">\n              <ion-badge item-end>\n                  <ion-icon name="md-stopwatch"></ion-icon>\n                  6 Días\n              </ion-badge>\n              <div class="text">\n                  <h2>Choripan + gaseosa para llevar </h2>\n                  <p class="d-flex text-theme">\n                      3 {{\'people_send\' | translate}}\n                  </p>\n              </div>\n          </ion-item>\n          <ion-item (click)="offerdetail()">\n              <img src="assets/imgs/18.jpg" class="bg">\n              <ion-badge item-end>\n                  <ion-icon name="md-stopwatch"></ion-icon>\n                  5 Hrs\n              </ion-badge>\n              <div class="text">\n                  <h2>24 Facturas mixtas</h2>\n                  <p class="d-flex text-theme">\n                      4 {{\'people_send\' | translate}}\n                  </p>\n              </div>\n          </ion-item>\n      </ion-list>\n\n  </div>\n</ion-content>\n<ion-footer no-border class="d-flex">\n  <ion-icon class="material-icons text-white bg-theme end" *ngIf="near == \'offers\'" (click)="edit_offer()">add</ion-icon>\n  <ion-icon class="material-icons text-white bg-theme end" *ngIf="near == \'events\'" (click)="edit_event()">add</ion-icon>\n</ion-footer>\n'/*ion-inline-end:"D:\ionic\MundoCanjeApp\app\appDesa\src\pages\categoryresult\categoryresult.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */]])
    ], CategoryresultPage);
    return CategoryresultPage;
}());

//# sourceMappingURL=categoryresult.js.map

/***/ })

},[391]);
//# sourceMappingURL=main.js.map