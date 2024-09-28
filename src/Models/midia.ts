import { ItemAcervo } from "./ItemAcervo";

export class Midia extends ItemAcervo {
  public duration: number;
  public genre: string;

  constructor(id: number, title: string, duration: number, genre: string) {
    super(id, title);
    this.duration = duration;
    this.genre = genre;
  }
}
