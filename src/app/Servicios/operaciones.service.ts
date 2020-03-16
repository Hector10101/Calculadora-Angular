import { Injectable } from '@angular/core';
import { Operacion } from '../Modelos/Operacion';


@Injectable({
  providedIn: 'root'
})
export class OperacionesService {
  operaciones: Operacion[];
  constructor() {
    this.operaciones =[]
  }
  getOperaciones(){
    if(localStorage.getItem('DataOperacion')=== null){
      return this.operaciones;
    }else{
      this.operaciones = JSON.parse(localStorage.getItem('DataOperacion'));
      return this.operaciones; 
    }
  }

  addOperacione(operacion: Operacion){
    this.operaciones.push(operacion);
    let operaciones: Operacion[] = [];
    if(localStorage.getItem('DataOperacion')=== null){
      operaciones.push(operacion);
      localStorage.setItem('DataOperacion', JSON.stringify(operaciones));
    }else{
      operaciones = JSON.parse(localStorage.getItem('DataOperacion'));

      operaciones.push(operacion);
      localStorage.setItem('DataOperacion', JSON.stringify(operaciones));

    }
  }
}
