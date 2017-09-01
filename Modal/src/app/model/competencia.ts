export class Competencia {

  private _nivelCompetencia: string;
  private _descripcionCompetencia: string;


  constructor(nivelCompetencia: string, descripcionCompetencia: string) {
    this._nivelCompetencia = nivelCompetencia;
    this._descripcionCompetencia = descripcionCompetencia;
  }


  get nivelCompetencia(): string {
    return this._nivelCompetencia;
  }

  set nivelCompetencia(value: string) {
    this._nivelCompetencia = value;
  }

  get descripcionCompetencia(): string {
    return this._descripcionCompetencia;
  }

  set descripcionCompetencia(value: string) {
    this._descripcionCompetencia = value;
  }
}
