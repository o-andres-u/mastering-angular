module SupermanImplementacion {

  import HeroeVolador = Interfaz.HeroeVolador;
  import SALUD_INICIAL = Interfaz.SALUD_INICIAL;
  import NIVEL_ETICA = Interfaz.NIVEL_ETICA;

  export class Superman implements HeroeVolador {

    private saludInicial: number;
    private nivelEtica: number;

    constructor(nivelEtica: number) {
      this.saludInicial = SALUD_INICIAL;
      this.nivelEtica = NIVEL_ETICA;
    }

    luchar(): void {
      console.log('Luchando como Superman');
    }

    salvar(): void {
      console.log('Salvando como Superman');
    }

    correr(): void {
      console.log('Corriendo como Superman');
    }

    disparar(): void {
      console.log('Disparando como Superman');
    }

    resolverEtica(): void {
      if (this.nivelEtica < NIVEL_ETICA) {
        this.nivelEtica = NIVEL_ETICA;
      }
      console.log('Ética resuelta');
    }

    volar(): void {
      console.log('Volando como Superman');
    }

    aterrizar(): void {
      console.log('Aterrizando como Superman');
    }

  }

}
