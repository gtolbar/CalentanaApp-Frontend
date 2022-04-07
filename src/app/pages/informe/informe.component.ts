import { Component, OnInit } from '@angular/core';
import { EstadoInsumoService } from 'src/app/_service/estadoInsumo.service';
import { MatDialog, MatDialogConfig} from '@angular/material/dialog';
import { DialogoInfomeComponent } from './dialogo-infome/dialogo-infome.component';


@Component({
  selector: 'app-informe',
  templateUrl: './informe.component.html',
  styleUrls: ['./informe.component.css']
})
export class InformeComponent implements OnInit {

  constructor(
    private estadoInsumoService: EstadoInsumoService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  descargarInforme() {
    this.estadoInsumoService.descargarInforme().subscribe(data => {
      let date: Date = new Date();
      const url = window.URL.createObjectURL(data);
      const a = document.createElement('a');
      a.setAttribute('style', 'display:none');
      document.body.appendChild(a);
      a.href = url;
      a.download = 'Informe-' + date.getDate() + '-' + date.getMonth() + 1 + '-' + date.getFullYear() + '.pdf';
      a.click();
    });
  }

  openDialogInfo(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.height='90%';
    this.dialog.open(DialogoInfomeComponent, dialogConfig);
  }
}
