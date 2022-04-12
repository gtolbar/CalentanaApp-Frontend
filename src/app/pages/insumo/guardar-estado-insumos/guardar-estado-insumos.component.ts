import { EstadoInsumoService } from './../../../_service/estadoInsumo.service';
import { EstadoInsumo } from './../../../_model/estadoInsumo';
import { InsumoService } from './../../../_service/insumo.service';
import { PrecioIngresoService } from './../../../_service/precio-ingreso.service';
import { PrecioIngreso } from './../../../_model/precioIngreso';
import { Insumo } from './../../../_model/insumo';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-guardar-estado-insumos',
  templateUrl: './guardar-estado-insumos.component.html',
  styleUrls: ['./guardar-estado-insumos.component.css']
})
export class GuardarEstadoInsumosComponent implements OnInit {

  public formEstadoInsumos: FormGroup;
  public selectInsumo: Insumo[] = [];
  public selectPrecioIngreso: PrecioIngreso[] = [];

  constructor(
    private insumoService: InsumoService,
    private precioIngresoService: PrecioIngresoService,
    private estadoInsumoService: EstadoInsumoService,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.inicializarFormulario();
    this.cargarInsumo();
    this.cargarPrecio();
  }

  public inicializarFormulario(){
    this.formEstadoInsumos = new FormGroup({
      accion: new FormControl(null, Validators.required),
      cantidad: new FormControl(null, Validators.required),
      idInsumo: new FormControl(null, Validators.required),
      idPrecioIngreso: new FormControl(null, Validators.required),
      fecha: new FormControl(null, Validators.required),
      comentario: new FormControl(null)
    });
  }

  public cargarInsumo(){
    this.insumoService.listar().subscribe(res =>{
      this.selectInsumo = res;
    },error =>{
      console.log("Ha ocurrido un error al cargar los insumos");
    });
  }

  public cargarPrecio(){
    this.precioIngresoService.listar().subscribe(res =>{
      this.selectPrecioIngreso = res;
    },error =>{
      console.log("Ha ocurrido un error al cargar los precios");
    });
  }

  public guardar(){
    let insumo: Insumo = new Insumo();
    let precioIngreso: PrecioIngreso = new PrecioIngreso();
    let estadoInsumo: EstadoInsumo = new EstadoInsumo();

    insumo.id = this.formEstadoInsumos.controls["idInsumo"].value;
    precioIngreso.id = this.formEstadoInsumos.controls["idPrecioIngreso"].value;

    estadoInsumo.accion = true;
    estadoInsumo.cantidad = this.formEstadoInsumos.controls["cantidad"].value;
    estadoInsumo.idInsumos = insumo;
    estadoInsumo.idPrecioIngresos = precioIngreso;
    estadoInsumo.fecha = this.formEstadoInsumos.controls["fecha"].value;
    estadoInsumo.comentario = this.formEstadoInsumos.controls["comentario"].value;

    this.registrar(estadoInsumo);
  }

  public registrar(estadoInsumo: EstadoInsumo){
    this.estadoInsumoService.registrar(estadoInsumo).subscribe(res =>{

    },error =>{
      console.log("Ha ocurrido un error al registrar la accion");
    });
  }



}
