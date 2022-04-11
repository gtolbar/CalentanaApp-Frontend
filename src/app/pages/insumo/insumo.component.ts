import { GuardarInsumosComponent } from './guardar-insumos/guardar-insumos.component';
import { GuardarPrecioComponent } from './guardar-precio/guardar-precio.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-insumo',
  templateUrl: './insumo.component.html',
  styleUrls: ['./insumo.component.css']
})
export class InsumoComponent implements OnInit {

  constructor(
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  public openDialogAgregarInsumo(){
    let dialogRef = this.dialog.open(GuardarInsumosComponent, {
    });
  }

  public openDialogAgregarPrecio(){
    let dialogRef = this.dialog.open(GuardarPrecioComponent, {
    });
  }

}
