import * as prompt from "readline-sync";
import { Biblioteca } from "../Models/biblioteca";
import { CD } from "../Models/cd";
export class Menu {
  library = new Biblioteca();
  options: string[] = [
    "Add new item;",
    "Update an item;",
    "Delete an item;",
    "Find items by title;",
    "Find all items;",
    "Exist;",
  ];

  main() {
    let keep = true;
    while (keep) {
      console.log("\n");

      console.log("\nWelcome to ACERVO-ADA\n");
      console.log(`
          What do you wanna do?
          1. ${this.options[0]};
          2. ${this.options[1]};
          3. ${this.options[2]};
          4. ${this.options[3]};
          5. ${this.options[4]};
          6. ${this.options[5]};
              `);
      let opt = Number(prompt.question("Choose an option: "));

      switch (opt) {
        case 1:
          this.add(this.options[0]);
          break;

        default:
          break;
      }
    }
  }
  add(option: string) {
    console.log(`Option selected: ${option} \n`);
    console.log(`
      What do you wanna add?
      1. Add new CD;
      2. Add new DVD;
      3. Add new Book;
      4. Add new Magazine;
      5. Exist;
          `);
    let opt = Number(prompt.question("Choose a type: "));

    switch (opt) {
      case 1:
        let title: string = prompt.question("Title: ");
        let duration: number = Number(prompt.question("Duration: "));
        let genre: string = prompt.question("Genre: ");
        let artist: string = prompt.question("Artist: ");
        let tracks: number = Number(prompt.question("How many: "));
        let recordLabel: string = prompt.question("Record label: ");
        let bookcase: string = prompt.question("Bookcase: ");
        let shelft: string = prompt.question("Shelft: ");

        let created = this.library.create(
          new CD(
            this.library.generateID(),
            title,
            true,
            duration,
            genre,
            artist,
            tracks,
            recordLabel,
            bookcase,
            shelft
          )
        );
        console.log("Created: ", created);

        break;

      default:
        break;
    }
  }
}
