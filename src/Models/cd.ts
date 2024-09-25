import { Midia } from "./midia";

export class CD extends Midia {
  public artist: string;
  public tracks: number;
  public recordLabel: string;

  constructor(
    title: string,
    available: boolean,
    duration: number,
    genre: string,
    artist: string,
    tracks: number,
    recordLabel: string
  ) {
    super(title, available, duration, genre);
    this.artist = artist;
    this.tracks = tracks;
    this.recordLabel = recordLabel;
  }
}
