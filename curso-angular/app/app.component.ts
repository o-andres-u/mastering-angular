// Importar el núcleo de Angular
import {Component} from 'angular2/core';
import {Pelicula} from './model/pelicula';

// Decorador component, indicamos en que etiqueta se va a cargar la plantilla
@Component({
    selector: "my-app",
    templateUrl: "app/view/peliculas.html",
    styleUrls: ["../assets/css/styles.css"]
})
 
// Clase del componente donde iran los datos y funcionalidades
export class AppComponent {
    public titulo:string = "Peliculas con Angular 2";
    public pelicula:Pelicula;
    public mostrarDatos:boolean;
    public peliculas:Array<Pelicula>;

    constructor() {
        this.mostrarDatos = false;
        this.pelicula = new Pelicula(1, "Batman vs Superman", "Zack Snider", 2016);
        
        this.peliculas = [
            this.pelicula,
            new Pelicula(2, "La verdad duele", "Will Smith", 2016),
            new Pelicula(3, "El señor de los anillos", "Desconocido", 2004),
            new Pelicula(4, "Una historia real", "El de superaliados", 2015),
            new Pelicula(5, "Don Jon", "Josep Gordon Levit", 2014),
            new Pelicula(6, "Jhon", "No se", 0)
        ]

        this.debug();
    }

    onShowHideMostrarDatos(mostrar:boolean) {
        this.mostrarDatos = mostrar;
    }

    debug() {
        console.log(this.pelicula);
    }
}