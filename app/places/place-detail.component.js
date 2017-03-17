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
var router_deprecated_1 = require("@angular/router-deprecated");
var place_service_1 = require("./place.service");
var PlaceDetailComponent = (function () {
    function PlaceDetailComponent(_routeParams, _placeService, _router) {
        this._routeParams = _routeParams;
        this._placeService = _placeService;
        this._router = _router;
    }
    PlaceDetailComponent.prototype.ngOnInit = function () {
        this.getPlace();
    };
    PlaceDetailComponent.prototype.getPlace = function () {
        var _this = this;
        var uuid = this._routeParams.get("uuid");
        var random = this._routeParams.get("random");
        this._placeService.getPlace(uuid, random).subscribe(function (response) {
            var array = response.place;
            _this.place = array[0];
            _this._error = response.error;
            if (_this._error || _this.place === undefined) {
                _this._router.navigate(["Home"]);
            }
            else {
                _this.place.name = array[0].place_name;
                _this.place.score = array[0].place_score;
                if (_this.place.score >= 0 && _this.place.score <= 4) {
                    _this.place.classification = "low";
                }
                else if (_this.place.score > 4 && _this.place.score < 7) {
                    _this.place.classification = "avarage";
                }
                else {
                    _this.place.classification = "top";
                }
                _this.place.latitude = array[0].place_latitude;
                _this.place.longitude = array[0].place_longitude;
                _this.place.image = array[0].place_image;
            }
        }, function (error) {
            _this._errorMessage = error.message;
            if (_this._errorMessage !== null) {
                console.log(_this._errorMessage);
                alert("Error in request");
            }
        });
    };
    PlaceDetailComponent = __decorate([
        core_1.Component({
            selector: "place-detail",
            templateUrl: "/app/places/place-detail.html",
            providers: [place_service_1.PlaceService]
        }), 
        __metadata('design:paramtypes', [router_deprecated_1.RouteParams, place_service_1.PlaceService, router_deprecated_1.Router])
    ], PlaceDetailComponent);
    return PlaceDetailComponent;
}());
exports.PlaceDetailComponent = PlaceDetailComponent;
//# sourceMappingURL=place-detail.component.js.map