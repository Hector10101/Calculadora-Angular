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
    if (Valu === '0' || Valu === '1' || Valu === '2' || Valu === '3'|| Valu === '4' || Valu === '5' || Valu === '6'|| Valu === '7' || Valu === '8' || Valu === '9' || Valu === '.') {
      this.Text += Valu;
      if(this.operadores  === false){
        this.operando1 = parseFloat(this.Text);
      }else if(this.operadores  === true){
        this.operando2 = parseFloat(this.Text);
      }
    }

    if (Valu === '+' || Valu === '-' || Valu === '*' || Valu === '/') {
      if(this.operadores  === false){
        this.operador = Valu;
        this.Text += Valu;
        this.SubText ='';
        this.SubText += this.Text;
        this.Text = '';
        this.operadores  = true;
      }
    }
    if (this.Text.length === 10) {
      return;
    }

  }

  Resultado(){
    switch(this.operador){
      case '+': 
        this.Sumar();
      break;
      case '-': 
        this.Restar();
      break;
      case '*': 
        this.Multiplicar();
      break;
      case '/': 
        this.Dividir();
      break;

    }
  }

  private Sumar(){
    this.resultado = (this.operando1 + this.operando2).toString() ;
    this.ordenarOperacion();
  }
  private Restar(){
    this.resultado = (this.operando1 - this.operando2).toString() ;
    this.ordenarOperacion();
  }
  private Dividir(){
    this.resultado = (this.operando1 / this.operando2).toString() ;
    this.ordenarOperacion();
  }
  private Multiplicar(){
    this.resultado = (this.operando1 * this.operando2).toString() ;
    this.ordenarOperacion();
  }
  private ordenarOperacion(){
    this.SubText = this.operando1 + this.operador + this.operando2;
    this.Text = this.resultado;

    this.operando1 = parseFloat(this.resultado);
    this.operadores  = false;
  }
}

