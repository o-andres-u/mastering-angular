import { Component, OnInit } from '@angular/core';
import {Pedido} from '../../modelo/pedido';
import {EncabezadoService} from '../../service/encabezado.service';

@Component({
  selector: 'app-titulo',
  templateUrl: './titulo.component.html',
  styleUrls: ['./titulo.component.scss'],
  providers: [EncabezadoService]
})
export class TituloComponent implements OnInit {

  titulo = 'Venta POS';
  pedido: Pedido;
  constructor(serviceEncabezado: EncabezadoService) {
    this.pedido = serviceEncabezado.getPedido(1);
   }

  ngOnInit() {
  }

}
