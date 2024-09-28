import { Localizavel } from '../Interfaces/localizavel';

export abstract class ItemAcervo<T> implements Localizavel {
    protected _id: string;
    protected _titulo: string;
    protected _anoPublicacao: number;
    protected _disponivel: boolean;
    estante: string;
    prateleira: number;

    constructor(titulo: string, anoPublicacao: number) {
        this._id = this.gerarId();
        this._titulo = titulo;
        this._anoPublicacao = anoPublicacao;
        this._disponivel = true;
        this.estante = this.gerarEstante();
        this.prateleira = this.gerarPrateleira();
    }

    get id(): string {
        return this._id;
    }

    get titulo(): string {
        return this._titulo;
    }

    get anoPublicacao(): number {
        return this._anoPublicacao;
    }

    get disponivel(): boolean {
        return this._disponivel;
    }

    set disponivel(valor: boolean) {
        this._disponivel = valor;
    }

    private gerarId(): string {
        const letras = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
        const numeros = '0123456789';
        let id = '';
        for (let i = 0; i < 3; i++) {
            id += letras.charAt(Math.floor(Math.random() * letras.length));
        }
        for (let i = 0; i < 3; i++) {
            id += numeros.charAt(Math.floor(Math.random() * numeros.length));
        }
        return id;
    }

    private gerarEstante(): string {
        return String.fromCharCode(65 + Math.floor(Math.random() * 26));
    }

    private gerarPrateleira(): number {
        return Math.floor(Math.random() * 99) + 1;
    }

    abstract obterDetalhes(): T;
}
