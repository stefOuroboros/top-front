import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CollegueService } from '../collegue.service';

@Component({
  selector: 'app-add2-collegue',
  templateUrl: './add2-collegue.component.html',
  styleUrls: ['./add2-collegue.component.css'],
})
export class Add2CollegueComponent {

  matricules: string[];

  constructor(private fb: FormBuilder, private _collegueService: CollegueService) {
    _collegueService.listerLesMatriculesExistant().then(tabMatricules => this.matricules = tabMatricules);
  }

}
