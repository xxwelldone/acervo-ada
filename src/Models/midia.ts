import { ItemAcervo } from './ItemAcervo';

export abstract class Midia extends ItemAcervo {
    constructor(
        titulo: string,
        ano: number,
        localizacao: string,
        public duracao: number
    ) {
        super(titulo, ano, localizacao);
    }

    getDetalhes(): string {
        return `Duração: ${this.duracao} minutos, Ano de lançamento: ${this.ano}, Localização: ${this.localizacao}`;
    }
}
