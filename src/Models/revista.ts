import { Publicacao } from './publicacao';

export class Revista extends Publicacao {
    constructor(
        titulo: string,
        ano: number,
        localizacao: string,
        editora: string,
        public numeroEdicao: number
    ) {
        super(titulo, ano, localizacao, editora);
    }

    getDetalhes(): string {
        return `Titulo da Revista: ${this.titulo}, ${super.getDetalhes()}, Edição: ${this.numeroEdicao} `;
    }
}
