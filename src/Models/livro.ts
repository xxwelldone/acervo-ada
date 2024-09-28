import { Localizavel } from "../Interfaces/localizavel";
import { Publicacao } from "./publicacao";

export class Livro extends Publicacao implements Localizavel {
  public author: string;
  public genre: string;
  public ISBN: string;
  public yearPublished: number;
  public bookcase: string;
  public shelft: string;

  constructor(
    id: number,
    title: string,
    publisher: string,
    language: string,
    author: string,
    genre: string,
    ISBN: string,
    yearPublished: number,
    bookcase: string,
    shelft: string
  ) {
    super(id, title, publisher, language);
    this.author = author;
    this.genre = genre;
    this.ISBN = ISBN;
    this.yearPublished = yearPublished;
    this.bookcase = bookcase;
    this.shelft = shelft;
  }
}
