import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { DialogComponent } from './component/dialog/dialog.component';
import { RegistroCandidatoComponent } from './component/registro-candidato/registro-candidato.component';
import { TRANSLATION_PROVIDERS, TranslatePipe, TranslateService } from './translate';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule
  ],
  declarations: [
    AppComponent,
    DialogComponent,
    RegistroCandidatoComponent,
    TranslatePipe,
  ],
  providers: [ TranslateService, TRANSLATION_PROVIDERS],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
