import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GifsPageComponent } from './gifs-page/gifs-page.component';
import { GifsBusquedaComponent } from './gifs-busqueda/gifs-busqueda.component';
import { GifsResultadosComponent } from './gifs-resultados/gifs-resultados.component';



@NgModule({
  declarations: [
    GifsPageComponent,
    GifsBusquedaComponent,
    GifsResultadosComponent
  ],
  exports: [
    GifsPageComponent
  ],
  imports: [
    CommonModule
  ]
})
export class GifsModule { }
