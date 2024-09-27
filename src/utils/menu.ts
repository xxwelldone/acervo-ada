import * as prompt from "readline-sync";
import { Biblioteca } from "../Models/biblioteca";
import { CD } from "../Models/cd";
import { DVD } from "../Models/dvd";
import { Livro } from "../Models/livro";
import { Revista } from "../Models/revista";
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
        let titleCD: string = prompt.question("Title: ");
        let durationCD: number = Number(prompt.question("Duration: "));
        let genreCD: string = prompt.question("Genre: ");
        let artist: string = prompt.question("Artist: ");
        let tracks: number = Number(prompt.question("How many: "));
        let recordLabel: string = prompt.question("Record label: ");
        let bookcaseCD: string = prompt.question("Bookcase: ");
        let shelftCD: string = prompt.question("Shelft: ");

        let createdCD = this.library.create(
          new CD(
            this.library.generateID(),
            titleCD,
            durationCD,
            genreCD,
            artist,
            tracks,
            recordLabel,
            bookcaseCD,
            shelftCD
          )
        );
        console.log("Created: ", createdCD);

        break;
      case 2:
        let titleDVD: string = prompt.question("Title: ");
        let durationDVD: number = Number(prompt.question("Duration: "));
        let genreDVD: string = prompt.question("Genre: ");
        let type: string = prompt.question("Type: ");
        let bookcaseDVD: string = prompt.question("Bookcase: ");
        let shelftDVD: string = prompt.question("Shelft: ");
        let createdDVD = new DVD(
          this.library.generateID(),
          titleDVD,
          durationDVD,
          genreDVD,
          type,
          bookcaseDVD,
          shelftDVD
        );
        console.log("Created: ", createdDVD);
        break;
      case 3:
        let titleBook: string = prompt.question("Title: ");
        let publisherBook: string = prompt.question("Publisher: ");
        let languageBook: string = prompt.question("Language Ex(PT-BR): ");
        let authorBook: string = prompt.question("Author: ");
        let genreBook: string = prompt.question("Genre: ");
        let ISBNBook: string = prompt.question("ISBN: ");
        let yearPublishedBook: number = Number(
          prompt.question("Year Published (YYYY): ")
        );
        let bookcaseBook: string = prompt.question("Bookcase: ");
        let shelftBook: string = prompt.question("Shelft: ");

        let createdBook = new Livro(
          this.library.generateID(),
          titleBook,
          publisherBook,
          languageBook,
          authorBook,
          genreBook,
          ISBNBook,
          yearPublishedBook,
          bookcaseBook,
          shelftBook
        );
        console.log("Created: ", createdBook);
        break;
      case 4:
        let titleMagazine: string = prompt.question("Title: ");
        let publisherMagazine: string = prompt.question("Publisher: ");
        let languageMagazine: string = prompt.question("Language Ex(PT-BR): ");
        let issueMagazine: Date = new Date(
          prompt.question("Issue Date (YYYY-MM-DD): ")
        );
        let bookcaseMagazine: string = prompt.question("Bookcase: ");
        let shelftMagazine: string = prompt.question("Shelft: ");

        let createdMagazine = new Revista(
          this.library.generateID(),
          titleMagazine,
          publisherMagazine,
          languageMagazine,
          issueMagazine,
          bookcaseMagazine,
          shelftMagazine
        );

        console.log("Created: ", createdMagazine);

        break;
      default:
        console.log("Invalid option");

        break;
    }
  }
}
