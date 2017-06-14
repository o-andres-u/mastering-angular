import { Component, OnInit, EventEmitter, Input } from '@angular/core';
import { EncabezadoService } from '../../service/encabezado.service';
import { Pedido } from '../../modelo/pedido';
import { FormaPago } from '../../modelo/forma-pago';
import { IMyDpOptions, IMyDateModel } from 'mydatepicker';
import { CompleterService, CompleterData } from 'ng2-completer';

import { PouchdbService } from '../../service/pouchdb-service/pouchdb.service';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.scss'],
  providers: [EncabezadoService]
})
export class EncabezadoComponent implements OnInit {
  @Input() pedido: Pedido;

  precioConImpuesto: string;

  remoteCouchDBAddress: string;
  dataString: string;
  syncStatus: boolean;
  couchDbUp: boolean;

  private fechaFacturaOptions: IMyDpOptions = {
    // other options...
    dateFormat: 'dd/mm/yyyy',
    todayBtnTxt: 'Hoy',
    componentDisabled: false,
    width: '8%'
  };

  // Initialized to specific date (09.10.2018).
  model: Object = { date: { year: 2018, month: 10, day: 9 } };
  protected searchFormaPago: FormaPago;
  protected dataService: CompleterData;
  protected searchData = [new FormaPago('FPCONT', 'Forma Pago Contado'), new FormaPago('FP90', 'Forma Pago 90 dias')];
  private locale: string = 'es';

  private serviceEncabezado: EncabezadoService;

  constructor(serviceEncabezado: EncabezadoService, private completerService: CompleterService, private pouchdbservice: PouchdbService) {
    this.serviceEncabezado = serviceEncabezado;
    this.pedido = serviceEncabezado.getPedido(1);
    this.dataService = completerService.local(this.searchData, 'codigo', 'descripcion');
    this.precioConImpuesto = 'Impuestos incluidos';
    this.pouchdbservice.syncStatus.subscribe(result => {
      this.syncStatus = result;
    });
    this.pouchdbservice.couchdbUp.subscribe(result => {
      this.couchDbUp = result;
    });
    this.remoteCouchDBAddress = this.pouchdbservice.remoteCouchDBAddress;
  }

  ngOnInit() {
    this.model = {
      date: {
        year: this.pedido.$fechaElaboracion.getFullYear(),
        month: this.pedido.$fechaElaboracion.getMonth(),
        day: this.pedido.$fechaElaboracion.getDate()
      }
    };

  }

  onDateChanged(event: IMyDateModel) {
    console.log(
      'onDateChanged(): ',
      event.date, ' - jsdate: ',
      new Date(event.jsdate).toLocaleDateString(),
      ' - formatted: ', event.formatted,
      ' - epoc timestamp: ', event.epoc);
  }

  onSubmit() {
    console.log('submited ...');
  }

  put() {
    let uuid : string = new Date().toISOString();
    this.pedido.$_id = uuid;
    this.pouchdbservice.put(this.pedido)
      .then((response) => {
        console.log(JSON.stringify(response));
      });
  }

newDocument(){
  this.pedido = this.serviceEncabezado.getPedido(1);;
}

}

