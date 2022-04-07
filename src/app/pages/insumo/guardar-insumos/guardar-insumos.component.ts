import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-guardar-insumos',
  templateUrl: './guardar-insumos.component.html',
  styleUrls: ['./guardar-insumos.component.css']
})
export class GuardarInsumosComponent implements OnInit {

  public formInsumos: FormGroup;


  constructor(
    public dialog: MatDialog,
  ) { }

  ngOnInit(): void {
  }

  private inicializarFormulario() {
    this.formInsumos = new FormGroup({ // Formulario para vincular las variables al HTML
      proveedor: new FormControl(null, Validators.required), // Se valida que el campo este diligenciado
      marca: new FormControl(null, Validators.required),
      producto: new FormControl(null, Validators.required)
    });
  }

  public guardar(){

  }

}
