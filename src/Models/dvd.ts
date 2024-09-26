import { Localizavel } from "../Interfaces/localizavel";
import { Midia } from "./midia";

export class DVD extends Midia implements Localizavel {
  public type: "Movie" | "Music";
  public bookcase: string;
  public shelft: string;
  constructor(
    id: number,
    title: string,
    available: boolean,
    duration: number,
    genre: string,
    type: "Movie" | "Music",
    bookcase: string,
    shelft: string
  ) {
    super(id, title, available, duration, genre);
    this.type = type;
    this.bookcase = bookcase;
    this.shelft = shelft;
  }
}
