import { ItemAcervo } from './ItemAcervo';

export class Revista extends ItemAcervo {
    constructor(titulo: string, ano: number, localizacao: string, public editora: string, public numeroEdicao: number) {
        super(titulo, ano, localizacao);
    }

    getDetalhes(): string {
        return `Revista: ${this.titulo}, Edição: ${this.numeroEdicao}, publicado em ${this.ano}, editora: ${this.editora}, localizado em: ${this.localizacao}`;
    }
}
