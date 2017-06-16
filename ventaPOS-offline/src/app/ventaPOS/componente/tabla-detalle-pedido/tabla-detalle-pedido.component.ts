import { Component, OnInit, ViewChild } from '@angular/core';
import { DetalleServiceService } from '../../service/detalle-service.service';
import { DetallePedido } from '../../modelo/detalle-pedido';

@Component({
  selector: 'app-tabla-detalle-pedido',
  templateUrl: './tabla-detalle-pedido.component.html',
  styleUrls: ['./tabla-detalle-pedido.component.scss'],
  providers: [DetalleServiceService]
})
export class TablaDetallePedidoComponent implements OnInit {


  constructor(service: DetalleServiceService) {
  }

  logEvent(eventName) {
    console.log(eventName);
  }

  ngOnInit() {
  }

}
