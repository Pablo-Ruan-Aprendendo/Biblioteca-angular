import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Livro, Genero } from './livro-model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LivroService {

  private apiUrl = 'http://localhost:3000/livros';

  constructor(
    private httpClient: HttpClient
  ) { }

  getGeneros(): Observable<Genero[]> {
    return this.httpClient.get<Genero[]>(this.apiUrl);
  }

  listarLivros(titulo: string) {
    let params = new HttpParams();
    if (titulo) {
      params = params.append('titulo_like', titulo);
    }
    return this.httpClient.get<Livro[]>(this.urlBase, { params });
  }

  buscarLivro(id: number) {
    return this.httpClient.get<Livro>(this.urlBase + "/" + id);
  }

  salvarLivro(livro: Livro) {
    return this.httpClient.post<Livro>(this.urlBase, livro);
  }

  atualizarLivro(livro: Livro) {
    return this.httpClient.put<Livro>(this.urlBase + "/" + livro.id, livro);
  }

  deletarLivro(id: number) {
    const url = `${this.urlBase}/${id}`;
    return this.httpClient.delete<Livro>(url);
  }

  get urlBase(): string {
    return "http://localhost:3000/livros";
  }
}
