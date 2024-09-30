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

  public static countAvailableItems(library: Biblioteca<ItemAcervo>): number {
    return library.collection.filter(item => item.available).length;
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
  update(updatedItem: T): T | void {
    updatedItem.title = this.normalizeText(updatedItem.title);
    const index = this.collection.findIndex(
      (item) => updatedItem.id === item.id
    );

    if (index >= 0) {
      return (this.collection[index] = updatedItem);
    } else {
      console.log("ID passado não corresponde ao item informado");
    }
  }
  delete(id: number): void {
    const index = this.collection.findIndex((item) => item.id === id);
    if (index >= 0) {
      const obj = this.collection[index];
      if (obj.available) {
        this.collection.splice(index, 1);
        console.log("Deleted");

        console.table(obj);
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
  borrowed(id: number) {
    const index = this.collection.findIndex((item) => item.id === id);

    if (index >= 0) {
      if (this.collection[index].available === true) {
        this.collection[index].available = false;
        console.log(
          `Now, this item is borrowed to you, give it back by using it's id: ${this.collection[index].id}`
        );
        console.table(this.collection[index]);
      } else {
        console.log("This item is already borrowed");
      }
    } else {
      console.log("Item don't exist");
    }
  }
  giveBack(id: number) {
    const index = this.collection.findIndex((item) => item.id === id);
    if (index >= 0) {
      if (this.collection[index].available === false) {
        console.log("Thanks for returning to our collection.");
        this.collection[index].available = true;
        console.table(this.collection[index]);
      } else {
        console.log(
          "Seems like you gave us an ID to be given back, but this item isn't borrowed in the first place."
        );
      }
    } else {
      console.log("No such ID found");
    }
  }
  constructor() { }
}
