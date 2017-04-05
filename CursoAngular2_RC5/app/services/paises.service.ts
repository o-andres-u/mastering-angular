/**
 * Created by alejandropalacio on 5/04/17.
 */
import {Injectable} from '@angular/core';
import {Http, Response, Headers} from '@angular/http';
import 'rxjs/add/operator/map'
import {Observable} from 'rxjs/observable';

@Injectable()
export class PaisesService{
    constructor(private _http: Http){}

    getPost(){
        return this._http.get("https://jsonplaceholder.typicode.com/posts")
            .map(res => res.json());
    }
}
