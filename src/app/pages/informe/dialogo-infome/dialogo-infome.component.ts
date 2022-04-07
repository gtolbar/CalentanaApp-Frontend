import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { InformeService } from 'src/app/_service/informe.service';
import * as moment from 'moment';

@Component({
  selector: 'app-dialogo-infome',
  templateUrl: './dialogo-infome.component.html',
  styleUrls: ['./dialogo-infome.component.css']
})
export class DialogoInfomeComponent implements OnInit {

  pdfSrc:string;

  constructor(
    private informeService:InformeService,
    @Inject(MAT_DIALOG_DATA) private data: FormGroup
  ) { }

  ngOnInit(): void {

    let fecha1 =this.data.value['fechaInicio'];
    fecha1=fecha1 != null ? moment(fecha1).format('YYYY-MM-DD') : '';
    let fecha2 = this.data.value['fechaFinal'];
    fecha2=fecha2 != null ? moment(fecha2).format('YYYY-MM-DD') : '';
    this.informeService.generarReporte(fecha1,fecha2).subscribe(data=>{
      let reader = new FileReader();
      reader.onload=(e:any)=>{
        this.pdfSrc=e.target.result;
        console.log(this.pdfSrc);
      }
      reader.readAsArrayBuffer(data);
    });

  }

  descargarInforme(){
    let fecha1 =this.data.value['fechaInicio'];
    fecha1=fecha1 != null ? moment(fecha1).format('YYYY-MM-DD') : '';
    let fecha2 = this.data.value['fechaFinal'];
    fecha2=fecha2 != null ? moment(fecha2).format('YYYY-MM-DD') : '';

    this.informeService.generarReporte(fecha1,fecha2).subscribe(data=>{
      let date: Date = new Date();
      const url = window.URL.createObjectURL(data);
      const a= document.createElement('a');
      a.setAttribute('style','display:none');
      document.body.appendChild(a);
      a.href=url;
      a.download='Informe-'+date.getDate()+'-'+date.getMonth()+1+'-'+date.getFullYear()+'.pdf';
      a.click();
    });
  }

}
