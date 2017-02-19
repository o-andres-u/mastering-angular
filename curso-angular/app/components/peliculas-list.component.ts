// Importar el núcleo de Angular
import {Component} from 'angular2/core';
import {Pelicula} from '../model/pelicula';
import {PeliculasService} from  "../services/peliculas.service";

// Decorador component, indicamos en que etiqueta se va a cargar la plantilla
@Component({
    selector: "peliculas-list",
    templateUrl: "app/view/peliculas-list.html",
    providers: [PeliculasService]
})
 
// Clase del componente donde iran los datos y funcionalidades
export class PeliculasListComponent {
    public pelicula:Pelicula;
    public peliculaElegida:Pelicula;
    public mostrarDatos:boolean;
    public peliculas:Array<Pelicula>;

    constructor(private _peliculasService: PeliculasService) {
        this.mostrarDatos = false;
        
        this.peliculas = this._peliculasService.getPeliculas();
        this.pelicula = this.peliculas[0];
    }

    onShowHideMostrarDatos(mostrar:boolean) {
        this.mostrarDatos = mostrar;
    }

    debug() {
        console.log(this.pelicula);
    }

    onCambiarPelicula(pelicula: Pelicula) {
        this.pelicula = pelicula;
        this.peliculaElegida = pelicula;
    }
}