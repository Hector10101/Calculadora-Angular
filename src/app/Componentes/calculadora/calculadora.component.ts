import { Component, OnInit } from '@angular/core';
import { OperacionesService } from 'src/app/Servicios/operaciones.service';


@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.scss']
})
export class CalculadoraComponent implements OnInit {

  title = '';
  Text = '0';
  SubText = '';
  operadores =  false;
  operando1: number;
  operando2: number;
  operador = '';
  resultado = '';
  Operacion = [];
  data = '';

  constructor( public operacionesService: OperacionesService) { 
    if(localStorage.getItem('Datos')){
      this.Operacion = JSON.parse(localStorage.getItem('Datos'));
    }
  }

  ngOnInit(): void {
  }
  verLocal(){
    var mostrar= JSON.parse(localStorage.getItem('Datos')+'\n'); 
    var Text= document.getElementById('Histo');
    var Cantidad = mostrar.length-1;
        Text.textContent= "";
        for(var i=0;i<=Cantidad;i++){

           Text.textContent= Text.textContent + mostrar[i];
        }

  }
  clearAll(){
    this.Text = '0';
    this.SubText = '';
    this.operadores = false;
    this.operador = '';
    this.resultado = '';
  }
  clear(){
    this.Text = this.Text.substring(0, this.Text.length - 1);
    if(this.Text.length === 0){
      this.Text = '0';
    }
    if(this.operadores  === false){
      this.SubText ="";
    }
    if(this.operadores  === false){
      this.operando1 = parseFloat(this.Text);
    }
    this.operando2 = parseFloat(this.Text);
  }

  pressBtn(Valu){
    if(this.Text !== '0'){
      if (Valu === '0' || Valu === '1' || Valu === '2' || Valu === '3'|| Valu === '4' || Valu === '5' || Valu === '6'|| Valu === '7' || Valu === '8' || Valu === '9') {
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
          this.Text = '0';
          this.operando2 = parseFloat(this.Text);
          this.operadores  = true;
        }
      }
      if (this.Text.length === 10) {
        return;
      }
    }else{
      if (Valu === '0'||Valu === '1'||Valu === '2'||Valu === '3'||Valu === '4'||Valu === '5'||Valu === '6'||Valu === '7'||Valu === '8'||Valu === '9') {
        this.Text = Valu;
        if(this.operadores  === false){
          this.operando1 = parseFloat(this.Text);
        }else if(this.operadores  === true){
          this.operando2 = parseFloat(this.Text);
        }
      }
    }
  }

  Resultado(){
    if(localStorage.getItem('Datos')){
      this.Operacion = JSON.parse(localStorage.getItem('Datos'));
    }
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

    this.data = this.operando1 + this.operador + this.operando2 + " = " + this.resultado;
    this.Operacion.push(this.data);

    this.operacionesService.addOperacione({
      Valor1: this.operando1.toString(),
      Valor2: this.operando2.toString(),
      Operador: this.operador,
      Resultado: this.resultado
    });


    this.operando1 = parseFloat(this.resultado);
    this.operadores  = false;
  }

  
  AgregarLocal(operacion){
    console.log(operacion);
    localStorage.setItem('Datos', JSON.stringify(operacion));
  }
}

