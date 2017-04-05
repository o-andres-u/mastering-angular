"use strict";
/**
 * Created by alejandropalacio on 5/04/17.
 */
var router_1 = require('@angular/router');
var cursos_component_1 = require('./components/cursos.component');
var curso_detail_component_1 = require('./components/curso.detail.component');
exports.routes = [
    {
        path: '',
        redirectTo: '/cursos',
        terminal: true
    },
    { path: 'cursos', component: cursos_component_1.CursosComponent },
    { path: 'curso', component: curso_detail_component_1.CursoDetailComponent },
    { path: 'curso/:id', component: curso_detail_component_1.CursoDetailComponent },
    { path: 'curso/:id/:titulo', component: curso_detail_component_1.CursoDetailComponent }
];
exports.APP_ROUTER_PROVIDERS = [
    router_1.provideRouter(exports.routes)
];
//# sourceMappingURL=app.routes.js.map