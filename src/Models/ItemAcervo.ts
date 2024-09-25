export abstract class ItemAcervo {
  public title: string;
  public available: boolean;

  constructor(title: string, available: boolean) {
    this.title = title;
    this.available = available;
  }
}
