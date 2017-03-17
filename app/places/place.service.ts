import {Injectable} from "@angular/core";
import {Http, Response, Headers} from "@angular/http";
import {Observable} from "rxjs/Observable";
import {Place} from "./place";
import "rxjs/add/operator/map";

@Injectable()
export class PlaceService {

  constructor(
    private _http: Http
  ) {}

  getPlaces(): any {
    let req = this._http.get("http://localhost:4000/api/places");
    return req.map(res => res.json()); //TODO mapear atributos de BD contra atributos del modelo
  }

  getPlace(uuid: string, random: string = null): any {
    if (random == null) {
      let req = this._http.get("http://localhost:4000/api/places/" + uuid);
      return req.map(res => res.json());
    } else {
      let req = this._http.get("http://localhost:4000/api/places/random-place");
      return req.map(res => res.json());
    }
  }

  addPlace(place: Place): any {
    let json = JSON.stringify(place);
    let params = "json=" + json;
    let headers = new Headers(
      {"Content-Type": "application/x-www-form-urlencoded"}
    );

    let req = this._http.post("http://localhost:4000/api/places", params, {headers: headers});
    return req.map(res => res.json());
  }

  editPlace(uuid: string, place: Place): any {
    let json = JSON.stringify(place);
    let params = "json=" + json;
    let headers = new Headers(
      {"Content-Type": "application/x-www-form-urlencoded"}
    );

    let req = this._http.put("http://localhost:4000/api/places/" + uuid, params, {headers: headers});
    return req.map(res => res.json());
  }

  deletePlace(uuid: string): any {
    let req = this._http.delete("http://localhost:4000/api/places/" + uuid);
    return req.map(res => res.json());
  }

}
