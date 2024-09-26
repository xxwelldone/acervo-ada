import { Localizavel } from '../Interfaces/localizavel';

export abstract class ItemAcervo implements Localizavel {
  constructor(public titulo: string, public ano: number, public localizacao: string) { }

  abstract getDetalhes(): string;

  getLocalizacao(): string {
    return this.localizacao;
  }
}
