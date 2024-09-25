import { Publicacao } from "./publicacao";

export class Revista extends Publicacao {
  public issue: Date;
  constructor(
    title: string,
    available: boolean,
    publisher: string,
    language: string,
    issue: Date
  ) {
    super(title, available, publisher, language);
    this.issue = issue;
  }
}
