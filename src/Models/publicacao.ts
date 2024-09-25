import { ItemAcervo } from "./ItemAcervo";

export class Publicacao extends ItemAcervo {
  public publisher: string;
  public language: string;

  constructor(
    title: string,
    available: boolean,
    publisher: string,
    language: string
  ) {
    super(title, available);
    this.publisher = publisher;
    this.language = language;
  }
}
