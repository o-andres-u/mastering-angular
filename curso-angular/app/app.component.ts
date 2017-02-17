// Importar el núcleo de Angular
import {Component} from 'angular2/core';
 
// Decorador component, indicamos en que etiqueta se va a cargar la plantilla
@Component({
    selector: 'my-app',
    template: `<h1>{{titulo}}</h1>
                <ul>
                    <li><b>Titulo:</b> {{pelicula}}</li>
                    <li><b>Director:</b> {{director}}</li>
                    <li><b>Año:</b> {{anio}}</li>
                </ul>`
})
 
// Clase del componente donde iran los datos y funcionalidades
export class AppComponent {
    public titulo = "Peliculas con Angular 2";
    pelicula = "Batman vs Superman";
    director = "Zack Snider";
    anio = 2016;
}