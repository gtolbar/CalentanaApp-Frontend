import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class InformeService {

  private url: string = `${environment.HOST}/informes`;

  constructor(
    private http:HttpClient,
  ) { }

  generarReporte(fecha:string,fecha2:string){
    return this.http.get(`${this.url}/generarReporte?fechaInicio=${fecha}&fechaFinal=${fecha2}`,{
      responseType:'blob' //<---Respuesta en binario
    });
  }

}
