"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DVD = void 0;
const midia_1 = require("./midia");
class DVD extends midia_1.Midia {
    constructor(id, title, duration, genre, type, bookcase, shelft) {
        super(id, title, duration, genre);
        this.type = type;
        this.bookcase = bookcase;
        this.shelft = shelft;
    }
}
exports.DVD = DVD;
