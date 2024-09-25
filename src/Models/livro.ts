import { Publicacao } from "./publicacao";

export class Livro extends Publicacao {
  public author: string;
  public genre: string;
  public ISBN: string;
  public yearPublished: number;

  constructor(
    title: string,
    available: boolean,
    publisher: string,
    language: string,
    author: string,
    genre: string,
    ISBN: string,
    yearPublished: number
  ) {
    super(title, available, publisher, language);
    this.author = author;
    this.genre = genre;
    this.ISBN = ISBN;
    this.yearPublished = yearPublished;
  }
}
