import { Component, OnInit } from '@angular/core';
import  { FormBuilder } from '@angular/forms';

import { ActivatedRoute, Router } from '@angular/router';
import { Noticia } from 'src/app/Clase/Noticia';

@Component({
  selector: 'app-crear-noticia',
  templateUrl: './crear-noticia.component.html',
  styleUrls: ['./crear-noticia.component.css']
})
export class CrearNoticiaComponent implements OnInit {

  constructor(private fb: FormBuilder,
    private rutaActiva: ActivatedRoute,
    private router: Router) { }

    noticias: Noticia;
    registro: any;

    noticiaForm = this.fb.group({

    })

  ngOnInit(): void {this.registro = this.rutaActiva.snapshot.params;
  
      if (Object.keys(this.registro).length) {
        this.noticias = this.registro;
      }
  
      this.initForm(this.noticias);
      this.editForm(this.noticias);
    }
  
    initForm(editarNoticia: Noticia) {
      this.noticiaForm = this.fb.group({
        titulo: [editarNoticia ? editarNoticia.titulo: ''],
        texto: [editarNoticia ? editarNoticia.texto : ''],
        fechaPublicacion: [editarNoticia ? editarNoticia.fechaPublicacion : ''],
        estado: [editarNoticia ? editarNoticia.estado : ''],
                
      });
    }

    editForm(editarEstadoNoticia: Noticia) {
      this.noticiaForm = this.fb.group({
        titulo: [''],
        texto: [''],
        fechaPublicacion: [''],
        estado: [editarEstadoNoticia ? editarEstadoNoticia.estado : ''],
                
      });
    }

    
  
    submit(){
      this.noticiaForm.value;
      this.noticias = this.noticiaForm.value;
      this.router.navigate(['/tabla-noticia-component', this.noticias]);   
    }
  }
  