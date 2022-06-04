import { Component, ViewChild, ElementRef } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-gifs-busqueda',
  templateUrl: './gifs-busqueda.component.html',
})
export class GifsBusquedaComponent{

  @ViewChild('txtBuscar') txtBuscar!:ElementRef<HTMLInputElement>;

  constructor(private gifsService: GifsService) {}
  
  buscar(){
    const valor = this.txtBuscar.nativeElement.value;

    if(valor.trim().length===0){
      return;
    }

    this.gifsService.buscarGifs(valor);

    this.txtBuscar.nativeElement.value = '';
  }

}
