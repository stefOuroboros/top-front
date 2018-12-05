import { Component, OnInit, Input } from '@angular/core';
import { MatCarouselSlide, MatCarouselSlideComponent } from '@ngmodule/material-carousel';
import { Collegue, Avis } from '../models';
import { CollegueService } from '../collegue.service';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-collegue-component',
  templateUrl: './collegue-component.component.html',
  styleUrls: ['./collegue-component.component.css']
})
export class CollegueComponentComponent implements OnInit {

  @Input() collegue: Collegue;
  urls: SafeUrl[];
  constructor(private _collegueService: CollegueService, private sanitizer: DomSanitizer) {  }
  traiter(avis: Avis) {
    this._collegueService.donnerUnAvis(this.collegue, avis).then(cServeur => this.collegue.score = cServeur.score);

  }
  ngOnInit() {
    // this.urls = this.collegue.imageUrl.map(url => this.sanitizer.bypassSecurityTrustUrl(url));
    // this.collegue.imageUrl = ['http://localhost:4200/assets/sully.jpg'];
}

}
