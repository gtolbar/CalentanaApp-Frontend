import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { InformeComponent } from './pages/informe/informe.component';
import { InsumoComponent } from './pages/insumo/insumo.component';
import { HttpClientModule } from '@angular/common/http';

import { PdfViewerModule } from 'ng2-pdf-viewer';
import { DialogoInfomeComponent } from './pages/informe/dialogo-infome/dialogo-infome.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    InformeComponent,
    InsumoComponent,
    DialogoInfomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    PdfViewerModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
