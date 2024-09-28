"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Livro = void 0;
const publicacao_1 = require("./publicacao");
class Livro extends publicacao_1.Publicacao {
    constructor(id, title, publisher, language, author, genre, ISBN, yearPublished, bookcase, shelft) {
        super(id, title, publisher, language);
        this.author = author;
        this.genre = genre;
        this.ISBN = ISBN;
        this.yearPublished = yearPublished;
        this.bookcase = bookcase;
        this.shelft = shelft;
    }
}
exports.Livro = Livro;
