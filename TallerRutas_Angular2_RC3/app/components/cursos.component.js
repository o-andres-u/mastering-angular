"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Created by alejandropalacio on 5/04/17.
 */
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var CursosComponent = (function () {
    function CursosComponent(route, router) {
        this.route = route;
        this.router = router;
        this.cursos = [
            { "id": 1, "titulo": "Curso Symfony 3" },
            { "id": 2, "titulo": "Curso Java" },
            { "id": 3, "titulo": "Curso C#" },
            { "id": 4, "titulo": "Curso SQL" },
        ];
    }
    CursosComponent.prototype.redirect = function () {
        var curso = this.cursos[0];
        this.router.navigate(['/curso', curso.id, curso.titulo]);
    };
    CursosComponent = __decorate([
        core_1.Component({
            selector: 'cursos-tag',
            template: "\n        <p>\n            <button (click)=\"redirect()\">Redirigir al curso destacado</button>\n        </p>\n        <h2>Listado de Cursos con un ID</h2>\n        <ul>\n            <li *ngFor=\"let curso of cursos\">\n            <a [routerLink] = \"['/curso', curso.id]\">{{curso.titulo}}</a>\n            \n            </li>\n        </ul>\n        \n        <h2>Listado de Cursos con un ID y un Titulo</h2>\n        <ul>\n            <li *ngFor=\"let curso of cursos\">\n            <a [routerLink] = \"['/curso', curso.id, curso.titulo]\">{{curso.titulo}}</a>\n            \n            </li>\n        </ul>\n    ",
            directives: [router_1.ROUTER_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, router_1.Router])
    ], CursosComponent);
    return CursosComponent;
}());
exports.CursosComponent = CursosComponent;
//# sourceMappingURL=cursos.component.js.map