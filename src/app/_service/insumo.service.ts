import { Insumo } from './../_model/insumo';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GenericService } from './generic.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class InsumoService extends GenericService<Insumo>{

  constructor(
    protected http:HttpClient
  ) {
    super(
      http,
      `${environment.HOST}/insumos`
    );
  }
}
