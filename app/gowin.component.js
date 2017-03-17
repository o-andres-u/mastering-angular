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
var core_1 = require("@angular/core");
var places_list_component_1 = require("./places/places-list.component");
var place_detail_component_1 = require("./places/place-detail.component");
var place_add_component_1 = require("./places/place-add.component");
var place_edit_component_1 = require("./places/place-edit.component");
var router_deprecated_1 = require("@angular/router-deprecated");
var GowinComponent = (function () {
    function GowinComponent() {
        // Title for home.
        this.title = "gowin - Find the best place to have fun!";
    }
    GowinComponent = __decorate([
        core_1.Component({
            selector: "gowin-app",
            templateUrl: "app/home.html",
            directives: [places_list_component_1.PlacesListComponent, router_deprecated_1.ROUTER_DIRECTIVES]
        }),
        router_deprecated_1.RouteConfig([
            { path: "/", name: "Home", component: places_list_component_1.PlacesListComponent, useAsDefault: true },
            { path: "/place/:uuid", name: "Place", component: place_detail_component_1.PlaceDetailComponent },
            { path: "/place-add/", name: "AddPlace", component: place_add_component_1.AddPlaceComponent },
            { path: "/place-edit/:uuid", name: "EditPlace", component: place_edit_component_1.EditPlaceComponent },
            { path: "/place-random/:random", name: "RandomPlace", component: place_detail_component_1.PlaceDetailComponent }
        ]), 
        __metadata('design:paramtypes', [])
    ], GowinComponent);
    return GowinComponent;
}());
exports.GowinComponent = GowinComponent;
//# sourceMappingURL=gowin.component.js.map