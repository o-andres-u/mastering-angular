import { Component, OnInit } from '@angular/core';
import {Candidato} from "../../model/candidato";
import { TranslateService } from '../../translate';

@Component({
  selector: 'app-registro-candidato',
  templateUrl: './registro-candidato.component.html',
  styleUrls: ['./registro-candidato.component.css']
})
export class RegistroCandidatoComponent implements OnInit {

  public translatedText: string;
  public supportedLangs: any[];

  public showDialog = false;

  constructor(private _translate: TranslateService) { }

  ngOnInit() {
    // standing data
    this.supportedLangs = [
      { display: 'English', value: 'en' },
      { display: 'Español', value: 'es' }
    ];

    this.selectLang('es');
  }

  isCurrentLang(lang: string) {
    return lang === this._translate.currentLang;
  }

  selectLang(lang: string) {
    // set default;
    this._translate.use(lang);
    this.refreshText();
  }

  refreshText() {
    this.translatedText = this._translate.instant('hello world');
  }

  model = new Candidato('','',false,'',null);
  submitted = false;
  onSubmit() { this.submitted = true; }

}
