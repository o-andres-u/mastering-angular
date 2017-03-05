// Importar el núcleo de Angular
import {Component, OnInit} from "angular2/core";
import {RouteParams, Router} from "angular2/router";
import {RestauranteService} from "../services/restaurante.service";
import {Restaurante} from "../model/restaurante";

// Decorador component, indicamos en que etiqueta se va a cargar la plantilla
@Component({
    selector: "restaurante-add",
    templateUrl: "app/view/restaurante-add.html",
    providers: [RestauranteService]
    //, styleUrls: ["../assets/css/styles.css"] //Se coloca en el html para que sea global.
})
// Clase del componente donde iran los datos y funcionalidades
export class RestauranteAddComponent implements OnInit {
    public titulo: string = "Crear nuevo Restaurante";
    public restaurante: Restaurante;
    public status: string;
    public errorMessage: string;
    
    public filesToUpload: Array<File>;
    
    constructor(
        private _restauranteService:RestauranteService,
        private _routeParams: RouteParams,
        private _router: Router) {
    }

    ngOnInit(): void {
        this.restaurante = new Restaurante();
        console.log("restaurante-add component cargando");
    }

    onSubmit(): void {
        this._restauranteService.addRestaurante(this.restaurante)
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

    public resultUpload; //Machete

    fileChangeEvent(fileInput: any) {
        this.filesToUpload = <Array<File>>fileInput.target.files;
        this._restauranteService.uploadImageRestaurante([], this.filesToUpload)
            .then((result) => {
                this.resultUpload = result;
                this.restaurante.imagen = this.resultUpload.filename;
            }, (error) => {
                console.log(error);
            });
    }
}