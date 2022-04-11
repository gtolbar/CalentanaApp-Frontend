import { Insumo } from './../../../_model/insumo';
import { InsumoService } from './../../../_service/insumo.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-guardar-insumos',
  templateUrl: './guardar-insumos.component.html',
  styleUrls: ['./guardar-insumos.component.css']
})
export class GuardarInsumosComponent implements OnInit {

  public formInsumos: FormGroup;

  constructor(
    public dialog: MatDialog,
    private servicioInsumo: InsumoService,
    public dialogRef: MatDialogRef<GuardarInsumosComponent>
  ) { }

  ngOnInit(): void {
    this.inicializarFormulario();
  }

  private inicializarFormulario() {
    this.formInsumos = new FormGroup({ // Formulario para vincular las variables al HTML
      proveedor: new FormControl(null, Validators.required), // Se valida que el campo este diligenciado
      marca: new FormControl(null, Validators.required),
      producto: new FormControl(null, Validators.required)
    });
  }

  public guardar(){
    let insumo: Insumo = new Insumo();

    insumo.proveedor = this.formInsumos.controls["proveedor"].value;
    insumo.marca = this.formInsumos.controls["marca"].value;
    insumo.producto = this.formInsumos.controls["producto"].value;
    //insumo.comentario = this.formInsumos.controls["comentario"].value;

    this.registrar(insumo);
  }

  public registrar(insumo: Insumo){
    this.servicioInsumo.registrar(insumo).subscribe(res => {
      console.log("Se ha registrado el insumo");
      this.dialogRef.close(true);
    },error => {
      //console.log("Ha ocurrido un error al registar el insumo")
    });
  }

}
