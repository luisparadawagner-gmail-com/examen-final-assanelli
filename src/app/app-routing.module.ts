import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComponentConsultarService } from './Servicio/component-consultar-service';
import { CrearNoticiaComponent } from './componentes/crear-noticia/crear-noticia.component';
import { TablaNoticiaComponent } from './componentes/tabla-noticia/tabla-noticia.component';


const routes: Routes = [
  { path: 'crear-noticia-component' , component: CrearNoticiaComponent },
  { path: 'tabla-noticia-component' , component: TablaNoticiaComponent },
  { path: '', redirectTo: 'tabla-noticia-component', pathMatch: 'full' },
  { path: '**', component: TablaNoticiaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
