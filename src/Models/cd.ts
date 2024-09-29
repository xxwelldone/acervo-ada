import { Localizavel } from "../Interfaces/localizavel";
import { Midia } from "./midia";

export class CD extends Midia implements Localizavel {
  public artist: string;
  public tracks: number;
  public recordLabel: string;
  public bookcase: string;
  public shelft: string;
  constructor(
    id: number,
    title: string,
    duration: number,
    genre: string,
    artist: string,
    tracks: number,
    recordLabel: string,
    bookcase: string,
    shelft: string
  ) {
    super(id, title, duration, genre);
    this.artist = artist;
    this.tracks = tracks;
    this.recordLabel = recordLabel;
    this.bookcase = bookcase;
    this.shelft = shelft;
  }
}
