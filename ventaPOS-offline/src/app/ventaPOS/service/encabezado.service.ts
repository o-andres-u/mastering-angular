import { Injectable } from '@angular/core';
import { Pedido } from '../modelo/pedido';
import { Cliente } from '../modelo/cliente';
import { EstadoPedido } from '../modelo/estado-pedido';
import { FormaPago } from '../modelo/forma-pago';
import { Centro } from '../modelo/centro';
import { Unidad } from '../modelo/unidad';
import { Vendedor } from '../modelo/vendedor';
import { Moneda } from '../modelo/moneda';

@Injectable()
export class EncabezadoService {

  cliente = new Cliente('222222', 'Cliente Generico', 'uuidClienteGenerico');
  formaPago = new FormaPago('FPCONT', 'Contado');
  estadoPedido = new EstadoPedido('EP', 'En Proceso');
  unidad = new Unidad('11', 'unidad', 'uuidUnidad');
  vendedor = new Vendedor('Persona natural', 'cc', '619619', 'Vendedor general', 'uuidVendedor');
  moneda = new Moneda('CO', 'Peso colombiano', 'uuidMoneda');
  centro = new Centro('00', 'Centro Defecto', 'uuidCentro');
  pedido: Pedido;

  constructor() {
    this.pedido = new Pedido(
      this.cliente, this.formaPago, this.estadoPedido, '1', new Date(), new Date(), 1, this.unidad, 
      this.vendedor, this.moneda, 0, 'uuidPedido');
    this.pedido.$centro = this.centro;
  }

  getPedido(nroPedido: number) {
    return this.pedido;
  }

}
