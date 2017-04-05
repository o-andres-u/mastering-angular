// Importar el núcleo de Angular
import {Component} from '@angular/core';
import {Router,ActivatedRoute, ROUTER_DIRECTIVES} from '@angular/router';
 
// Decorador component, indicamos en que etiqueta se va a cargar la 

@Component({
    selector: 'my-app',
    template: `
    <h1>RUTAS EN ANGULAR 2</h1>
    <nav>
        <a [routerLink] = "['/cursos']">Todos los cursos.</a>
        <a [routerLink] = "['/curso']">Curso Vacio.</a>
    </nav>
    <router-outlet></router-outlet>
    `,
    directives: [ROUTER_DIRECTIVES]
})
 
// Clase del componente donde irán los datos y funcionalidades
export class AppComponent { }
