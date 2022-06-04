import { Component } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-gifs-resultados',
  templateUrl: './gifs-resultados.component.html',
  styles: [
  ]
})
export class GifsResultadosComponent{

  get resultados(){
    return this.gifsService.resultados;
  }

  constructor( private gifsService:GifsService) { }

}
