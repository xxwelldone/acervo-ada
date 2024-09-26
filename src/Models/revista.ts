import { Localizavel } from "../Interfaces/localizavel";
import { Publicacao } from "./publicacao";

export class Revista extends Publicacao implements Localizavel {
  public issue: Date;
  public bookcase: string;
  public shelft: string;
  constructor(
    id: number,
    title: string,
    available: boolean,
    publisher: string,
    language: string,
    issue: Date,
    bookcase: string,
    shelft: string
  ) {
    super(id, title, available, publisher, language);
    this.issue = issue;
    this.bookcase = bookcase;
    this.shelft = shelft;
  }
}
