import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BandeauComponentComponent } from './bandeau-component/bandeau-component.component';
import { AvisComponentComponent } from './avis-component/avis-component.component';
import { CollegueComponentComponent } from './collegue-component/collegue-component.component';
import {MatCardModule} from '@angular/material/card';
import {CSSCarouselComponent} from './carousel-component/carousel-component.component';
@NgModule({
  declarations: [
    AppComponent,
    BandeauComponentComponent,
    AvisComponentComponent,
    CollegueComponentComponent,
    CSSCarouselComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
