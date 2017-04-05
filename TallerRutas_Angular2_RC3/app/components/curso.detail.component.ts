/**
 * Created by alejandropalacio on 5/04/17.
 */
import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute, ROUTER_DIRECTIVES} from '@angular/router';

@Component({
    selector: 'curso-tag',
    template: `
        <h2>Detalle del Curso</h2>
        <p *ngIf="idCurso">Identificador: <strong>{{idCurso}}</strong></p>
        <p *ngIf="tituloCurso">Titulo: <strong>{{tituloCurso}}</strong></p>
        <p *ngIf="!idCurso && !tituloCurso">El curso está vacío.</p>
    `,
    directives: [ROUTER_DIRECTIVES]
})

export class CursoDetailComponent implements OnInit{
    public idCurso: number;
    public tituloCurso : string;

    constructor(
        private route : ActivatedRoute,
        private  router: Router
    ){

    }

    ngOnInit(){
            this.route.params.subscribe(params => {
                if(params['id'] != null){
                    this.idCurso = +params['id'];
                }
                if(params['titulo'] != null){
                    this.tituloCurso = params['titulo'];
                }
            });
    }

}