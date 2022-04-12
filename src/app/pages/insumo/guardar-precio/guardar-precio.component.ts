import { PrecioIngreso } from './../../../_model/precioIngreso';
import { PrecioIngresoService } from './../../../_service/precio-ingreso.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-guardar-precio',
  templateUrl: './guardar-precio.component.html',
  styleUrls: ['./guardar-precio.component.css']
})
export class GuardarPrecioComponent implements OnInit {

  public formPrecio: FormGroup;

  constructor(
    public dialog: MatDialog,
    private precioIngresoService: PrecioIngresoService,
    public dialogRef: MatDialogRef<GuardarPrecioComponent>
  ) { }

  ngOnInit(): void {
    this.inicializarFormilario();
  }

  private inicializarFormilario(){
    this.formPrecio = new FormGroup({
      precio: new FormControl(null, Validators.required),
      comentario: new FormControl(null)
    });
  }

  public guardar(){
    let precioIngreso: PrecioIngreso = new PrecioIngreso();

    precioIngreso.precio = this.formPrecio.controls["precio"].value;
    precioIngreso.comentario = this.formPrecio.controls["comentario"].value;

    this.registrar(precioIngreso);
  }

  private registrar(precioIngreso: PrecioIngreso){
    this.precioIngresoService.registrar(precioIngreso).subscribe(res => {
      console.log("Se ha registrado el precio");
      this.dialogRef.close(true);
    },error => {
      console.log("Ha ocurrido un error al registar el precio");
    });
  }


}
