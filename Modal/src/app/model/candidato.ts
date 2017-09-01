import {Competencia} from "./competencia";

export class Candidato {

  private _nombreApellidos: string;
  private _numeroContacto: string;
  private _nivelIngles: boolean;
  private _hojaVida: string;
  private _listaCompetencias: Array<Competencia>;


  constructor(nombreApellidos: string, numeroContacto: string, nivelIngles: boolean, hojaVida: string, listaCompetencias: Array<Competencia>) {
    this._nombreApellidos = nombreApellidos;
    this._numeroContacto = numeroContacto;
    this._nivelIngles = nivelIngles;
    this._hojaVida = hojaVida;
    this._listaCompetencias = listaCompetencias;
  }


  get nombreApellidos(): string {
    return this._nombreApellidos;
  }

  set nombreApellidos(value: string) {
    this._nombreApellidos = value;
  }

  get numeroContacto(): string {
    return this._numeroContacto;
  }

  set numeroContacto(value: string) {
    this._numeroContacto = value;
  }

  get nivelIngles(): boolean {
    return this._nivelIngles;
  }

  set nivelIngles(value: boolean) {
    this._nivelIngles = value;
  }

  get hojaVida(): string {
    return this._hojaVida;
  }

  set hojaVida(value: string) {
    this._hojaVida = value;
  }

  get listaCompetencias(): Array<Competencia> {
    return this._listaCompetencias;
  }

  set listaCompetencias(value: Array<Competencia>) {
    this._listaCompetencias = value;
  }
}
