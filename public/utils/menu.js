"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Menu = void 0;
const prompt = __importStar(require("readline-sync"));
const biblioteca_1 = require("../Models/biblioteca");
const cd_1 = require("../Models/cd");
const dvd_1 = require("../Models/dvd");
const livro_1 = require("../Models/livro");
const revista_1 = require("../Models/revista");
class Menu {
    constructor() {
        this.library = new biblioteca_1.Biblioteca();
        this.options = [
            "Add new item;",
            "Update an item;",
            "Delete an item;",
            "Find items by title;",
            "Find all items;",
            "Borrow;",
            "Give it back;",
            "Exit;",
        ];
    }
    main() {
        let keep = true;
        while (keep) {
            console.log("╔══════════════════════════════════════╗");
            console.log("║          Welcome to ACERVO-ADA       ║");
            console.log("╠══════════════════════════════════════╣");
            console.log("║        What do you wanna do?         ║");
            console.log("╠══════════════════════════════════════╣");
            for (let i = 0; i < this.options.length; i++) {
                console.log(`║ ${i + 1}. ${this.options[i]}${" ".repeat(34 - this.options[i].length)}║`);
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
                    this.giveBack(this.options[5]);
                    break;
                case 8:
                    console.log(this.options[7]);
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
    add(option) {
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
                let titleCD = prompt.question("Title: ");
                let durationCD = Number(prompt.question("Duration: "));
                let genreCD = prompt.question("Genre: ");
                let artist = prompt.question("Artist: ");
                let tracks = Number(prompt.question("How many tracks: "));
                let recordLabel = prompt.question("Record label: ");
                let bookcaseCD = prompt.question("Bookcase: ");
                let shelftCD = prompt.question("Shelf: ");
                let createdCD = this.library.create(new cd_1.CD(this.library.generateID(), titleCD, durationCD, genreCD, artist, tracks, recordLabel, bookcaseCD, shelftCD));
                console.log(createdCD);
                break;
            case 2:
                let titleDVD = prompt.question("Title: ");
                let durationDVD = Number(prompt.question("Duration: "));
                let genreDVD = prompt.question("Genre: ");
                let type = prompt.question("Type: ");
                let bookcaseDVD = prompt.question("Bookcase: ");
                let shelftDVD = prompt.question("Shelf: ");
                let createdDVD = this.library.create(new dvd_1.DVD(this.library.generateID(), titleDVD, durationDVD, genreDVD, type, bookcaseDVD, shelftDVD));
                console.log("Created: ", createdDVD);
                break;
            case 3:
                let titleBook = prompt.question("Title: ");
                let publisherBook = prompt.question("Publisher: ");
                let languageBook = prompt.question("Language (e.g., PT-BR): ");
                let authorBook = prompt.question("Author: ");
                let genreBook = prompt.question("Genre: ");
                let ISBNBook = prompt.question("ISBN: ");
                let yearPublishedBook = Number(prompt.question("Year Published (YYYY): "));
                let bookcaseBook = prompt.question("Bookcase: ");
                let shelftBook = prompt.question("Shelf: ");
                let createdBook = this.library.create(new livro_1.Livro(this.library.generateID(), titleBook, publisherBook, languageBook, authorBook, genreBook, ISBNBook, yearPublishedBook, bookcaseBook, shelftBook));
                console.log("Created: ", createdBook);
                break;
            case 4:
                let titleMagazine = prompt.question("Title: ");
                let publisherMagazine = prompt.question("Publisher: ");
                let languageMagazine = prompt.question("Language (e.g., PT-BR): ");
                let issueMagazine = new Date(prompt.question("Issue Date (YYYY-MM-DD): "));
                let bookcaseMagazine = prompt.question("Bookcase: ");
                let shelftMagazine = prompt.question("Shelf: ");
                let createdMagazine = this.library.create(new revista_1.Revista(this.library.generateID(), titleMagazine, publisherMagazine, languageMagazine, issueMagazine, bookcaseMagazine, shelftMagazine));
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
    update(option) {
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
                let titleCD = prompt.question("Title: ");
                let durationCD = Number(prompt.question("Duration: "));
                let genreCD = prompt.question("Genre: ");
                let artist = prompt.question("Artist: ");
                let tracks = Number(prompt.question("How many tracks: "));
                let recordLabel = prompt.question("Record label: ");
                let bookcaseCD = prompt.question("Bookcase: ");
                let shelftCD = prompt.question("Shelft: ");
                let createdCD = new cd_1.CD(idCD, titleCD, durationCD, genreCD, artist, tracks, recordLabel, bookcaseCD, shelftCD);
                this.library.update(createdCD);
                console.log(this.library.getById(createdCD.id));
                break;
            case 2:
                let idDVD = Number(prompt.question("What's the ID to be updated: "));
                let titleDVD = prompt.question("Title: ");
                let durationDVD = Number(prompt.question("Duration: "));
                let genreDVD = prompt.question("Genre: ");
                let type = prompt.question("Type: ");
                let bookcaseDVD = prompt.question("Bookcase: ");
                let shelftDVD = prompt.question("Shelft: ");
                let createdDVD = new dvd_1.DVD(idDVD, titleDVD, durationDVD, genreDVD, type, bookcaseDVD, shelftDVD);
                this.library.update(createdDVD);
                console.log(this.library.getById(createdDVD.id));
                break;
            case 3:
                let idBook = Number(prompt.question("What's the ID to be updated: "));
                let titleBook = prompt.question("Title: ");
                let publisherBook = prompt.question("Publisher: ");
                let languageBook = prompt.question("Language Ex(PT-BR): ");
                let authorBook = prompt.question("Author: ");
                let genreBook = prompt.question("Genre: ");
                let ISBNBook = prompt.question("ISBN: ");
                let yearPublishedBook = Number(prompt.question("Year Published (YYYY): "));
                let bookcaseBook = prompt.question("Bookcase: ");
                let shelftBook = prompt.question("Shelft: ");
                let createdBook = new livro_1.Livro(idBook, titleBook, publisherBook, languageBook, authorBook, genreBook, ISBNBook, yearPublishedBook, bookcaseBook, shelftBook);
                console.log("Updated: ", this.library.update(createdBook));
                break;
            case 4:
                let idMagazine = Number(prompt.question("What's the ID to be updated: "));
                let titleMagazine = prompt.question("Title: ");
                let publisherMagazine = prompt.question("Publisher: ");
                let languageMagazine = prompt.question("Language Ex(PT-BR): ");
                let issueMagazine = new Date(prompt.question("Issue Date (YYYY-MM-DD): "));
                let bookcaseMagazine = prompt.question("Bookcase: ");
                let shelftMagazine = prompt.question("Shelft: ");
                let createdMagazine = new revista_1.Revista(idMagazine, titleMagazine, publisherMagazine, languageMagazine, issueMagazine, bookcaseMagazine, shelftMagazine);
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
    delete(option) {
        console.log(`Option selected: ${option} \n`);
        let id = Number(prompt.question("Inform ID to be deleted: "));
        this.library.delete(id);
    }
    findAllByTitle(option) {
        console.log(`Option selected: ${option} \n`);
        let title = prompt.question("Inform a title to be found: ");
        this.library.findAllByTitle(title);
    }
    findAll(option) {
        console.log(`Option selected: ${option} \n`);
        this.library.read();
    }
    borrow(option) {
        console.log(`Option selected: ${option} \n`);
        let idBorrow = Number(prompt.question("Inform ID to be borrowed: "));
        this.library.borrowed(idBorrow);
    }
    giveBack(option) {
        console.log(`Option selected: ${option} \n`);
        let idGiveBack = Number(prompt.question("Inform id to be given back: "));
        this.library.giveBack(idGiveBack);
    }
}
exports.Menu = Menu;
