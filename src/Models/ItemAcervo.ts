export abstract class ItemAcervo {
  public title: string;
  public available: boolean;
  public id: number;

  constructor(id: number, title: string) {
    this.id = id;
    this.title = title;
    this.available = true;
  }
}
