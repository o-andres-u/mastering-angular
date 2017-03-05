import {Injectable} from "angular2/core";
import {Http, Response, Headers} from "angular2/http";
import "rxjs/add/operator/map";
import {Observable} from "rxjs/Observable";
import {Restaurante} from "../model/restaurante";

@Injectable()
export class RestauranteService {
    constructor(
        private _http: Http
    ) {}

    getRestaurantes() {
        return this._http.get("http://localhost:3000/api/restaurantes").map(res => res.json());
    }

    getRestaurante(id: string) {
        return this._http.get("http://localhost:3000/api/restaurante/"+id).map(res => res.json());
    }

    addRestaurante(restaurante: Restaurante) {
        let json = JSON.stringify(restaurante);
        let headers = new Headers({"Content-Type":"application/json"});

        return this._http.post("http://localhost:3000/api/restaurantes/", json, {headers: headers}).map(res => res.json());
    }

    editRestaurante(restaurante: Restaurante) {
        let json = JSON.stringify(restaurante);
        let headers = new Headers({"Content-Type":"application/json"});

        return this._http.put("http://localhost:3000/api/restaurante/"+restaurante.id, json, {headers: headers}).map(res => res.json());
    }
}