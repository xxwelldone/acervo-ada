import { Publicacao } from './publicacao';

export class Livro extends Publicacao {
    constructor(
        titulo: string,
        ano: number,
        localizacao: string,
        editora: string,
        public isbn: string
    ) {
        super(titulo, ano, localizacao, editora);
    }

    getDetalhes(): string {
        return `Titulo do Livro: ${this.titulo}, ${super.getDetalhes()}, ISBN: ${this.isbn}`;
    }
}
