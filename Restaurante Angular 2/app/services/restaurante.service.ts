/**
 * Created by alejandropalacio on 8/03/17.
 */
import {Injectable} from "@angular/core";
import {Http, Response,  Headers} from "@angular/http";
import "rxjs/add/operator/map";
import {Observable} from "rxjs/Observable";
import {Restaurante} from "../model/restaurante";

@Injectable()
export class RestauranteService{
    constructor(private _http: Http){

    }

    getRestaurantes(){
        return this._http.get("http://localhost:8080/restaurante")
            .map(res => res.json());

    }

    getRestaurante(id:string, random = null){
        if(random == null){
            return this._http.get("http://localhost:8080/restaurante/" +id )
                .map(res => res.json());
        } else {
            return this._http.get("http://localhost:8080/restaurante/random-restaurante")
                .map(res => res.json());
        }

    }

    addRestaurante(restaurante : Restaurante){
        let json = JSON.stringify(restaurante);
        let params = json;
        let headers = new Headers({"Content-Type":"application/json"});
        return this._http.post("http://localhost:8080/restaurante" ,params,{headers: headers}).map(res => res.json());
    }

    editRestaurante(restaurante : Restaurante){
        let json = JSON.stringify(restaurante);
        let params = json;
        let headers = new Headers({"Content-Type":"application/json"});
        return this._http.put("http://localhost:8080/restaurante",params,{headers: headers}).map(res => res.json());
    }

    deleteRestaurante(id:string){
        return this._http.delete("http://localhost:8080/restaurante/" +id )
            .map(res => res.json());
    }

}