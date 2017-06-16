import { Component, OnInit } from '@angular/core';
import { EncabezadoService } from '../../service/encabezado.service';
import { Pedido } from '../../modelo/pedido';
import { FormaPago } from '../../modelo/forma-pago';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.scss'],
  providers: [EncabezadoService]
})
export class EncabezadoComponent implements OnInit {

  pedido: Pedido;
  precioConImpuesto: string;


  constructor(serviceEncabezado: EncabezadoService) {
    this.pedido = serviceEncabezado.getPedido(1);
    this.precioConImpuesto = 'Impuestos incluidos';
  }

  ngOnInit() {

  }

  onSubmit() {
    console.log('submited ...');
  }


}

