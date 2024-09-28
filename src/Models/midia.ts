import { ItemAcervo } from './ItemAcervo';

export abstract class Midia<T> extends ItemAcervo<T> {
    protected _duracao: string;

    constructor(titulo: string, anoPublicacao: number, duracao: string) {
        super(titulo, anoPublicacao);
        this._duracao = duracao;
    }

    get duracao(): string {
        return this._duracao;
    }
}
