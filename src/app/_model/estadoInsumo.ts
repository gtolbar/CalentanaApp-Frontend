import { Insumo } from "./insumo";
import { PrecioIngreso } from "./precioIngreso";

export class EstadoInsumo{
  id:number;
  cantidad:number;
  fecha:string;
  accion:boolean;
  comentario:string;
  idInsumos:Insumo;
  idPrecioIngresos:PrecioIngreso;
}
