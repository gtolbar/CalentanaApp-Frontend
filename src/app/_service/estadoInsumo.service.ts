import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { EstadoInsumo } from '../_model/estadoInsumo';
import { GenericService } from './generic.service';

@Injectable({
  providedIn: 'root'
})
export class EstadoInsumoService extends GenericService<EstadoInsumo>{

  private estadoInsumoCambio = new Subject<EstadoInsumo[]>();
  private mensajeCambio = new Subject<String>();

  constructor(
    protected http:HttpClient
  ) {
    super(
      http,
      `${environment.HOST}/estado_insumos`
    );
  }

  descargarInforme(){
    return this.http.get(`${environment.HOST}/estado_insumos/generarReporte`,{
      responseType:'blob' //<---Respuesta en binario
    });
  }

  //get Subjects
  getEstadoInsumoCambio() {
    return this.estadoInsumoCambio.asObservable();
  }

  getMensajeCambio() {
    return this.mensajeCambio.asObservable();
  }

  //set Subjects
  setEstadoInsumoCambio(estadoInsumo: EstadoInsumo[]) {
    this.estadoInsumoCambio.next(estadoInsumo);
  }

  setMensajeCambio(mensaje: string) {
    this.mensajeCambio.next(mensaje);
  }

  

}
