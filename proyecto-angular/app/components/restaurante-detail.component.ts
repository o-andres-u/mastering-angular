// Importar el núcleo de Angular
import {Component, OnInit} from "angular2/core";
import {RouteParams} from "angular2/router";
import {RestauranteService} from "../services/restaurante.service";
import {Restaurante} from "../model/restaurante";

// Decorador component, indicamos en que etiqueta se va a cargar la plantilla
@Component({
    selector: "restaurante-detail",
    templateUrl: "app/view/restaurante-detail.html",
    providers: [RestauranteService]
    //, styleUrls: ["../assets/css/styles.css"] //Se coloca en el html para que sea global.
})
// Clase del componente donde iran los datos y funcionalidades
export class RestauranteDetailComponent implements OnInit {
    public restaurante: Restaurante;
    public status: string;
    public errorMessage: string;

    constructor(
        private _restauranteService:RestauranteService,
        private _routeParams: RouteParams) {
    }

    ngOnInit(): void {
        this.getRestaurante();
        console.log("restaurante-detail component cargando");
    }

    getRestaurante(): Restaurante {
        let id = this._routeParams.get("id");
        this._restauranteService.getRestaurante(id)
            .subscribe(
                result => {
                    this.restaurante = result.data;
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
        return this.restaurante;
    }
}