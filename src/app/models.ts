import { AnimationRenderer } from '@angular/platform-browser/animations/src/animation_renderer';

export class Collegue {
  nom: string;
  score: number;
  photos: string[];
  enum Avis {AIMER, DETESTER};

  constructor() {
    this.enum = Avis;
    this.nom = 'thomas';
    this.score = 10;
    this.photos = ['https://les-alpages.fr/wp-content/uploads/2014/08/tomme-de-savoie-acheter-fromage.jpg',
      '../assets/giphy.gif'];
    
  }

}
