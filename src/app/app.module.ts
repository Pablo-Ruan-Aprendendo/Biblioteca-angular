import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PesquisaLivroComponent } from './pesquisa-livro/pesquisa-livro.component';
import { CadastroLivroComponent } from './cadastro-livro/cadastro-livro.component';

@NgModule({
  declarations: [
    AppComponent,
    PesquisaLivroComponent,
    CadastroLivroComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
