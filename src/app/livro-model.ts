export interface Genero{
    id: number;
    nome: string;
}

export interface Livro{

    id: number;
    titulo: string;
    autor: string;
    editora: string;
    totalPaginas: number;
    generoId: number;
}

export interface Genero {
    id: number;
    nome: string;
  }