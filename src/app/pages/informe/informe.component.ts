import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import { DialogoInfomeComponent } from './dialogo-infome/dialogo-infome.component';
import { InformeService } from 'src/app/_service/informe.service';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-informe',
  templateUrl: './informe.component.html',
  styleUrls: ['./informe.component.css']
})
export class InformeComponent implements OnInit {

  form: FormGroup;
  maxFecha: Date = new Date();


  constructor(
    private informeService:InformeService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      'fechaInicio': new FormControl(''),
      'fechaFinal': new FormControl('')
    });
  }

  openDialogInfo(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data=this.form;
    dialogConfig.height='90%';
    this.dialog.open(DialogoInfomeComponent,dialogConfig);
  }
}
