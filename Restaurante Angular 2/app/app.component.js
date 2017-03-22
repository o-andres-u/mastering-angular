"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var router_deprecated_1 = require("@angular/router-deprecated");
var restaurantes_list_component_1 = require("./components/restaurantes-list.component");
var restaurantes_detail_component_1 = require("./components/restaurantes-detail.component");
var restaurantes_add_component_1 = require("./components/restaurantes-add.component");
var restaurantes_edit_component_1 = require("./components/restaurantes-edit.component");
var pruebas_pipe_1 = require("./pipes/pruebas.pipe");
var AppComponent = (function () {
    function AppComponent() {
        this.titulo = "Restaurantes";
        this.fecha = new Date(1990, 6, 27);
    }
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        templateUrl: 'app/view/home.html',
        directives: [restaurantes_list_component_1.RestaurantesListComponent, router_deprecated_1.ROUTER_DIRECTIVES],
        pipes: [pruebas_pipe_1.PruebasPipe]
    }),
    router_deprecated_1.RouteConfig([
        { path: "/", name: "Home", component: restaurantes_list_component_1.RestaurantesListComponent, useAsDefault: true },
        { path: "/restaurante/:id", name: "Restaurante", component: restaurantes_detail_component_1.RestaurantesDetailComponent },
        { path: "/crear-restaurante/", name: "CrearRestaurante", component: restaurantes_add_component_1.RestaurantesAddComponent },
        { path: "/editar-restaurante/:id", name: "EditarRestaurante", component: restaurantes_edit_component_1.RestaurantesEditComponent },
        { path: "/donde-como-hoy/:random", name: "DondeComoHoy", component: restaurantes_detail_component_1.RestaurantesDetailComponent }
    ])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map