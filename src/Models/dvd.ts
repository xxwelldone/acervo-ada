import { Midia } from './midia';

interface DetalhesDVD {
    id: string;
    titulo: string;
    anoPublicacao: number;
    duracao: string;
    diretor: string;
}

export class DVD extends Midia<DetalhesDVD> {
    private _diretor: string;

    constructor(titulo: string, anoPublicacao: number, duracao: string, diretor: string) {
        super(titulo, anoPublicacao, duracao);
        this._diretor = diretor;
    }

    get diretor(): string {
        return this._diretor;
    }

    obterDetalhes(): DetalhesDVD {
        return {
            id: this.id,
            titulo: this.titulo,
            anoPublicacao: this.anoPublicacao,
            duracao: this.duracao,
            diretor: this.diretor
        };
    }
}
