module AntorchaHumanaImplementacion {

  import HeroeVolador = Interfaz.HeroeVolador;
  import HeroeLlamas = Interfaz.HeroeLlamas;
  import SALUD_INICIAL = Interfaz.SALUD_INICIAL;
  import NIVEL_ETICA = Interfaz.NIVEL_ETICA;

  export class AntorchaHumana implements HeroeVolador, HeroeLlamas {

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

    volar(): void {
      console.log('Volando como Antorcha Humana');
    }

    aterrizar(): void {
      console.log('Aterrizando como Antorcha Humana');
    }

    encenderse(): void {
      console.log('Antorcha Humana se enciende');
    }

    apagarse(): void {
      console.log('Antorcha Humana se apaga');
    }

    lanzarFuego(): void {
      console.log('Antorcha Humana lanza fuego');
    }

  }

}
