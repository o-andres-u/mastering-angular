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
var CursoDetailComponent = (function () {
    function CursoDetailComponent(route, router) {
        this.route = route;
        this.router = router;
    }
    CursoDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            if (params['id'] != null) {
                _this.idCurso = +params['id'];
            }
            if (params['titulo'] != null) {
                _this.tituloCurso = params['titulo'];
            }
        });
    };
    CursoDetailComponent = __decorate([
        core_1.Component({
            selector: 'curso-tag',
            template: "\n        <h2>Detalle del Curso</h2>\n        <p *ngIf=\"idCurso\">Identificador: <strong>{{idCurso}}</strong></p>\n        <p *ngIf=\"tituloCurso\">Titulo: <strong>{{tituloCurso}}</strong></p>\n        <p *ngIf=\"!idCurso && !tituloCurso\">El curso est\u00E1 vac\u00EDo.</p>\n    ",
            directives: [router_1.ROUTER_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, router_1.Router])
    ], CursoDetailComponent);
    return CursoDetailComponent;
}());
exports.CursoDetailComponent = CursoDetailComponent;
//# sourceMappingURL=curso.detail.component.js.map