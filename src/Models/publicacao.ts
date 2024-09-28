import { ItemAcervo } from './ItemAcervo';

export abstract class Publicacao<T> extends ItemAcervo<T> {
    protected _editora: string;

    constructor(titulo: string, anoPublicacao: number, editora: string) {
        super(titulo, anoPublicacao);
        this._editora = editora;
    }

    get editora(): string {
        return this._editora;
    }
}
