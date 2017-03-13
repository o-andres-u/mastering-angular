import {Component} from 'angular2/core';
import {Router, RouteParams} from 'angular2/router';
import {RestauranteService} from "../services/restaurante.service";
import {Restaurante} from "../model/restaurante";
import {OnInit} from "angular2/src/core/metadata/lifecycle_hooks";

@Component({
    selector: "restaurantes-add",
    templateUrl: "app/view/restaurante-add.html",
    providers: [RestauranteService]
})

export class RestaurantesAddComponent implements OnInit {

    public titulo = "Crear nuevo Restaurante";
    public restaurante: Restaurante;
    public errorMessage: string;
    public status: string;
    public filesToUpload: File;

    constructor(private _restauranteService: RestauranteService,
                private _routeParams: RouteParams,
                private _router: Router) {

    }

    onSubmit(){
        this._restauranteService.addRestaurante(this.restaurante).subscribe(
            response => {
                this.status = response.status;
                if(this.status !== "success"){
                    alert("Error en el servidor");
                }
            },
            error => {
                this.errorMessage =<any>error;
                if (this.errorMessage !== null){
                    console.log(this.errorMessage);
                    alert("Error en la peticion");
                }

        }
        );
        this._router.navigate(["Home"]);
    }

    ngOnInit() {
        this.restaurante = new Restaurante(
            0, this._routeParams.get("nombre"),
            this._routeParams.get("direccion"),
            this._routeParams.get("descripcion"),
            null,
            "bajo")

    }

    callPrecio(value){
        this.restaurante.precio = value;
    }

    fileChangeEvent(fileInput : any){
        this.filesToUpload = <File>fileInput.target.files;

        this.makeFileRequest("http://localhost:8080/restaurante/uploadFile", this.filesToUpload)
            .then((result) => {
                this.restaurante.imagen = result.filename;
                console.log(result.filename)
            }, (error) => {
                console.log(error)
            });

    }

    makeFileRequest(url : string, files: File ){
        return new Promise((resolve, reject)=>{
            var formData: any = new FormData();
            var xhr = new XMLHttpRequest();

            formData.append("uploadfile", files, files.name)

            xhr.onreadystatechange =function () {
                if(xhr.readyState == 4){
                    if(xhr.status == 200){
                        resolve(JSON.parse(xhr.response))
                    }
                }
            }
            xhr.open("POST", url, true);
            xhr.send(formData);
        });
    }
}
