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

    deleteRestaurante(id: number) {
        let headers = new Headers({"Content-Type":"application/json"});

        return this._http.delete("http://localhost:3000/api/restaurante/"+id, {headers: headers}).map(res => res.json());
    }

    uploadImageRestaurante(params: Array<string>, files: Array<File>) {
        return new Promise((resolve, reject) => {
            var formData: any = new FormData();
            var xhr = new XMLHttpRequest();

            for(var i=0;i<files.length;i++) {
                formData.append("uploads[]", files[i], files[i].name);
            }

            xhr.onreadystatechange = function() {
                if (xhr.readyState == 4) {
                    if (xhr.status == 200) {
                        resolve(JSON.parse(xhr.response));
                    } else {
                        reject(xhr.response);
                    }
                }
            };
            xhr.open("POST", "http://localhost:3000/api/restaurante-image/", true);
            xhr.send(formData);
        });
    }
}