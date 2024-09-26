import { ItemAcervo } from "./ItemAcervo";

export class Publicacao extends ItemAcervo {
  public publisher: string;
  public language: string;

  constructor(
    id: number,
    title: string,
    available: boolean,
    publisher: string,
    language: string
  ) {
    super(id, title, available);
    this.publisher = publisher;
    this.language = language;
  }
}
