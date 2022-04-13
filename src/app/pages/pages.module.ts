import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { MaterialModule } from '../material/material.module';
import { DialogoInfomeComponent } from './informe/dialogo-infome/dialogo-infome.component';
import { InformeComponent } from './informe/informe.component';
import { InicioComponent } from './inicio/inicio.component';
import { InsumoComponent } from './insumo/insumo.component';
import { LayoutComponent } from './layout/layout.component';
import { PagesRoutingModule } from './pages-routing.module';


@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    PdfViewerModule,
    PagesRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [],
  declarations: [
    InicioComponent,
    InformeComponent,
    InsumoComponent,
    DialogoInfomeComponent,
    LayoutComponent

  ],
  providers: [],
})
export class PagesModule { }
