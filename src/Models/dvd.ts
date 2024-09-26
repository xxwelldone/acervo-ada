import { Midia } from './midia';

export class DVD extends Midia {
    constructor(
        titulo: string,
        ano: number,
        localizacao: string,
        duracao: number,
        public diretor: string
    ) {
        super(titulo, ano, localizacao, duracao);
    }

    getDetalhes(): string {
        return `Titulo do DVD: ${this.titulo}, Diretor: ${this.diretor}, ${super.getDetalhes()}`;
    }
}
