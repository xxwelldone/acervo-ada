import { Midia } from "./midia";

export class DVD extends Midia {
  public type: "Movie" | "Music";
  constructor(
    title: string,
    available: boolean,
    duration: number,
    genre: string,
    type: "Movie" | "Music"
  ) {
    super(title, available, duration, genre);
    this.type = type;
  }
}
