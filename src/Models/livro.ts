import { Publicacao } from './publicacao';

export class Livro extends Publicacao {
    private isbn: string;
    private autor: string;

    constructor(id: number, titulo: string, anoPublicacao: number, editora: string, isbn: string, autor: string) {
        super(id, titulo, anoPublicacao, editora);
        this.isbn = isbn;
        this.autor = autor;
    }

    obterDetalhes(): string {
        return `Livro: ${this.titulo} por ${this.autor}, ISBN: ${this.isbn}, Ano: ${this.anoPublicacao}, Editora: ${this.editora}, Localização: ${this.obterLocalizacao()}`;
    }

    getAutor(): string {
        return this.autor;
    }

    getIsbn(): string {
        return this.isbn;
    }
}
