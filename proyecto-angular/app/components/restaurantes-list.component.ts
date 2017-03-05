// Importar el núcleo de Angular
import {Component, OnInit} from "angular2/core";
import {ROUTER_DIRECTIVES, RouteConfig, Router} from "angular2/router";
import {RestauranteService} from "../services/restaurante.service";
import {Restaurante} from "../model/restaurante";

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
    public restaurantes: Restaurante[];
    public status: string;
    public errorMessage: string;

    constructor(
        private _restauranteService:RestauranteService) {
    }

    ngOnInit(): void {
        this.getRestaurantes();
        console.log("restaurantes-list component cargando");
    }

    getRestaurantes(): Restaurante[] {
        this._restauranteService.getRestaurantes()
            .subscribe(
                result => {
                    this.restaurantes = result.data;
                    this.status = result.status;

                    if (this.status != "success") {
                        alert("Error en el servidor");
                    }
                },
                error => {
                    this.errorMessage = <any>error;
                    if (this.errorMessage !== null) {
                        console.log(this.errorMessage);
                        alert("Error en la petición");
                    }
                } );
        return this.restaurantes;
    }
}