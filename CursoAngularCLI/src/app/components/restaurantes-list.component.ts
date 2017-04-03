/**
 * Created by alejandropalacio on 6/03/17.
 */
import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute, Params} from "@angular/router";
import {RestauranteService} from "../services/restaurante.service";
import {Restaurante} from "../model/restaurante";

@Component({
    selector: 'restaurantes-list',
    templateUrl: '../view/restaurantes-list.html',
    providers: [RestauranteService]
})

export class RestaurantesListComponent implements OnInit{
    public  titulo : string = "Listado de restaurantes";
    public restaurantes : Restaurante[];
    public status : string;
    public errorMessage:string;
    public loading: string;
    public confirmado;

    constructor(
        private _route : ActivatedRoute,
        private _router : Router,
        private _restauranteService : RestauranteService
    ){

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

    onBorrarConfirm(id){
        this.confirmado = id;
    }

    onCancelarConfirm(){
       this.confirmado = null;
    }

    onBorrarRestaurante(id){
        this._restauranteService.deleteRestaurante(id)
            .subscribe(
                response => {
                    this.status= response.status;

                    if(this.status !== "success"){
                        alert("Error en el servidor");
                    }
                    this.getRestaurantes();
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
