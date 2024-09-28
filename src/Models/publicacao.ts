import { ItemAcervo } from './ItemAcervo';
import { Localizavel } from '../interfaces/localizavel';

export class Publicacao extends ItemAcervo implements Localizavel {
    protected editora: string;
    protected localizacao: string;

    constructor(id: number, titulo: string, anoPublicacao: number, editora: string) {
        super(id, titulo, anoPublicacao);
        this.editora = editora;
        this.localizacao = '';
    }

    obterLocalizacao(): string {
        return this.localizacao;
    }

    definirLocalizacao(localizacao: string): void {
        this.localizacao = localizacao;
    }

    obterDetalhes(): string {
        return `Publicação: ${this.titulo}, Editora: ${this.editora}, Ano: ${this.anoPublicacao}, Localização: ${this.localizacao}`;
    }
}
