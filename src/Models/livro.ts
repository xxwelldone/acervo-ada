import { ItemAcervo } from './ItemAcervo';

export class Livro extends ItemAcervo {
    constructor(titulo: string, ano: number, localizacao: string, public editora: string, public isbn: string) {
        super(titulo, ano, localizacao);
    }

    getDetalhes(): string {
        return `Livro: ${this.titulo}, publicado em ${this.ano}, ISBN: ${this.isbn}, editora: ${this.editora}, localizado em: ${this.localizacao}`;
    }
}
