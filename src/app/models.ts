export class Collegue {
  nom: string;
  score: number;
  photos: string[];
  vote: Vote;

  constructor(nom: string, photos: string[], score = 0) {
    this.nom = nom;
    this.photos = photos;
    this.score = score;
  }

  traiter(avis: Avis) {
    if (avis === Avis.AIMER) {
      this.score += 1;
    } else {
      this.score -= 1;
    }
  }

}

export enum Avis { AIMER, DETESTER }

export class Vote {
  collegue: Collegue;
  avis: Avis;

  constructor(collegue: Collegue, avis: Avis) {
    this.collegue = collegue;
    this.avis = avis;
  }

  toString() {
    if (this.avis === Avis.AIMER) {
      return `${this.collegue.nom} est aimé.e, il/elle a désormais un score de ${this.collegue.score}`;
    } else {
      return `${this.collegue.nom} est détesté.e, il/elle a désormais un score de ${this.collegue.score}`;
    }
  }

}
