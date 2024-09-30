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
    "Borrow;",
    "Give it back;",
    "Count available items;",
    "Exit;"
  ];

  main() {
    let keep = true;
    while (keep) {
      console.log("╔══════════════════════════════════════╗");
      console.log("║          Welcome to ACERVO-ADA       ║");
      console.log("╠══════════════════════════════════════╣");
      console.log("║        What do you wanna do?         ║");
      console.log("╠══════════════════════════════════════╣");
      for (let i = 0; i < this.options.length; i++) {
        console.log(
          `║ ${i + 1}. ${this.options[i]}${" ".repeat(
            34 - this.options[i].length
          )}║`
        );
      }
      console.log("╠══════════════════════════════════════╣");
      console.log("║ Choose an option:                    ║");
      console.log("╚══════════════════════════════════════╝");

      let opt = Number(prompt.question("Your choice: "));

      switch (opt) {
        case 1:
          this.add(this.options[0]);
          break;
        case 2:
          this.update(this.options[1]);
          break;
        case 3:
          this.delete(this.options[2]);
          break;
        case 4:
          this.findAllByTitle(this.options[3]);
          break;
        case 5:
          this.findAll(this.options[4]);
          break;
        case 6:
          this.borrow(this.options[5]);
          break;
        case 7:
          this.giveBack(this.options[6]);
          break;
        case 8:
          this.countAvailableItems(this.options[7]);
          break;
        case 9:
          console.log("Exiting...");
          keep = false;
          break;
        default:
          console.log("╔══════════════════════════════════════════╗");
          console.log("║              Invalid option              ║");
          console.log("╚══════════════════════════════════════════╝");
          break;
      }
    }
  }

  countAvailableItems(option: string) {
    const count = Biblioteca.countAvailableItems(this.library);
    console.log(`Option selected: ${option} \n`);
    console.log(`Available items: ${count}`);
  }

  add(option: string) {
    console.log(`Option selected: ${option} \n`);
    console.log("╔══════════════════════════════════════════╗");
    console.log("║           What do you wanna add?         ║");
    console.log("╠══════════════════════════════════════════╣");
    console.log("║ 1. Add new CD                            ║");
    console.log("║ 2. Add new DVD                           ║");
    console.log("║ 3. Add new Book                          ║");
    console.log("║ 4. Add new Magazine                      ║");
    console.log("║ 5. Exit                                  ║");
    console.log("╚══════════════════════════════════════════╝");

    let opt = Number(prompt.question("Choose a type: "));

    switch (opt) {
      case 1:
        let titleCD: string = prompt.question("Title: ");
        let durationCD: number = Number(prompt.question("Duration: "));
        let genreCD: string = prompt.question("Genre: ");
        let artist: string = prompt.question("Artist: ");
        let tracks: number = Number(prompt.question("How many tracks: "));
        let recordLabel: string = prompt.question("Record label: ");
        let bookcaseCD: string = prompt.question("Bookcase: ");
        let shelftCD: string = prompt.question("Shelf: ");

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
        console.log(createdCD);
        break;

      case 2:
        let titleDVD: string = prompt.question("Title: ");
        let durationDVD: number = Number(prompt.question("Duration: "));
        let genreDVD: string = prompt.question("Genre: ");
        let type: string = prompt.question("Type: ");
        let bookcaseDVD: string = prompt.question("Bookcase: ");
        let shelftDVD: string = prompt.question("Shelf: ");

        let createdDVD = this.library.create(
          new DVD(
            this.library.generateID(),
            titleDVD,
            durationDVD,
            genreDVD,
            type,
            bookcaseDVD,
            shelftDVD
          )
        );
        console.log("Created: ", createdDVD);
        break;

      case 3:
        let titleBook: string = prompt.question("Title: ");
        let publisherBook: string = prompt.question("Publisher: ");
        let languageBook: string = prompt.question("Language (e.g., PT-BR): ");
        let authorBook: string = prompt.question("Author: ");
        let genreBook: string = prompt.question("Genre: ");
        let ISBNBook: string = prompt.question("ISBN: ");
        let yearPublishedBook: number = Number(
          prompt.question("Year Published (YYYY): ")
        );
        let bookcaseBook: string = prompt.question("Bookcase: ");
        let shelftBook: string = prompt.question("Shelf: ");

        let createdBook = this.library.create(
          new Livro(
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
          )
        );
        console.log("Created: ", createdBook);
        break;

      case 4:
        let titleMagazine: string = prompt.question("Title: ");
        let publisherMagazine: string = prompt.question("Publisher: ");
        let languageMagazine: string = prompt.question(
          "Language (e.g., PT-BR): "
        );
        let issueMagazine: Date = new Date(
          prompt.question("Issue Date (YYYY-MM-DD): ")
        );
        let bookcaseMagazine: string = prompt.question("Bookcase: ");
        let shelftMagazine: string = prompt.question("Shelf: ");

        let createdMagazine = this.library.create(
          new Revista(
            this.library.generateID(),
            titleMagazine,
            publisherMagazine,
            languageMagazine,
            issueMagazine,
            bookcaseMagazine,
            shelftMagazine
          )
        );
        console.log("Created: ", createdMagazine);
        break;

      case 5:
        console.log("Exiting...");
        break;

      default:
        console.log("╔══════════════════════════════════════════╗");
        console.log("║              Invalid option              ║");
        console.log("╚══════════════════════════════════════════╝");
        break;
    }
  }

  update(option: string) {
    console.log(`Option selected: ${option} \n`);
    console.log(`╔══════════════════════════════════════════╗`);
    console.log(`║           What do you wanna update?      ║`);
    console.log(`╠══════════════════════════════════════════╣`);
    console.log(`║ 1. Update CD                             ║`);
    console.log(`║ 2. Update DVD                            ║`);
    console.log(`║ 3. Update Book                           ║`);
    console.log(`║ 4. Update Magazine                       ║`);
    console.log(`║ 5. Exit                                  ║`);
    console.log(`╚══════════════════════════════════════════╝`);

    let opt = Number(prompt.question("Choose a type: "));

    switch (opt) {
      case 1:
        let idCD = Number(prompt.question("What's the ID to be updated: "));

        let titleCD: string = prompt.question("Title: ");
        let durationCD: number = Number(prompt.question("Duration: "));
        let genreCD: string = prompt.question("Genre: ");
        let artist: string = prompt.question("Artist: ");
        let tracks: number = Number(prompt.question("How many tracks: "));
        let recordLabel: string = prompt.question("Record label: ");
        let bookcaseCD: string = prompt.question("Bookcase: ");
        let shelftCD: string = prompt.question("Shelft: ");

        let createdCD = new CD(
          idCD,
          titleCD,
          durationCD,
          genreCD,
          artist,
          tracks,
          recordLabel,
          bookcaseCD,
          shelftCD
        );
        this.library.update(createdCD);
        console.log(this.library.getById(createdCD.id));
        break;
      case 2:
        let idDVD = Number(prompt.question("What's the ID to be updated: "));

        let titleDVD: string = prompt.question("Title: ");
        let durationDVD: number = Number(prompt.question("Duration: "));
        let genreDVD: string = prompt.question("Genre: ");
        let type: string = prompt.question("Type: ");
        let bookcaseDVD: string = prompt.question("Bookcase: ");
        let shelftDVD: string = prompt.question("Shelft: ");

        let createdDVD = new DVD(
          idDVD,
          titleDVD,
          durationDVD,
          genreDVD,
          type,
          bookcaseDVD,
          shelftDVD
        );
        this.library.update(createdDVD);
        console.log(this.library.getById(createdDVD.id));
        break;
      case 3:
        let idBook = Number(prompt.question("What's the ID to be updated: "));

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
          idBook,
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

        console.log("Updated: ", this.library.update(createdBook));
        break;
      case 4:
        let idMagazine = Number(
          prompt.question("What's the ID to be updated: ")
        );

        let titleMagazine: string = prompt.question("Title: ");
        let publisherMagazine: string = prompt.question("Publisher: ");
        let languageMagazine: string = prompt.question("Language Ex(PT-BR): ");
        let issueMagazine: Date = new Date(
          prompt.question("Issue Date (YYYY-MM-DD): ")
        );
        let bookcaseMagazine: string = prompt.question("Bookcase: ");
        let shelftMagazine: string = prompt.question("Shelft: ");

        let createdMagazine = new Revista(
          idMagazine,
          titleMagazine,
          publisherMagazine,
          languageMagazine,
          issueMagazine,
          bookcaseMagazine,
          shelftMagazine
        );
        this.library.update(createdMagazine);
        console.log(this.library.getById(createdMagazine.id));
        break;
      case 5:
        console.log("Exiting...");
        break;
      default:
        console.log("╔══════════════════════════════════════════╗");
        console.log("║              Invalid option              ║");
        console.log("╚══════════════════════════════════════════╝");
        break;
    }
  }

  delete(option: string) {
    console.log(`Option selected: ${option} \n`);
    let id = Number(prompt.question("Inform ID to be deleted: "));
    this.library.delete(id);
  }
  findAllByTitle(option: string) {
    console.log(`Option selected: ${option} \n`);
    let title = prompt.question("Inform a title to be found: ");
    this.library.findAllByTitle(title);
  }
  findAll(option: string) {
    console.log(`Option selected: ${option} \n`);
    this.library.read();
  }
  borrow(option: string) {
    console.log(`Option selected: ${option} \n`);
    let idBorrow = Number(prompt.question("Inform ID to be borrowed: "));
    this.library.borrowed(idBorrow);
  }
  giveBack(option: string) {
    console.log(`Option selected: ${option} \n`);
    let idGiveBack = Number(prompt.question("Inform id to be given back: "));
    this.library.giveBack(idGiveBack);
  }
}
