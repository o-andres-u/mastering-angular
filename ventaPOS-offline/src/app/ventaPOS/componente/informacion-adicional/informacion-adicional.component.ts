import { Moneda } from '../../modelo/moneda';
import { Unidad } from '../../modelo/unidad';
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { EncabezadoService } from '../../service/encabezado.service';
import { Pedido } from '../../modelo/pedido';
import { Centro } from '../../modelo/centro';
import { Vendedor } from '../../modelo/vendedor';
import { CompleterService, CompleterData } from 'ng2-completer';

@Component({
  selector: 'app-informacion-adicional',
  templateUrl: './informacion-adicional.component.html',
  styleUrls: ['./informacion-adicional.component.scss']
})
export class InformacionAdicionalComponent implements OnInit {

  @Output() notify: EventEmitter<Pedido> = new EventEmitter<Pedido>();
  @Input() pedido: Pedido;

  constructor(serviceEncabezado: EncabezadoService, private completerService: CompleterService) {
    this.pedido = serviceEncabezado.getPedido(1);
    this.dataServiceCentro = completerService.local(this.searchDataCentro, 'codigo', 'nombre');
    this.dataServiceUnidad = completerService.local(this.searchDataUnidad, 'codigo', 'nombre');
    this.dataServiceVendedor = completerService.local(this.searchDataVendedor, 'id', 'nombre');
  }

  enviarFormacion() {
    this.notify.emit(this.pedido);
  }
  ngOnInit() {
  }

  protected searchCentro: Centro;
  protected dataServiceCentro: CompleterData;
  protected searchDataCentro = [new Centro('00', 'Centro 00', 'uuidCentro'), new Centro('01', 'Centro 01', 'uuidCentro')];

  protected searchUnidad: Centro;
  protected dataServiceUnidad: CompleterData;
  protected searchDataUnidad = [new Centro('01', 'Unidad 01', 'uuidUnidad'), new Centro('01', 'Unidad 01', 'uuidUnidad')];

  protected searchVendedor: Vendedor;
  protected dataServiceVendedor: CompleterData;
  protected searchDataVendedor = [new Vendedor('Natural', 'CC', '620620', 'vendedor 1', 'uuidVendedor'), new Vendedor('Natural', 'CC', '621621', 'vendedor 2', 'uuidVendedor')];



}
