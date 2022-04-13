import { Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';
import { InformeComponent } from './informe/informe.component';
import { InicioComponent } from './inicio/inicio.component';
import { InsumoComponent } from './insumo/insumo.component';

export const routes: Routes = [
  {path:'inicio', component: InicioComponent},
  { path: 'insumo', component: InsumoComponent},
  { path: 'informe', component: InformeComponent},

]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
