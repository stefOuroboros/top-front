import { Injectable } from '@angular/core';
import { environment } from '../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Collegue, Avis } from './models';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CollegueService {

  constructor(private _http: HttpClient) { }
  listerCollegues(): Promise<Collegue[]> {
    const URL_BACKEND = environment.backendUrl;
    return this._http.get(URL_BACKEND + '/collegues').toPromise().then(
      (tabColServeur: any[]) => tabColServeur.map(
        cServeur => new Collegue(
          cServeur.pseudo, cServeur.imageUrl, cServeur.score))).catch();
  }

  donnerUnAvis(unCollegue: Collegue, avis: Avis): Promise<Collegue> {
    const URL_BACKEND = environment.backendUrl;
    // TODO Aimer ou Détester un collègue côté serveur
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this._http.patch(URL_BACKEND + '/collegues/' + unCollegue.pseudo, {'action' : avis}, httpOptions).toPromise().then(
      (cServeur: any) => new Collegue(cServeur.pseudo, cServeur.imageUrl, cServeur.score)
    );
  }
}
