import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Livro } from '../livro-model';
import { LivroService } from '../livro-service';
import { Genero, GeneroService } from '../genero.services';

@Component({
  selector: 'app-cadastro-livro',
  templateUrl: './cadastro-livro.component.html',
  styleUrls: ['./cadastro-livro.component.css']
})
export class CadastroLivroComponent implements OnInit {
  livro: Livro = {
    id: 0,
    titulo: '',
    autor: '',
    editora: '',
    totalPaginas: 0,
    generoId: 0,
  };
  listaGeneros: Genero[] = [];
  listaLivros: any;

  constructor(
    private livroService: LivroService,
    private generoService: GeneroService,
    private router: Router,
    private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.carregarGeneros();
    this.obterLivro();
  }

  obterLivro(): void {
    const livroId = Number(this.route.snapshot.paramMap.get('id'));
    if (livroId) {
      this.livroService.buscarLivro(livroId).subscribe((livro: Livro) => {
        this.livro = livro;
      });
    }
  }

  salvarLivro() {
    if (this.livro.id) {
      this.livroService.atualizarLivro(this.livro).subscribe(() => {
        this.router.navigate(['/pesquisa']);
      });
    } else {
      const novoId = this.gerarNovoId();
      this.livro.id = novoId;

      this.livroService.salvarLivro(this.livro).subscribe(() => {
        this.router.navigate(['/pesquisa']);
      });
    }
  }
  
  gerarNovoId(): number {
    const proximoId = this.listaLivros.length + 1;
    return proximoId;
  }

  avancarParaPesquisa() {
    this.router.navigate(['/pesquisa']);
  }

  carregarGeneros(): void {
    this.generoService.listaGeneros().subscribe((generos: Genero[]) => {
      this.listaGeneros = generos;
    });

    this.livroService.listarLivros('').subscribe((livros: Livro[]) => {
      this.listaLivros = livros;
    });
  }

  editarLivro(livroId: number): void {
    this.router.navigate(['/editar-livro', livroId]);
  }

  
}
