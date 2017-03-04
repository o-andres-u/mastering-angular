// Importar el núcleo de Angular
import {Component, OnInit} from "angular2/core";
import {ROUTER_DIRECTIVES, RouteConfig, Router} from "angular2/router";
import {RestauranteService} from "../services/restaurante.service";

// Decorador component, indicamos en que etiqueta se va a cargar la plantilla
@Component({
    selector: "restaurantes-list",
    templateUrl: "app/view/restaurantes-list.html",
    providers: [RestauranteService]
    //, styleUrls: ["../assets/css/styles.css"] //Se coloca en el html para que sea global.
})
// Clase del componente donde iran los datos y funcionalidades
export class RestaurantesListComponent implements OnInit {
    public titulo:string = "Listado de Restaurantes";

    constructor(
        private _restauranteService:RestauranteService) {
    }

    ngOnInit(): void {
        console.log("restaurantes-list component cargando");
    }
}