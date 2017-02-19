System.register(['angular2/core', "../services/peliculas.service"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, peliculas_service_1;
    var PeliculasListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (peliculas_service_1_1) {
                peliculas_service_1 = peliculas_service_1_1;
            }],
        execute: function() {
            // Decorador component, indicamos en que etiqueta se va a cargar la plantilla
            PeliculasListComponent = (function () {
                function PeliculasListComponent(_peliculasService) {
                    this._peliculasService = _peliculasService;
                    this.mostrarDatos = false;
                    this.peliculas = this._peliculasService.getPeliculas();
                    this.pelicula = this.peliculas[0];
                }
                PeliculasListComponent.prototype.onShowHideMostrarDatos = function (mostrar) {
                    this.mostrarDatos = mostrar;
                };
                PeliculasListComponent.prototype.debug = function () {
                    console.log(this.pelicula);
                };
                PeliculasListComponent.prototype.onCambiarPelicula = function (pelicula) {
                    this.pelicula = pelicula;
                    this.peliculaElegida = pelicula;
                };
                PeliculasListComponent = __decorate([
                    core_1.Component({
                        selector: "peliculas-list",
                        templateUrl: "app/view/peliculas-list.html",
                        providers: [peliculas_service_1.PeliculasService]
                    }), 
                    __metadata('design:paramtypes', [peliculas_service_1.PeliculasService])
                ], PeliculasListComponent);
                return PeliculasListComponent;
            }());
            exports_1("PeliculasListComponent", PeliculasListComponent);
        }
    }
});
//# sourceMappingURL=peliculas-list.component.js.map