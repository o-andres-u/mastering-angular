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
 * Created by alejandropalacio on 8/03/17.
 */
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
var RestauranteService = (function () {
    function RestauranteService(_http) {
        this._http = _http;
    }
    RestauranteService.prototype.getRestaurantes = function () {
        return this._http.get("http://localhost:8080/restaurante")
            .map(function (res) { return res.json(); });
    };
    RestauranteService.prototype.getRestaurante = function (id, random) {
        if (random === void 0) { random = null; }
        if (random == null) {
            return this._http.get("http://localhost:8080/restaurante/" + id)
                .map(function (res) { return res.json(); });
        }
        else {
            return this._http.get("http://localhost:8080/restaurante/random-restaurante")
                .map(function (res) { return res.json(); });
        }
    };
    RestauranteService.prototype.addRestaurante = function (restaurante) {
        var json = JSON.stringify(restaurante);
        var params = json;
        var headers = new http_1.Headers({ "Content-Type": "application/json" });
        return this._http.post("http://localhost:8080/restaurante", params, { headers: headers }).map(function (res) { return res.json(); });
    };
    RestauranteService.prototype.editRestaurante = function (restaurante) {
        var json = JSON.stringify(restaurante);
        var params = json;
        var headers = new http_1.Headers({ "Content-Type": "application/json" });
        return this._http.put("http://localhost:8080/restaurante", params, { headers: headers }).map(function (res) { return res.json(); });
    };
    RestauranteService.prototype.deleteRestaurante = function (id) {
        return this._http.delete("http://localhost:8080/restaurante/" + id)
            .map(function (res) { return res.json(); });
    };
    RestauranteService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], RestauranteService);
    return RestauranteService;
}());
exports.RestauranteService = RestauranteService;
//# sourceMappingURL=restaurante.service.js.map