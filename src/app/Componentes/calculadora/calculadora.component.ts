import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.scss']
})
export class CalculadoraComponent implements OnInit {

  title = '';
  Text = '';
  SubText = '';
  operadores =  false;
  operando1: number;
  operando2: number;
  operador = '';
  resultado = '';

  constructor() { }

  ngOnInit(): void {
  }

  pressBtn(Valu){
    this.Text += Valu;

  }

}
