// Importar el núcleo de Angular
import {Component, OnInit} from 'angular2/core';
import {Pelicula} from '../model/pelicula';
import {Router, RouteParams} from 'angular2/router';
import {PeliculasService} from  "../services/peliculas.service";

// Decorador component, indicamos en que etiqueta se va a cargar la plantilla
@Component({
    templateUrl: "app/view/crear-pelicula.html",
    providers: [PeliculasService]
})
// Clase del componente donde iran los datos y funcionalidades
export class CrearPeliculaComponent implements OnInit {
    public tituloPelicula:string = "";
    public nuevaPelicula: Pelicula;

    constructor(private _peliculasService: PeliculasService, 
                private _router:Router,
                private _routeParams: RouteParams) {
    }

    ngOnInit():any {
        this.tituloPelicula = this._routeParams.get("titulo");
        this.nuevaPelicula = new Pelicula(0, this._routeParams.get("titulo"), this._routeParams.get("director"), this._routeParams.get("anio"));
    }

    onSubmit() {
        this._peliculasService.insertPelicula(this.nuevaPelicula);
        this._router.navigate(["Peliculas"]);
    }
}