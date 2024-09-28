import { Midia } from './midia';

interface DetalhesCD {
    id: string;
    titulo: string;
    anoPublicacao: number;
    duracao: string;
    artista: string;
}

export class CD extends Midia<DetalhesCD> {
    private _artista: string;

    constructor(titulo: string, anoPublicacao: number, duracao: string, artista: string) {
        super(titulo, anoPublicacao, duracao);
        this._artista = artista;
    }

    get artista(): string {
        return this._artista;
    }

    obterDetalhes(): DetalhesCD {
        return {
            id: this.id,
            titulo: this.titulo,
            anoPublicacao: this.anoPublicacao,
            duracao: this.duracao,
            artista: this.artista
        };
    }
}
