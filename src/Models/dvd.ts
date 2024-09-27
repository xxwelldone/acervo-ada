import { Localizavel } from "../Interfaces/localizavel";
import { Midia } from "./midia";

export class DVD extends Midia implements Localizavel {
  public type: string;
  public bookcase: string;
  public shelft: string;
  constructor(
    id: number,
    title: string,
    duration: number,
    genre: string,
    type: string,
    bookcase: string,
    shelft: string
  ) {
    super(id, title, duration, genre);
    this.type = type;
    this.bookcase = bookcase;
    this.shelft = shelft;
  }
}
