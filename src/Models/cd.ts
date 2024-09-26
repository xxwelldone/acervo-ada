import { Midia } from './midia';

export class CD extends Midia {
    constructor(
        titulo: string,
        ano: number,
        localizacao: string,
        duracao: number,
        public artista: string
    ) {
        super(titulo, ano, localizacao, duracao);
    }

    getDetalhes(): string {
        return `Titulo do CD: ${this.titulo}, Artista: ${this.artista}, ${super.getDetalhes()}`;
    }
}
