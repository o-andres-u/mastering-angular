// Importar el núcleo de Angular
import {Component, OnInit} from "angular2/core";
import {RouteParams, Router} from "angular2/router";
import {RestauranteService} from "../services/restaurante.service";
import {Restaurante} from "../model/restaurante";

// Decorador component, indicamos en que etiqueta se va a cargar la plantilla
@Component({
    selector: "restaurante-edit",
    templateUrl: "app/view/restaurante-add.html",
    providers: [RestauranteService]
    //, styleUrls: ["../assets/css/styles.css"] //Se coloca en el html para que sea global.
})
// Clase del componente donde iran los datos y funcionalidades
export class RestauranteEditComponent implements OnInit {
    public titulo: string = "Editar Restaurante";
    public restaurante: Restaurante;
    public status: string;
    public errorMessage: string;

    constructor(
        private _restauranteService:RestauranteService,
        private _routeParams: RouteParams,
        private _router: Router) {
    }

    ngOnInit(): void {
        this.restaurante = new Restaurante();
        this.getRestaurante();
        console.log("restaurante-edit component cargando");
    }

    onSubmit(): void {
        this._restauranteService.editRestaurante(this.restaurante)
            .subscribe(
                result => {
                    this.status = result.status;

                    if (this.status !== "success") {
                        alert("Error en el servidor");
                    } else {
                        this._router.navigate(["Home"]);
                    }
                },
                error => {
                    this.errorMessage = <any>error;
                    if (this.errorMessage !== null) {
                        console.log(this.errorMessage);
                        alert("Error en la petición");
                    }
                } );
    }

    getRestaurante(): Restaurante {
        let id = this._routeParams.get("id");
        this._restauranteService.getRestaurante(id)
            .subscribe(
                result => {
                    this.restaurante = result.data;
                    this.status = result.status;

                    if (this.status != "success") {
                        this._router.navigate(["Home"]);
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