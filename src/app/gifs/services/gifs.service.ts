import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SearchGifsResponse, Gif } from '../interfaces/gifs.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  public resultados:Gif[]= [];

  private API:string = 's7NK5DXu3q2FyGvI0n1e9wj0ilmeS5TD';

  private APIurl:string = `https://api.giphy.com/v1/gifs`;

  private _historial:string[] = [];

  get historial(){
    return [...this._historial];
  }
  
  constructor( private http:HttpClient ){

      this._historial = JSON.parse( localStorage.getItem('historial')! ) || [];
      this.resultados = JSON.parse( localStorage.getItem('resultados')! ) || [];

  }

  buscarGifs(query:string){

    query = query.trim().toLowerCase();

    if( !this._historial.includes( query ) ){

      this._historial.unshift(query);

      this._historial = this._historial.splice(0,10);

      localStorage.setItem('historial', JSON.stringify(this._historial))

    }

    const params = new HttpParams()
      .set('api_key',this.API)
      .set('limit','10')
      .set('q',query);

    this.http.get<SearchGifsResponse>(`${this.APIurl}/search`, { params }).subscribe( (resp:any) => {
      this.resultados = resp.data;
      localStorage.setItem('resultados', JSON.stringify( this.resultados ));
    } )

  }

}
