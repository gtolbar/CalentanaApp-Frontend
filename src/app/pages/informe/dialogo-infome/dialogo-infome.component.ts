import { Component, OnInit } from '@angular/core';
import { EstadoInsumoService } from 'src/app/_service/estado-insumo.service';

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

}
