import { Component, OnInit} from '@angular/core';
import { OperacionesService } from 'src/app/Servicios/operaciones.service';
import { Operacion } from 'src/app/Modelos/Operacion';

@Component({
  selector: 'app-historial',
  templateUrl: './historial.component.html',
  styleUrls: ['./historial.component.scss']
})
export class HistorialComponent implements OnInit {

  operacion: Operacion[];
  constructor( public operacionService: OperacionesService) { }

  ngOnInit(): void {
    this.operacion = this.operacionService.getOperaciones();
  }

}
