"use strict";
/**
 * Created by alejandropalacio on 5/04/17.
 */
var router_1 = require('@angular/router');
var paises_component_1 = require('./components/paises.component');
var ciudades_component_1 = require('./components/ciudades.component');
var mi_formulario_component_1 = require('./components/mi-formulario.component');
var appRoutes = [
    {
        path: '',
        redirectTo: '/paises',
        terminal: true
    },
    { path: 'paises', component: paises_component_1.PaisesComponent },
    { path: 'ciudades', component: ciudades_component_1.CiudadesComponent },
    { path: 'la-ciudad/:id', component: ciudades_component_1.CiudadesComponent },
    { path: 'mi-formulario', component: mi_formulario_component_1.MiFormularioComponent }
];
exports.appRoutingProviders = [];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map