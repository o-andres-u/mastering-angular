import { Injectable } from '@angular/core';
import { DetallePedido } from '../modelo/detalle-pedido';

@Injectable()
export class DetalleServiceService {

  constructor() { }

  getDetalles() {
    return detalles;
  }

}

const detalles: DetallePedido[] = [
  new DetallePedido('1', 'ITEM01', 'item01 a la venta', 'UM', 1, 1000, 10, 100, 100, 1000),
  new DetallePedido('2', 'ITEM02', 'item02 a la venta', 'UM', 1, 1000, 10, 100, 100, 1000),
  new DetallePedido('3', 'ITEM03', 'item03 a la venta', 'UM', 1, 1000, 10, 100, 100, 1000),
  new DetallePedido('4', 'ITEM04', 'item04 a la venta', 'UM', 1, 1000, 10, 100, 100, 1000),
  new DetallePedido('5', 'ITEM05', 'item05 a la venta', 'UM', 1, 1000, 10, 100, 100, 1000),
  new DetallePedido('6', 'ITEM06', 'item06 a la venta', 'UM', 1, 1000, 10, 100, 100, 1000),
  new DetallePedido('7', 'ITEM07', 'item07 a la venta', 'UM', 1, 1000, 10, 100, 100, 1000),
  new DetallePedido('8', 'ITEM08', 'item08 a la venta', 'UM', 1, 1000, 10, 100, 100, 1000),
  new DetallePedido('9', 'ITEM09', 'item09 a la venta', 'UM', 1, 1000, 10, 100, 100, 1000),
  new DetallePedido('10', 'ITEM10', 'item10 a la venta', 'UM', 1, 1000, 10, 100, 100, 1000),
  new DetallePedido('11', 'ITEM11', 'item11 a la venta', 'UM', 1, 1000, 10, 100, 100, 1000),
  new DetallePedido('12', 'ITEM12', 'item12 a la venta', 'UM', 1, 1000, 10, 100, 100, 1000),
  new DetallePedido('13', 'ITEM13', 'item13 a la venta', 'UM', 1, 1000, 10, 100, 100, 1000),
  new DetallePedido('14', 'ITEM14', 'item14 a la venta', 'UM', 1, 1000, 10, 100, 100, 1000),
  new DetallePedido('15', 'ITEM15', 'item15 a la venta', 'UM', 1, 1000, 10, 100, 100, 1000),
  new DetallePedido('16', 'ITEM16', 'item16 a la venta', 'UM', 1, 1000, 10, 100, 100, 1000),
  new DetallePedido('17', 'ITEM17', 'item17 a la venta', 'UM', 1, 1000, 10, 100, 100, 1000),
  new DetallePedido('18', 'ITEM18', 'item18 a la venta', 'UM', 1, 1000, 10, 100, 100, 1000),
  new DetallePedido('19', 'ITEM19', 'item19 a la venta', 'UM', 1, 1000, 10, 100, 100, 1000),
  new DetallePedido('20', 'ITEM20', 'item10 a la venta', 'UM', 1, 1000, 10, 100, 100, 1000)
];


