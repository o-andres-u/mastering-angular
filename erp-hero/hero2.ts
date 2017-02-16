export module Comics {
    export const SALUD_INICIAL: number = 100;
    export const ETICA: number = 100;

    export interface Heroe {
        luchar(): void;
        correr(): void;
        saltar(): void;
        disparar(): void;
    }

    export interface HeroeVolador extends Heroe {
        volar(): void;
        aterrizar(): void;
    }

    export interface HeroeLlamas extends Heroe {
        encenderse(): void;
        apagarse(): void;
        lanzarFuego(): void;
    }

    export interface HeroeIntangible extends Heroe {
        volverseTangible(): void;
        volverseIntangible(): void;
    }

    export module DC {
        export class Batman implements Heroe {
            luchar(): void {
                console.log("Luchando");
            }
            correr(): void {
                console.log("Corriendo");
            }
            saltar(): void {
                console.log("Saltando");
            }
            disparar(): void {
                console.log("Disparando");
            }
        }

        export class Superman implements HeroeVolador {
            luchar(): void {
                console.log("Luchando");
            }
            correr(): void {
                console.log("Corriendo");
            }
            saltar(): void {
                console.log("Saltando");
            }
            disparar(): void {
                console.log("Disparando");
            }
            volar(): void {
                console.log("Volando");
            }
            aterrizar(): void {
                console.log("Aterrizando");
            }
        }
    }

    export module Marvel {
        export class Spiderman implements Heroe {
            luchar(): void {
                console.log("Luchando");
            }
            correr(): void {
                console.log("Corriendo");
            }
            saltar(): void {
                console.log("Saltando");
            }
            disparar(): void {
                console.log("Disparando");
            }
        }

        export class Ironman implements HeroeVolador {
            luchar(): void {
                console.log("Luchando");
            }
            correr(): void {
                console.log("Corriendo");
            }
            saltar(): void {
                console.log("Saltando");
            }
            disparar(): void {
                console.log("Disparando");
            }
            volar(): void {
                console.log("Volando");
            }
            aterrizar(): void {
                console.log("Aterrizando");
            }
        }

        export class HumanTorch implements HeroeVolador, HeroeLlamas {
            luchar(): void {
                console.log("Luchando");
            }
            correr(): void {
                console.log("Corriendo");
            }
            saltar(): void {
                console.log("Saltando");
            }
            disparar(): void {
                console.log("Disparando");
            }
            volar(): void {
                console.log("Volando");
            }
            aterrizar(): void {
                console.log("Aterrizando");
            }
            encenderse(): void {
                console.log("Encendiendose");
            }
            apagarse(): void {
                console.log("Apagandose");
            }
            lanzarFuego(): void {
                console.log("Lanzando Fuego");
            }
        }

        export class ShadowKat implements HeroeIntangible {
            luchar(): void {
                console.log("Luchando");
            }
            correr(): void {
                console.log("Corriendo");
            }
            saltar(): void {
                console.log("Saltando");
            }
            disparar(): void {
                console.log("Disparando");
            }
            volverseTangible(): void {
                console.log("Volviendose Tangible");
            }
            volverseIntangible(): void {
                console.log("Volviendose Intangible");
            }
        }
    }
}