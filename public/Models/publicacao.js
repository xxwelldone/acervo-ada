"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Publicacao = void 0;
const ItemAcervo_1 = require("./ItemAcervo");
class Publicacao extends ItemAcervo_1.ItemAcervo {
    constructor(id, title, publisher, language) {
        super(id, title);
        this.publisher = publisher;
        this.language = language;
    }
}
exports.Publicacao = Publicacao;
