import { ItemAcervo } from './ItemAcervo';

export class CD extends ItemAcervo {
    constructor(titulo: string, ano: number, localizacao: string, public duracao: number, public artista: string) {
        super(titulo, ano, localizacao);
    }

    getDetalhes(): string {
        return `CD: ${this.titulo}, duração de ${this.duracao} minutos, Artista: ${this.artista}, localizado em: ${this.localizacao}`;
    }
}
