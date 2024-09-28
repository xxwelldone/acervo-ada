import { ItemAcervo } from './ItemAcervo';
import { Localizavel } from '../interfaces/localizavel';

export class Midia extends ItemAcervo implements Localizavel {
    protected duracao: number;
    protected localizacao: string;

    constructor(id: number, titulo: string, anoPublicacao: number, duracao: number) {
        super(id, titulo, anoPublicacao);
        this.duracao = duracao;
        this.localizacao = '';
    }

    obterLocalizacao(): string {
        return this.localizacao;
    }

    definirLocalizacao(localizacao: string): void {
        this.localizacao = localizacao;
    }

    obterDetalhes(): string {
        return `Mídia: ${this.titulo}, Duração: ${this.duracao} minutos, Ano: ${this.anoPublicacao}, Localização: ${this.localizacao}`;
    }
}
