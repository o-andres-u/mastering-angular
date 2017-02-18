module Interfaz {

  export const SALUD_INICIAL: number = 100;
  export const NIVEL_ETICA: number = 100;

  export interface HeroeBase {
    luchar(): void;
    salvar(): void;
  }

  export interface HeroeFisico extends HeroeBase {
    correr(): void;
    disparar(): void;
    resolverEtica(): void;
  }

  export interface HeroeMental extends HeroeBase {
  }

  export interface HeroeVolador extends HeroeFisico {
    volar(): void;
    aterrizar(): void;
  }

  export interface HeroeLlamas extends HeroeFisico {
    encenderse(): void;
    apagarse(): void;
    lanzarFuego(): void;
  }

  export interface HeroeIntangible extends HeroeFisico {
    volverseTangible(): void;
    volverseIntangible(): void;
  }

}
