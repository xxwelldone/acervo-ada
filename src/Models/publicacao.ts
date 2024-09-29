import { ItemAcervo } from "./ItemAcervo";

export class Publicacao extends ItemAcervo {
  public publisher: string;
  public language: string;

  constructor(id: number, title: string, publisher: string, language: string) {
    super(id, title);
    this.publisher = publisher;
    this.language = language;
  }
}
