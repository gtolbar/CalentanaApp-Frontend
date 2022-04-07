// import { EstadoInsumoService } from './../../../_service/estado-insumo.service';
import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
// import { EstadoInsumo } from '../../../_model/estado_insumo';
import { FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-gestionar-insumos',
  templateUrl: './gestionar-insumos.component.html',
  styleUrls: ['./gestionar-insumos.component.css']
})
export class GestionarInsumosComponent implements OnInit {

  // public insumos: EstadoInsumo[] = [];

  constructor(
   // public formInsumo: FormGroup,
    public dialog: MatDialog,
  //  private servicioEstadoInsumo: EstadoInsumoService
  ) { }

  ngOnInit(): void {

  }
  public guardar(){

  }

}
