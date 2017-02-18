module SpidermanImplementacion {

  import HeroeFisico = Interfaz.HeroeFisico;
  import SALUD_INICIAL = Interfaz.SALUD_INICIAL;
  import NIVEL_ETICA = Interfaz.NIVEL_ETICA;

  export class Spiderman implements HeroeFisico {

    private saludInicial: number;
    private nivelEtica: number;

    constructor(nivelEtica: number) {
      this.saludInicial = SALUD_INICIAL;
      this.nivelEtica = NIVEL_ETICA;
    }

    luchar(): void {
      console.log('Luchando como Spiderman');
    }

    salvar(): void {
      console.log('Salvando como Spiderman');
    }

    correr(): void {
      console.log('Corriendo como Spiderman');
    }

    disparar(): void {
      console.log('Disparando como Spiderman');
    }

    resolverEtica(): void {
      if (this.nivelEtica < NIVEL_ETICA) {
        this.nivelEtica = NIVEL_ETICA;
      }
      console.log('Ética resuelta');
    }

  }

}
