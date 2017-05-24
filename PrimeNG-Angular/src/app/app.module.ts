import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {InputTextModule, ButtonModule, ConfirmDialogModule} from 'primeng/primeng';
import {MessagesModule} from 'primeng/primeng';

import {CarService} from './data-table-demo/car.service';
import { DataTableDemoComponent } from './data-table-demo/data-table-demo.component'

import { DataTableModule, GrowlModule } from 'primeng/primeng';

@NgModule({
  declarations: [
    AppComponent,
    DataTableDemoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InputTextModule,
    ButtonModule,
    ConfirmDialogModule,
    BrowserAnimationsModule,
    MessagesModule,
    DataTableModule,
    GrowlModule
  ],
  providers: [CarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
