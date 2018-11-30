// Import Component form the angular core package
import { Component, OnInit, Input } from '@angular/core';

// Import the Image interface
import {Image} from '../image.interface';

// Compoent Decorator
@Component({
  // Name of our tag
  selector: 'app-css-carousel',
  // Template for the tag
  templateUrl: './carousel-component.component.html',
  // Styles for the tag
  styleUrls: ['./carousel-component.component.css'],
})
// Carousel Component itself
export class CSSCarouselComponent {
    // images data to be bound to the template
  public images = IMAGES;
}

// IMAGES array implementing Image interface
const IMAGES: Image[] = [
  { title: 'Tome', url: 'https://les-alpages.fr/wp-content/uploads/2014/08/tomme-de-savoie-acheter-fromage.jpg' },
  { title: 'Ah !', url: '../assets/giphy.gif' },
];
