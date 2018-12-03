export class Collegue {
  nom: string;
  score: number;
  photos: string[];

  constructor(nom: string, score: number , photos: string[]) {
    this.nom = nom;
    this.score = score;
    this.photos = photos;
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
