import {Injectable} from "angular2/core";
import {Pelicula} from "../model/pelicula";
import {PELICULAS} from "./mock.peliculas";

@Injectable()
export class PeliculasService {
    getPeliculas(): Pelicula[] {
        return PELICULAS;
    }

    insertPelicula(pelicula: Pelicula): void {
        Promise.resolve(PELICULAS).then((peliculas:Pelicula[]) => peliculas.push(pelicula));
    }
}