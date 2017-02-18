module BatmanImplementacion {

  import HeroeFisico = Interfaz.HeroeFisico;
  import SALUD_INICIAL = Interfaz.SALUD_INICIAL;
  import NIVEL_ETICA = Interfaz.NIVEL_ETICA;

  export class Batman implements HeroeFisico {

    private saludInicial: number;
    private nivelEtica: number;

    constructor(nivelEtica: number) {
      this.saludInicial = SALUD_INICIAL;
      this.nivelEtica = NIVEL_ETICA;
    }

    luchar(): void {
      console.log('Luchando como Batman');
    }

    salvar(): void {
      console.log('Salvando como Batman');
    }

    correr(): void {
      console.log('Corriendo como Batman');
    }

    disparar(): void {
      console.log('Disparando como Batman');
    }

    resolverEtica(): void {
      if (this.nivelEtica < NIVEL_ETICA) {
        this.nivelEtica = NIVEL_ETICA;
      }
      console.log('Ética resuelta');
    }

  }

}
