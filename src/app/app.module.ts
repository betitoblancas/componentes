import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DadoComponent } from './dado/dado.component';
import { CronometroComponent } from './cronometro/cronometro.component';
import { SelectornumericoComponent } from './selectornumerico/selectornumerico.component';
import { Selectornumerico2Component } from './selectornumerico2/selectornumerico2.component';
import { ListadoarticulosComponent } from './listadoarticulos/listadoarticulos.component';
import { JsonComponent } from './json/json.component';

@NgModule({
  declarations: [
    AppComponent,
    DadoComponent,
    CronometroComponent,
    SelectornumericoComponent,
    Selectornumerico2Component,
    ListadoarticulosComponent,
    JsonComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
