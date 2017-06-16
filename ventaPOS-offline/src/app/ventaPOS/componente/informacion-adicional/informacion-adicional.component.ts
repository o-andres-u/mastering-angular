import { Component, OnInit } from '@angular/core';
import { EncabezadoService } from '../../service/encabezado.service';
import { Pedido } from '../../modelo/pedido';
import { Centro } from '../../modelo/centro';
import { Vendedor } from '../../modelo/vendedor';

@Component({
  selector: 'app-informacion-adicional',
  templateUrl: './informacion-adicional.component.html',
  styleUrls: ['./informacion-adicional.component.scss']
})
export class InformacionAdicionalComponent implements OnInit {

 pedido: Pedido;
  constructor(serviceEncabezado: EncabezadoService) {
    this.pedido = serviceEncabezado.getPedido(1);
   }

  ngOnInit() {
  }

}
