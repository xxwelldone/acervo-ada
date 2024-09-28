import { Publicacao } from './publicacao';

export class Revista extends Publicacao {
    private edicao: string;

    constructor(id: number, titulo: string, anoPublicacao: number, editora: string, edicao: string) {
        super(id, titulo, anoPublicacao, editora);
        this.edicao = edicao;
    }

    obterDetalhes(): string {
        return `Revista: ${this.titulo}, Edição: ${this.edicao}, Ano: ${this.anoPublicacao}, Editora: ${this.editora}, Localização: ${this.obterLocalizacao()}`;
    }

    getEdicao(): string {
        return this.edicao;
    }
}
