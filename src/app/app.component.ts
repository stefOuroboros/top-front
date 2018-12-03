import { Component } from '@angular/core';
import { Collegue } from './models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'top-collegues-front';
  collegues: Collegue[] = [new Collegue('thomas', ['./assets/tomme.jpg', './assets/giphy.gif']),
                           new Collegue('Bob', ['./assets/BobRazowsky.jpg', './assets/bobRazowsky2.jpg']),
                          new Collegue('Sullyvan', ['./assets/sully.jpg', './assets/sullYoung.jpg'])];


}
