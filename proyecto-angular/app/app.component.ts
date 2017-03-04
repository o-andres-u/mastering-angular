// Importar el núcleo de Angular
import {Component} from "angular2/core";
import {ROUTER_DIRECTIVES, RouteConfig, Router} from "angular2/router";

// Decorador component, indicamos en que etiqueta se va a cargar la plantilla
@Component({
    selector: "my-app",
    templateUrl: "app/view/home.html",
    directives: [ ROUTER_DIRECTIVES ]
    //, styleUrls: ["../assets/css/styles.css"] //Se coloca en el html para que sea global.
})
// Clase del componente donde iran los datos y funcionalidades
export class AppComponent {
    public titulo:string = "Restaurantes";
}