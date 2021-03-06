import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ConsultaResumenDTO } from '../_dto/consultaResumenDTO';

@Injectable({
  providedIn: 'root'
})
export class InformeService {

  private mensajeCambio = new Subject<string>();

  private url: string = `${environment.HOST}/informes`;

  constructor(
    private http:HttpClient,
  ) { }

  listarResumen(fecha:string,fecha2:string){
    return this.http.get<ConsultaResumenDTO[]>(`${this.url}/listar-resumen?fechaInicio=${fecha}&fechaFinal=${fecha2}`);
  }

  generarReporte(fecha:string,fecha2:string){
    return this.http.get(`${this.url}/generarReporte?fechaInicio=${fecha}&fechaFinal=${fecha2}`,{
      responseType:'blob' //<---Respuesta en binario
    });
  }

  getMensajeCambio() {
    return this.mensajeCambio.asObservable();
  }

  setMensajeCambio(mensaje: string) {
    this.mensajeCambio.next(mensaje);
  }

}
