import { ItemAcervo } from './ItemAcervo';

export abstract class Publicacao extends ItemAcervo {
    constructor(
        titulo: string,
        ano: number,
        localizacao: string,
        public editora: string
    ) {
        super(titulo, ano, localizacao);
    }

    getDetalhes(): string {
        return `Publicado em: ${this.ano}, Editora: ${this.editora}, Localização: ${this.localizacao}`;
    }
}
