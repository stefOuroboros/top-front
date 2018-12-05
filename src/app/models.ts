export class Collegue {
  pseudo: string;
  score: number;
  imageUrl: string[];
  vote: Vote;
  nom: string;
  prenom: string;
  email: string;
  adresse: string;

  constructor(pseudo: string, imageUrl: string[], score = 0, nom = 'non-communiqué',
  prenom = 'non-communiqué', email = 'non-communiqué', adresse = 'non-communiqué') {
    this.pseudo = pseudo;
    this.imageUrl = imageUrl;
    this.score = score;
    this.nom  = nom;
    this.prenom = prenom;
    this.email = email;
    this.adresse = adresse;
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
      return `${this.collegue.pseudo} est aimé.e, il/elle a désormais un score de ${this.collegue.score}`;
    } else {
      return `${this.collegue.pseudo} est détesté.e, il/elle a désormais un score de ${this.collegue.score}`;
    }
  }

}
