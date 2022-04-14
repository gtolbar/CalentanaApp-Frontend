import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatDividerModule} from '@angular/material/divider';
import {MatMenuModule} from '@angular/material/menu';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import { DateAdapter, MatNativeDateModule, MAT_DATE_LOCALE } from '@angular/material/core';
import { CustomDateAdapter } from './custom-adapter';
import {MatInputModule} from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import {MatSelectModule} from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [],
  exports: [
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatDividerModule,
    MatMenuModule,
    MatDialogModule,
    MatInputModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatTableModule,
    MatSelectModule,
    MatSnackBarModule,
    BrowserAnimationsModule,
  ],
  imports: [
    CommonModule,
  ],
  providers:[
    { provide: MAT_DATE_LOCALE, useValue: 'es-ES' },
    { provide: DateAdapter, useClass: CustomDateAdapter }
  ]
})
export class MaterialModule { }
