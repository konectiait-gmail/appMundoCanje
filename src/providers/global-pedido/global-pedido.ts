import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class GlobalPedidoProvider {

  private pedido: GlobalPedidoProvider; 
    Id: string;
    IdProducto: string;
    IdUsuario: string;
    IdPedido_Estado: string;
    FechaPedido: string;
    FechaEntrega: string;
    Comentarios: string;
    Importe: number;   
    ImagenMatch: string;
    ImporteDiferencia: string;
    ProductoNombreMatch: string;
    ProductoDescripcionMatch: string;
    CategoriaMatch: string;    
    IdProductoMatch: string; 

    getPedido(): GlobalPedidoProvider {
      return this.pedido;
    }
  
    setPedido(pedido:GlobalPedidoProvider) {
      this.pedido = pedido;
    }

}
