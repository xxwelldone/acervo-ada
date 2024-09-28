import { Midia } from './midia';

export class CD extends Midia {
    private artista: string;

    constructor(id: number, titulo: string, anoPublicacao: number, duracao: number, artista: string) {
        super(id, titulo, anoPublicacao, duracao);
        this.artista = artista;
    }

    obterDetalhes(): string {
        return `CD: ${this.titulo} por ${this.artista}, Duração: ${this.duracao} minutos, Ano: ${this.anoPublicacao}, Localização: ${this.obterLocalizacao()}`;
    }
}
