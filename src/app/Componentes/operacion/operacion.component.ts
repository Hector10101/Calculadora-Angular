import { Component, OnInit, Input } from '@angular/core';
import { Operacion } from 'src/app/Modelos/Operacion';

@Component({
  selector: 'app-operacion',
  templateUrl: './operacion.component.html',
  styleUrls: ['./operacion.component.scss']
})
export class OperacionComponent implements OnInit {
  @Input() operacion: Operacion;
  constructor() { }

  ngOnInit(): void {
  }

}
