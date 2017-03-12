import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppRoutingModule }  from './app-routing.module';
import { AppComponent }  from './app.component';
import { WelcomeComponent } from "./home/welcome.component";
import { ProductModule } from "./products/product.module";

@NgModule({
  imports: [ 
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    ProductModule
  ],
  declarations: [ 
    AppComponent,
    WelcomeComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
