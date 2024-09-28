"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Revista = void 0;
const publicacao_1 = require("./publicacao");
class Revista extends publicacao_1.Publicacao {
    constructor(id, title, publisher, language, issue, bookcase, shelft) {
        super(id, title, publisher, language);
        this.issue = issue;
        this.bookcase = bookcase;
        this.shelft = shelft;
    }
}
exports.Revista = Revista;
