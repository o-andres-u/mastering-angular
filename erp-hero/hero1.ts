export module Comics {
    export const SALUD_INICIAL: number = 100;
    export const ETICA: number = 100;

    export interface Heroe {
        luchar(): void;
        correr(): void;
        saltar(): void;
        disparar(): void;
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
    }
}