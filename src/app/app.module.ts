import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalculadoraComponent } from './Componentes/calculadora/calculadora.component';
import { NavegationComponent } from './Componentes/navegation/navegation.component';
import { HistorialComponent } from './Componentes/historial/historial.component';

@NgModule({
  declarations: [
    AppComponent,
    CalculadoraComponent,
    NavegationComponent,
    HistorialComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
