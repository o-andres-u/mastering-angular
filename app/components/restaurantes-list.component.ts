/**
 * Created by alejandropalacio on 6/03/17.
 */
import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES, RouteConfig, Router} from 'angular2/router';
import {RestauranteService} from "../services/restaurante.service";
import {OnInit} from "angular2/src/core/metadata/lifecycle_hooks";
import {Restaurante} from "../model/restaurante";

@Component({
    selector: 'restaurantes-list',
    templateUrl: 'app/view/restaurantes-list.html',
    directives :[ROUTER_DIRECTIVES],
    providers: [RestauranteService]
})

export class RestaurantesListComponent implements OnInit{
    public  titulo : string = "Listado de restaurantes";
    public restaurantes : Restaurante[];
    public status : string;
    public errorMessage:string;
    public loading: string;

    constructor(private _restauranteService : RestauranteService){

    }

    ngOnInit(){
        this.loading = 'show';
        this.getRestaurantes();
        console.log("restaurantes-list component cargado");
        this.loading = "hide";
    }

    getRestaurantes(){
        this._restauranteService.getRestaurantes()
            .subscribe(
                result =>{
                    this.restaurantes = result.data;
                    this.status = result.status;
                    if(this.status !== "success"){
                        alert("Error en el Servidor.")
                    }
                },
                error =>{
                    this.errorMessage =<any>error;
                    if (this.errorMessage !== null){
                        console.log(this.errorMessage);
                        alert("Error en la peticion");
                    }
                }
            );
    }
}
