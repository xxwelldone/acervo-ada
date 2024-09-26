import { Localizavel } from "../Interfaces/localizavel";
import { ItemAcervo } from "./ItemAcervo";

export class Biblioteca<T extends ItemAcervo> {
  collection: T[] = [];
  private id = 1;

  private normalizeText(text: string): string {
    return text.toLocaleUpperCase();
  }
  public generateID(): number {
    return this.id++;
  }
  create(item: T): T {
    item.title = this.normalizeText(item.title);
    this.collection.push(item);
    return item;
  }
  read(): void {
    this.collection.forEach((item) => console.log(item));
  }
  update(item: T, id: number) {
    const index = this.collection.findIndex((item) => item.id);
    const obj = this.collection[index];
    if (id === obj.id) {
      this.collection[index] = item;
    } else {
      console.log("ID passado não corresponde ao item informado");
    }
  }
  delete(id: number) {
    const index = this.collection.findIndex((item) => item.id === id);
    const obj = this.collection[index];
    if (obj.available) {
      this.collection.slice(index, 1);
    } else {
      console.log("Item não pode ser excluído pois esta emprestado.");
    }
  }
}
