import { HttpClient } from '@angular/common/http';
import { PrecioIngreso } from './../_model/precio-ingreso';
import { GenericService } from './generic.service';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PrecioIngresoService extends GenericService<PrecioIngreso>{

  constructor(
    protected http: HttpClient
  ) {
    super(
      http,
      `${environment.HOST}/Precio-ingreso`
    );
   }
}
