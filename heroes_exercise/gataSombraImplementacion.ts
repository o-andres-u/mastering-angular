module GataSombraImplementacion {

  import HeroeIntangible = Interfaz.HeroeIntangible;
  import SALUD_INICIAL = Interfaz.SALUD_INICIAL;
  import NIVEL_ETICA = Interfaz.NIVEL_ETICA;

  export class GataSombra implements HeroeIntangible {

    private saludInicial: number;
    private nivelEtica: number;

    constructor(nivelEtica: number) {
      this.saludInicial = SALUD_INICIAL;
      this.nivelEtica = NIVEL_ETICA;
    }

    luchar(): void {
      console.log('Luchando como Antorcha Humana');
    }

    salvar(): void {
      console.log('Salvando como Antorcha Humana');
    }

    correr(): void {
      console.log('Corriendo como Antorcha Humana');
    }

    disparar(): void {
      console.log('Disparando como Antorcha Humana');
    }

    resolverEtica(): void {
      if (this.nivelEtica < NIVEL_ETICA) {
        this.nivelEtica = NIVEL_ETICA;
      }
      console.log('Ética resuelta');
    }

    volverseTangible(): void {
      console.log('Me vuelvo tangible');
    }

    volverseIntangible(): void {
      console.log('Me vuelvo intangible');
    }

  }

}
