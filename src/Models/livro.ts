import { Publicacao } from './publicacao';

interface DetalhesLivro {
    id: string;
    titulo: string;
    autor: string;
    anoPublicacao: number;
    editora: string;
    isbn: string;
    edicao: number;
}

export class Livro extends Publicacao<DetalhesLivro> {
    private _autor: string;
    private _isbn: string;
    private _edicao: number;

    constructor(titulo: string, autor: string, anoPublicacao: number, editora: string, isbn: string, edicao: number) {
        super(titulo, anoPublicacao, editora);
        this._autor = autor;
        this._isbn = isbn;
        this._edicao = edicao;
    }

    get autor(): string {
        return this._autor;
    }

    get isbn(): string {
        return this._isbn;
    }

    get edicao(): number {
        return this._edicao;
    }

    obterDetalhes(): DetalhesLivro {
        return {
            id: this.id,
            titulo: this.titulo,
            autor: this.autor,
            anoPublicacao: this.anoPublicacao,
            editora: this.editora,
            isbn: this.isbn,
            edicao: this.edicao
        };
    }
}
