export interface Localizavel {
    obterLocalizacao(): string;
    definirLocalizacao(localizacao: string): void;
}
