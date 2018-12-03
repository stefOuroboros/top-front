export class Collegue {
  nom: string;
  score: number;
  photos: string[];

  constructor(nom: string, photos: string[], score = 0) {
    this.nom = nom;
    this.photos = photos;
    this.score = score;
  }

  traiter (avis: Avis) {
    if (avis === Avis.AIMER) {
      this.score += 1;
    } else {
      this.score -= 1;
    }
  }

}

export enum Avis {AIMER, DETESTER}
