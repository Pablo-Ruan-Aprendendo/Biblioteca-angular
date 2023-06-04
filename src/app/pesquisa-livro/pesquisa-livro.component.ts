import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Livro } from '../livro-model';
import { LivroService } from '../livro-service';

@Component({
  selector: 'app-pesquisa-livro',
  templateUrl: './pesquisa-livro.component.html',
  styleUrls: ['./pesquisa-livro.component.css']
})
export class PesquisaLivroComponent implements OnInit {
  listaLivros: Livro[] = [];
  titulo: string = '';
  deletando: boolean = false;

  constructor(private livroService: LivroService, private router: Router) {}

  ngOnInit(): void {
    this.buscarLivros();
  }

  buscarLivros() {
    this.livroService.listarLivros(this.titulo).subscribe((lista: Livro[]) => {
      this.listaLivros = lista;
    });
  }

  editarLivro(id: number): void {
    this.router.navigate(['/editar-livro', id]);
  }

  excluirLivro(id: number) {
    this.deletando = true;
    this.livroService.deletarLivro(id).subscribe(() => {
      this.listaLivros = this.listaLivros.filter((livro: Livro) => livro.id !== id);
      this.deletando = false;
    });
  }
  
}
