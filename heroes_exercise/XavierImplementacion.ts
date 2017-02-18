module XavierImplementacion {

  import HeroeMental = Interfaz.HeroeMental;
  import SALUD_INICIAL = Interfaz.SALUD_INICIAL;
  import NIVEL_ETICA = Interfaz.NIVEL_ETICA;

  export class Xavier implements HeroeMental {

    private nivelEtica: number;
    private saludInicial: number;

    constructor() {
      this.saludInicial = SALUD_INICIAL;
      this.nivelEtica = NIVEL_ETICA;
    }

    luchar(): void {
      console.log('Luchando mentalmente');
    }

    salvar(): void {
      console.log('Salvando mentalmente');
    }

  }

}
