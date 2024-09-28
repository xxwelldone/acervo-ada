import { Midia } from './midia';

export class DVD extends Midia {
    private diretor: string;

    constructor(id: number, titulo: string, anoPublicacao: number, duracao: number, diretor: string) {
        super(id, titulo, anoPublicacao, duracao);
        this.diretor = diretor;
    }

    obterDetalhes(): string {
        return `DVD: ${this.titulo}, Diretor: ${this.diretor}, Duração: ${this.duracao} minutos, Ano: ${this.anoPublicacao}, Localização: ${this.obterLocalizacao()}`;
    }
}
