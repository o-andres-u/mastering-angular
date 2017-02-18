module IronmanImplementacion {

  import HeroeVolador = Interfaz.HeroeVolador;
  import SALUD_INICIAL = Interfaz.SALUD_INICIAL;
  import NIVEL_ETICA = Interfaz.NIVEL_ETICA;

  export class Ironman implements HeroeVolador {

    private saludInicial: number;
    private nivelEtica: number;

    constructor(nivelEtica: number) {
      this.saludInicial = SALUD_INICIAL;
      this.nivelEtica = NIVEL_ETICA;
    }

    luchar(): void {
      console.log('Luchando como Ironman');
    }

    salvar(): void {
      console.log('Salvando como Ironman');
    }

    correr(): void {
      console.log('Corriendo como Ironman');
    }

    disparar(): void {
      console.log('Disparando como Ironman');
    }

    resolverEtica(): void {
      if (this.nivelEtica < NIVEL_ETICA) {
        this.nivelEtica = NIVEL_ETICA;
      }
      console.log('Ética resuelta');
    }

    volar(): void {
      console.log('Volando como Ironman');
    }

    aterrizar(): void {
      console.log('Aterrizando como Ironman');
    }

  }

}
