"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CD = void 0;
const midia_1 = require("./midia");
class CD extends midia_1.Midia {
    constructor(id, title, duration, genre, artist, tracks, recordLabel, bookcase, shelft) {
        super(id, title, duration, genre);
        this.artist = artist;
        this.tracks = tracks;
        this.recordLabel = recordLabel;
        this.bookcase = bookcase;
        this.shelft = shelft;
    }
}
exports.CD = CD;
