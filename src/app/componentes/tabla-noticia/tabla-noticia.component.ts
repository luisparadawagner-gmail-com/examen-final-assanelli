import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ComponentConsultarService } from 'src/app/Servicio/component-consultar-service';
import { Noticia } from 'src/app/Clase/Noticia';


@Component({
  selector: 'app-tabla-noticia',
  templateUrl: './tabla-noticia.component.html',
  styleUrls: ['./tabla-noticia.component.css']
})
export class TablaNoticiaComponent implements OnInit {

  constructor(private componentConsultarService : ComponentConsultarService,
    private router: Router,
    private rutaA: ActivatedRoute) { }

    displayedColumns: string[] = ['titulo', 'texto' , 'fecha de publicacion' , 'estado', 'editar' , 'editarEstado'];

    dataSource: Noticia [] = [];

    noticiaNuevo: any;

  ngOnInit(): void {
    this.getNoticia();
  }

  getNoticia() {
    this.componentConsultarService.getNoticia().subscribe((noticias) => {
      this.dataSource = noticias;
      this.agregarFila();
  });

}
agregarFila() {
  this.noticiaNuevo = this.rutaA.snapshot.params;
  this.dataSource.push(this.noticiaNuevo);
}
editar(element){
  this.router.navigate(['/crear-noticia-component', element])

}
  editarEstado(element){
    this.router.navigate(['/crear-noticia-component', element])

}

}