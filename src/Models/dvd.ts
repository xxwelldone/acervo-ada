import { ItemAcervo } from './ItemAcervo';

export class DVD extends ItemAcervo {
    constructor(titulo: string, ano: number, localizacao: string, public duracao: number, public diretor: string) {
        super(titulo, ano, localizacao);
    }

    getDetalhes(): string {
        return `DVD: ${this.titulo}, duração de ${this.duracao} minutos, Diretor: ${this.diretor}, localizado em: ${this.localizacao}`;
    }
}
