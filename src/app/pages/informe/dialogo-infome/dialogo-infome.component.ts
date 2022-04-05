import { Component, OnInit } from '@angular/core';
import { EstadoInsumoService } from 'src/app/_service/estadoInsumo.service';

@Component({
  selector: 'app-dialogo-infome',
  templateUrl: './dialogo-infome.component.html',
  styleUrls: ['./dialogo-infome.component.css']
})
export class DialogoInfomeComponent implements OnInit {

  pdfSrc:string;

  constructor(
    private estadoInsumoService:EstadoInsumoService,
  ) { }

  ngOnInit(): void {

    this.estadoInsumoService.descargarInforme().subscribe(data=>{
      let reader = new FileReader();
      reader.onload=(e:any)=>{
        this.pdfSrc=e.target.result;
        console.log(this.pdfSrc);
      }
      reader.readAsArrayBuffer(data);
    });
  }

  descargarInforme(){
    this.estadoInsumoService.descargarInforme().subscribe(data=>{
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
