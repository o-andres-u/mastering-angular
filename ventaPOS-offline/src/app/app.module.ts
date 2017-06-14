import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { EncabezadoComponent } from './ventaPOS/componente/encabezado/encabezado.component';
import { TituloComponent } from './ventaPOS/componente/titulo/titulo.component';
import { VentanaComponent } from './ventaPOS/componente/ventana/ventana.component';

import { MyDatePickerModule } from 'mydatepicker';
import { Ng2CompleterModule } from 'ng2-completer';
import { InformacionAdicionalComponent } from './ventaPOS/componente/informacion-adicional/informacion-adicional.component';
import { ImpuestoInluidoPrecioPipe } from './ventaPOS/pipe/impuesto-inluido-precio.pipe';
import { TablaDetallePedidoComponent } from './ventaPOS/componente/tabla-detalle-pedido/tabla-detalle-pedido.component';
import { TablaMedioPagoComponent } from './ventaPOS/componente/tabla-medio-pago/tabla-medio-pago.component';

import { TotalDetallesComponent } from './ventaPOS/componente/total-detalles/total-detalles.component';
import { TotalPagoPedidoComponent } from './ventaPOS/componente/total-pago-pedido/total-pago-pedido.component';

import { PouchdbService } from './ventaPOS/service/pouchdb-service/pouchdb.service';

@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    TituloComponent,
    VentanaComponent,
    InformacionAdicionalComponent,
    ImpuestoInluidoPrecioPipe,
    TablaDetallePedidoComponent,
    TablaMedioPagoComponent,
    TotalDetallesComponent,
    TotalPagoPedidoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MyDatePickerModule,
    Ng2CompleterModule
    
  ],
  providers: [
    PouchdbService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
