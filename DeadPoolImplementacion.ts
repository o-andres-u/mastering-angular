module DeadPoolImplementacion {

  import HeroeFisico = Interfaz.HeroeFisico;
  import SALUD_INICIAL = Interfaz.SALUD_INICIAL;

  export class DeadPool implements HeroeFisico {

    private nivelEtica: number = 40;
    private saludInicial: number;

    constructor() {
      this.saludInicial = SALUD_INICIAL;
    }

    correr(): void {
      console.log('Corriendo como DeadPool');
    }

    disparar(): void {
      console.log('Disparando como DeadPool');
    }

    resolverEtica(): void {
      console.log('Yo no tengo ese problema');
    }

    luchar(): void {
      console.log('Salvando como DeadPool');
    }

    salvar(): void {
      if (new Date().getHours() %2 == 0) {
        console.log('Salvando');
      } else {
        console.log('No quiero salvar');
      }
    }

  }

}
