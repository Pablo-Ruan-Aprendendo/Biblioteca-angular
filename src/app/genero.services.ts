import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Genero } from './livro-model';

@Injectable({
  providedIn: 'root'
})
export class GeneroService {
  private urlBase = 'http://localhost:3000/generos'; 

  constructor(private httpClient: HttpClient) {}

  listaGeneros(): Observable<Genero[]> {
    return this.httpClient.get<Genero[]>(this.urlBase);
  }
}
export { Genero };
