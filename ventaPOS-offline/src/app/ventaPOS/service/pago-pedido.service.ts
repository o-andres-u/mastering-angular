import { Injectable } from '@angular/core';
import { PagoPedido } from '../modelo/pago-pedido';
import { MedioPago } from '../modelo/medio-pago';

@Injectable()
export class PagoPedidoService {

  constructor() { }

  getDetalles() {
    return detalles;
  }

  getMedioPago() {
    return medioPago;
  }

}

const detalles: PagoPedido[] = [
  new PagoPedido('Efectivo', null, null, null, null, null, 0, 2500000),
  new PagoPedido('Tarjeta Débito', 'VISA', null, '5887441221', 'Bancolombia', '458', 25000, 2500000),
  new PagoPedido('Tarjeta Crédito', 'VISA', null, '5887441221', 'Bancolombia', '458', 25000, 2500000),
  new PagoPedido('Cheque', null, null, null, null, '458', 25000, 0),
  new PagoPedido('Nota Crédito', null, '619', null, null, null, 0, 2500000),
  new PagoPedido('Anticipo', null, '619', null, null, null, 0, 2500000),
  new PagoPedido('Transferencia', null, null, '5887441221', 'Bancolombia', '458', 0, 2500000),
  new PagoPedido('Consignación', null, null, '5887441221', 'Bancolombia', '458', 0, 2500000)
]

const medioPago: MedioPago[] = [
  new MedioPago('EFEC', 'Efectivo'),
  new MedioPago('TRDE', 'Tarjeta Débito'),
  new MedioPago('TRCR', 'Tarjeta Crédito'),
  new MedioPago('CHEQ', 'Cheque'),
  new MedioPago('NOCR', 'Nota Crédito'),
  new MedioPago('ANTI', 'Anticipo'),
  new MedioPago('TRAN', 'Transferencia'),
  new MedioPago('CONS', 'Consignación')
]
