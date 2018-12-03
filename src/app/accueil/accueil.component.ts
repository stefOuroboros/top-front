import { Component, OnInit } from '@angular/core';
import { Collegue, Vote, Avis } from '../models';


@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {

  constructor() { }

  thomas: Collegue;
  bob: Collegue;
  sully: Collegue;
  collegues: Collegue[] = [this.thomas = new Collegue('thomas', ['./assets/tomme.jpg', './assets/giphy.gif']),
                           this.bob = new Collegue('Bob', ['./assets/BobRazowsky.jpg', './assets/bobRazowsky2.jpg']),
                          this.sully = new Collegue('Sullyvan', ['./assets/sully.jpg', './assets/sullYoung.jpg'])];

  votes: Vote[] = [new Vote(this.thomas, Avis.AIMER), new Vote(this.sully, Avis.DETESTER),
                             new Vote(this.sully, Avis.DETESTER), new Vote(this.bob, Avis.AIMER)];


  ngOnInit() {
  }

}
