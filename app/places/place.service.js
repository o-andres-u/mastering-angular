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
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
var PlaceService = (function () {
    function PlaceService(_http) {
        this._http = _http;
    }
    PlaceService.prototype.getPlaces = function () {
        var req = this._http.get("http://localhost:4000/api/places");
        return req.map(function (res) { return res.json(); }); //TODO mapear atributos de BD contra atributos del modelo
    };
    PlaceService.prototype.getPlace = function (uuid, random) {
        if (random === void 0) { random = null; }
        if (random == null) {
            var req = this._http.get("http://localhost:4000/api/places/" + uuid);
            return req.map(function (res) { return res.json(); });
        }
        else {
            var req = this._http.get("http://localhost:4000/api/places/random-place");
            return req.map(function (res) { return res.json(); });
        }
    };
    PlaceService.prototype.addPlace = function (place) {
        var json = JSON.stringify(place);
        var params = "json=" + json;
        var headers = new http_1.Headers({ "Content-Type": "application/x-www-form-urlencoded" });
        var req = this._http.post("http://localhost:4000/api/places", params, { headers: headers });
        return req.map(function (res) { return res.json(); });
    };
    PlaceService.prototype.editPlace = function (uuid, place) {
        var json = JSON.stringify(place);
        var params = "json=" + json;
        var headers = new http_1.Headers({ "Content-Type": "application/x-www-form-urlencoded" });
        var req = this._http.put("http://localhost:4000/api/places/" + uuid, params, { headers: headers });
        return req.map(function (res) { return res.json(); });
    };
    PlaceService.prototype.deletePlace = function (uuid) {
        var req = this._http.delete("http://localhost:4000/api/places/" + uuid);
        return req.map(function (res) { return res.json(); });
    };
    PlaceService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], PlaceService);
    return PlaceService;
}());
exports.PlaceService = PlaceService;
//# sourceMappingURL=place.service.js.map