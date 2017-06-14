import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-total-pago-pedido',
  templateUrl: './total-pago-pedido.component.html',
  styleUrls: ['./total-pago-pedido.component.scss']
})
export class TotalPagoPedidoComponent implements OnInit {

totalPago: number = 1000000;
totalRecibido: number = 1500000;
cambio: number = 500000;
  constructor() { }

  ngOnInit() {
  }

}
