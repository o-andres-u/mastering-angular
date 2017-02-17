// Importar el núcleo de Angular
import {Component} from 'angular2/core';
 
// Decorador component, indicamos en que etiqueta se va a cargar la plantilla
@Component({
    selector: 'my-app',
    templateUrl: 'app/view/peliculas.html'
})
 
// Clase del componente donde iran los datos y funcionalidades
export class AppComponent {
    public titulo:string = "Peliculas con Angular 2";
    public pelicula:string;
    public director:string;
    public anio:number;

    constructor() {
        this.pelicula = "Batman vs Superman";
        this.director = "Zack Snider";
        this.anio = 2016;
        //this.holaMundo();
    }

    holaMundo() {
        alert("Pelicula: " + this.pelicula + " - Director: " + this.director + " - Año: " + this.anio);
    }
}