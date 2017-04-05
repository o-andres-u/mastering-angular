/**
 * Created by alejandropalacio on 5/04/17.
 */
import {Component} from '@angular/core';
import {Router,ActivatedRoute, ROUTER_DIRECTIVES} from '@angular/router';

@Component({
    selector: 'cursos-tag',
    template: `
        <p>
            <button (click)="redirect()">Redirigir al curso destacado</button>
        </p>
        <h2>Listado de Cursos con un ID</h2>
        <ul>
            <li *ngFor="let curso of cursos">
            <a [routerLink] = "['/curso', curso.id]">{{curso.titulo}}</a>
            
            </li>
        </ul>
        
        <h2>Listado de Cursos con un ID y un Titulo</h2>
        <ul>
            <li *ngFor="let curso of cursos">
            <a [routerLink] = "['/curso', curso.id, curso.titulo]">{{curso.titulo}}</a>
            
            </li>
        </ul>
    `,
    directives: [ROUTER_DIRECTIVES]
})

export class CursosComponent{
    public cursos : Array<any>;

    constructor(
        private route : ActivatedRoute,
        private  router: Router
    ){
        this.cursos = [
            {"id": 1, "titulo": "Curso Symfony 3"},
            {"id": 2, "titulo": "Curso Java"},
            {"id": 3, "titulo": "Curso C#"},
            {"id": 4, "titulo": "Curso SQL"},
        ];
    }

    redirect(){
            let curso = this.cursos[0];
            this.router.navigate(['/curso', curso.id, curso.titulo])
    }

}
