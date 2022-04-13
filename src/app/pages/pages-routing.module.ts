import { Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';
import { InformeComponent } from './informe/informe.component';
import { InicioComponent } from './inicio/inicio.component';
import { InsumoComponent } from './insumo/insumo.component';
import { GuardService } from '../_service/guard.service';

export const routes: Routes = [
  {path:'inicio', component: InicioComponent, canActivate:[GuardService]},
  { path: 'insumo', component: InsumoComponent, canActivate:[GuardService]},
  { path: 'informe', component: InformeComponent, canActivate:[GuardService]},

]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
