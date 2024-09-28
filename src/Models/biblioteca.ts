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
    if (this.collection.length > 0) {
      this.collection.forEach((item) => console.table(item));
    } else {
      console.log("No data saved");
    }
  }
  update(item: T): T | void {
    item.title = this.normalizeText(item.title);
    const index = this.collection.findIndex((item) => item.id);

    if (index >= 0) {
      return (this.collection[index] = item);
    } else {
      console.log("ID passado não corresponde ao item informado");
    }
  }
  delete(id: number): void {
    const index = this.collection.findIndex((item) => item.id === id);
    if (index >= 0) {
      const obj = this.collection[index];
      if (obj.available) {
        this.collection.slice(index, 1);
        console.log(obj);
      } else {
        console.log("This item is not available to be deleted");
      }
    } else {
      console.log("No users were found");
    }
  }
  findAllByTitle(title: string): void {
    title = this.normalizeText(title);
    const listOfItens = this.collection.filter((item) => item.title === title);
    console.table(listOfItens);
  }
  getById(id: number): T | void {
    if (this.collection.length > 0) {
      const index = this.collection.findIndex((item) => item.id);
      const obj = this.collection[index];
      return obj;
    } else {
      console.log("No users were found");
    }
  }

  constructor() {}
}
