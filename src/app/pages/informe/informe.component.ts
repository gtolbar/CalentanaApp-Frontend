import { Component, OnInit } from '@angular/core';

import {MatDialog, MatDialogConfig} from '@angular/material/dialog';

import { DialogoInfomeComponent } from './dialogo-infome/dialogo-infome.component';
import { InformeService } from 'src/app/_service/informe.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Chart, registerables } from 'chart.js';
import * as moment from 'moment';


@Component({
  selector: 'app-informe',
  templateUrl: './informe.component.html',
  styleUrls: ['./informe.component.css']
})
export class InformeComponent implements OnInit {

  form: FormGroup;
  maxFecha: Date = new Date();
  chart: any;

  constructor(

    private informeService:InformeService,
    public dialog: MatDialog,


  ) {
    Chart.register(...registerables);
  }


  ngOnInit(): void {

    this.form = new FormGroup({
      'fechaInicio': new FormControl(moment(this.maxFecha).subtract(7,'day').format('YYYY-MM-DD')),
      'fechaFinal': new FormControl(moment(this.maxFecha).format('YYYY-MM-DD'))

    });
    this.generarCanvas();

  }

  openDialogInfo(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data=this.form;
    dialogConfig.height='90%';
    this.dialog.open(DialogoInfomeComponent,dialogConfig);
  }

  prueba(){
    this.chart.destroy();
    this.generarCanvas();
  }

  generarCanvas(){
    let fecha1 =this.form.value['fechaInicio'];
    fecha1=fecha1 != "" ? moment(fecha1).format('YYYY-MM-DD') : '';
    let fecha2 = this.form.value['fechaFinal'];
    fecha2=fecha2 != "" ? moment(fecha2).format('YYYY-MM-DD') : '';
    this.informeService.listarResumen(fecha1,fecha2).subscribe(data=>{
      let cantidades= data.map(x=>x.cantidad);
      let fechas= data.map(x=>x.fecha);
      console.log(cantidades);
      console.log(fechas);
      this.chart = new Chart('canvas', {
        type: 'line',
        data: {
          labels: fechas,
          datasets: [
            {
              label: 'Cantidad',
              data: cantidades,
              borderColor: '#3cba9f',
              fill: false,
              tension: 0.1
            }
          ]
        },
      });

    });
  }

}
