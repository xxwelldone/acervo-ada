"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Midia = void 0;
const ItemAcervo_1 = require("./ItemAcervo");
class Midia extends ItemAcervo_1.ItemAcervo {
    constructor(id, title, duration, genre) {
        super(id, title);
        this.duration = duration;
        this.genre = genre;
    }
}
exports.Midia = Midia;
