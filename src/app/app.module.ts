import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalculadoraComponent } from './Componentes/calculadora/calculadora.component';
import { NavegationComponent } from './Componentes/navegation/navegation.component';
import { HistorialComponent } from './Componentes/historial/historial.component';
import { OperacionComponent } from './Componentes/operacion/operacion.component';
import {OperacionesService} from './Servicios/operaciones.service';


@NgModule({
  declarations: [
    AppComponent,
    CalculadoraComponent,
    NavegationComponent,
    HistorialComponent,
    OperacionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [OperacionesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
