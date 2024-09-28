import { Publicacao } from './publicacao';

interface DetalhesRevista {
    id: string;
    titulo: string;
    anoPublicacao: number;
    editora: string;
    edicao: number;
}

export class Revista extends Publicacao<DetalhesRevista> {
    private _edicao: number;

    constructor(titulo: string, anoPublicacao: number, editora: string, edicao: number) {
        super(titulo, anoPublicacao, editora);
        this._edicao = edicao;
    }

    get edicao(): number {
        return this._edicao;
    }

    obterDetalhes(): DetalhesRevista {
        return {
            id: this.id,
            titulo: this.titulo,
            anoPublicacao: this.anoPublicacao,
            editora: this.editora,
            edicao: this.edicao
        };
    }
}
