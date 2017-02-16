export module Comics {
    export const SALUD_INICIAL: number = 100;
    export const ETICA: number = 100;

    export interface IHeroe {
        luchar(): void;
        correr(): void;
        saltar(): void;
        disparar(): void;
    }

    export abstract class Heroe implements IHeroe {
        private nivelEtica: number;
        constructor(nivelEtica: number) {
            if (nivelEtica < 0 || nivelEtica > SALUD_INICIAL) {
                throw "El nivel de etica no puede ser menor a 0 o mayor a " + SALUD_INICIAL;
            }
            this.nivelEtica = nivelEtica;
        }
        luchar(): void {
            console.log("Luchando");
        }
        correr(): void {
            console.log("Corriendo");
        }
        abstract saltar(): void;
        abstract disparar(): void;
        resolverConflictos(): void {
            console.log("Resolviendo conflictos a un nivel: " + this.nivelEtica);
        }
    }

    export interface HeroeVolador extends IHeroe {
        volar(): void;
        aterrizar(): void;
    }

    export interface HeroeLlamas extends IHeroe {
        encenderse(): void;
        apagarse(): void;
        lanzarFuego(): void;
    }

    export interface HeroeIntangible extends IHeroe {
        volverseTangible(): void;
        volverseIntangible(): void;
    }

    export module DC {
        export class Batman extends Heroe {
            constructor(nivelEtica: number) {
                super(nivelEtica);
            }
            saltar(): void {
                console.log("Saltando");
            }
            disparar(): void {
                console.log("Disparando");
            }
        }

        export class Superman extends Heroe implements HeroeVolador {
            constructor(nivelEtica: number) {
                super(nivelEtica);
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
        export class Spiderman extends Heroe implements IHeroe {
            constructor(nivelEtica: number) {
                super(nivelEtica);
            }
            saltar(): void {
                console.log("Saltando");
            }
            disparar(): void {
                console.log("Disparando");
            }
        }

        export class Ironman extends Heroe implements HeroeVolador {
            constructor(nivelEtica: number) {
                super(nivelEtica);
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

        export class HumanTorch extends Heroe implements HeroeVolador, HeroeLlamas {
            constructor(nivelEtica: number) {
                super(nivelEtica);
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

        export class ShadowKat extends Heroe implements HeroeIntangible {
            constructor(nivelEtica: number) {
                super(nivelEtica);
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