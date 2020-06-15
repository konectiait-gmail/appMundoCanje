import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable()
export class GlobalProvider {

  public ApiUrl = "http://mundocanje.tk/api/";  
  //public ApiUrl = "http://localhost:51199/api/";

  private user: GlobalProvider; 
    Id: string;
    Mail: string;
    password: string;
    Nombre: string;
    Telefono: string;
    Token: string;
    Direccion: string;
    Razon_Social: string;
    Estado: string;
    IdTipo: string;
    Cuit: string;
    Imagen: string;
    IdPlan: string;
    IdLocalidad: string;
    Fecha_Alta: string;

    getUser(): GlobalProvider {
      return this.user;
    }
  
    setUser(user:GlobalProvider) {
      this.user = user;
    }
  }

