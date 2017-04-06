/**
 * Created by alejandropalacio on 5/04/17.
 */
import {Component} from '@angular/core';
import {PaisesService} from '../services/paises.service';

@Component({
    selector:'paises',
    template: `
        <h2>Paises</h2>
        <ul>
            <li>España</li>
            <li>México</li>
            <li>Colombia</li>
        </ul>
        <h2>Listado de POSTS</h2>
        <ol *ngIf="posts">
            <li *ngFor="let post of posts">{{post.title}}</li>
        </ol>
    `,
    providers: [PaisesService]
})

export class PaisesComponent{
    public posts;
    constructor(private  _paisesService : PaisesService){
        this._paisesService.getPost().subscribe(
            result => {
                this.posts =result;
                if (this.posts.length>= 1){
                    console.log(this.posts);
                }
            },
            error => {
                console.log(<any>error);
            }
        );
    }

}
