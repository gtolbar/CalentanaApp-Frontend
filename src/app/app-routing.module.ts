import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InformeComponent } from './pages/informe/informe.component';
import { InsumoComponent } from './pages/insumo/insumo.component';

const routes: Routes = [
  { path: 'insumo', component: InsumoComponent},
  { path: 'informe', component: InformeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
