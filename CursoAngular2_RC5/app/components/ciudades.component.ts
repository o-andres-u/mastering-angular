/**
 * Created by alejandropalacio on 5/04/17.
 */
import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
    selector:'ciudades',
    template: `
        <h2>Ciudades</h2>
        <ul *ngIf="!codigoPostal">
            <li>Medellín</li>
            <li>Bogotá</li>
            <li>Lima</li>
            <li>Quito</li>
            <li>México DF.</li>
        </ul>
        <p *ngIf="codigoPostal">Código Postal: {{codigoPostal}}</p>
        <button (click)="redireccion()">Ver Paises</button>
    `
})

export class CiudadesComponent{
    public codigoPostal : number;

    public constructor(
        public route: ActivatedRoute,
        public  router: Router
    ){}

    ngOnInit(){
            //recoger parametros por url
        this.route.params.subscribe(
            params => {
                if (params['id'] != null) {
                    this.codigoPostal = +params['id'];
                }
            }
        );
    }

    redireccion(){
        this.router.navigate(['/paises']);
    }
}