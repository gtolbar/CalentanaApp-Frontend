import { Insumo } from './../../../_model/insumo';
import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { InsumoService } from 'src/app/_service/insumo.service';

@Component({
  selector: 'app-gestionar-insumos',
  templateUrl: './gestionar-insumos.component.html',
  styleUrls: ['./gestionar-insumos.component.css']
})
export class GestionarInsumosComponent implements OnInit {

  encabezado: string[] = ['id','proveedor', 'marca', 'producto', 'comentario', 'accion'];
  public insumo: Insumo[] = [];



  constructor(
    private insumoService: InsumoService
  ) { }

  ngOnInit(): void {
    this.listarInsumo();
  }
  public guardar(){

  }

  private listarInsumo() {
    this.insumoService.listar().subscribe(res => {
      this.insumo = res;
      console.log(res);
    }, error => {
      console.log("Ha ocurrido un error al listar los insumos");
    });
  }

  public editar(){}

  public eliminar(){}

}
