import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import {HttpModule, JsonpModule} from "@angular/http";
import {FormsModule} from "@angular/forms";

import {routing, appRoutingProviders} from "./app.routing";
import {RestaurantesListComponent} from './components/restaurantes-list.component';
import {RestaurantesDetailComponent} from './components/restaurantes-detail.component';
import {RestaurantesAddComponent} from './components/restaurantes-add.component';
import {RestaurantesEditComponent} from './components/restaurantes-edit.component';

@NgModule({
    imports:      [ BrowserModule, HttpModule, FormsModule, routing ],
    declarations: [
                    AppComponent,
                    RestaurantesListComponent,
                    RestaurantesDetailComponent,
                    RestaurantesEditComponent,
                    RestaurantesAddComponent
                    ],
    providers : [appRoutingProviders],
    bootstrap:    [ AppComponent ]
})

export class AppModule { }