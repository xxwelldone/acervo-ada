import { ItemAcervo } from "./ItemAcervo";

export class Midia extends ItemAcervo {
  public duration: number;
  public genre: string;

  constructor(
    title: string,
    available: boolean,
    duration: number,
    genre: string
  ) {
    super(title, available);
    this.duration = duration;
    this.genre = genre;
  }
}
