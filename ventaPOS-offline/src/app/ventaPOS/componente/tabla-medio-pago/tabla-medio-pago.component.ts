import { Component, OnInit, ViewChild } from '@angular/core';
import { PagoPedidoService } from '../../service/pago-pedido.service';
import { PagoPedido } from '../../modelo/pago-pedido';
import { MedioPago } from '../../modelo/medio-pago';

@Component({
  selector: 'app-tabla-medio-pago',
  templateUrl: './tabla-medio-pago.component.html',
  styleUrls: ['./tabla-medio-pago.component.scss'],
  providers: [PagoPedidoService]
})
export class TablaMedioPagoComponent implements OnInit {
 
  constructor(service: PagoPedidoService) {
  }

  logEvent(eventName) {
    console.log(eventName);
  }

  ngOnInit() {
  }

}
