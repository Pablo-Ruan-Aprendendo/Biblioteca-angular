import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroLivroComponent } from './cadastro-livro/cadastro-livro.component';
import { PesquisaLivroComponent } from './pesquisa-livro/pesquisa-livro.component';

const routes: Routes = [
  {path: 'new', component: CadastroLivroComponent },
  { path: '', component: PesquisaLivroComponent },
  { path: 'pesquisa', component: PesquisaLivroComponent },
  { path: 'editar-livro/:id', component: CadastroLivroComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
