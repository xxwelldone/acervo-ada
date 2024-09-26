import { ItemAcervo } from "./ItemAcervo";

export class Midia extends ItemAcervo {
  public duration: number;
  public genre: string;

  constructor(
    id: number,
    title: string,
    available: boolean,
    duration: number,
    genre: string
  ) {
    super(id, title, available);
    this.duration = duration;
    this.genre = genre;
  }
}
