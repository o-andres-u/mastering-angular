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
var PlacesListComponent = (function () {
    function PlacesListComponent(_placeService) {
        this._placeService = _placeService;
        this.title = "The best places:";
    }
    PlacesListComponent.prototype.ngOnInit = function () {
        this.loading = 'show';
        this.getPlaces();
        this.loading = 'hide';
    };
    PlacesListComponent.prototype.getPlaces = function () {
        var _this = this;
        this._placeService.getPlaces().subscribe(function (result) {
            _this.places = result.places;
            _this._error = result.error;
            if (_this._error) {
                alert("Error in server");
            }
        }, function (error) {
            _this._errorMessage = error.message;
            if (_this._errorMessage !== null) {
                console.log(_this._errorMessage);
                alert("Error in request");
            }
        });
    };
    PlacesListComponent.prototype.onDelete = function (uuid) {
        var _this = this;
        this._placeService.deletePlace(uuid).subscribe(function (result) {
            _this._error = result.error;
            if (_this._error) {
                alert("Error in server");
            }
            _this.getPlaces();
        }, function (error) {
            _this._errorMessage = error.message;
            if (_this._errorMessage !== null) {
                console.log(_this._errorMessage);
                alert("Error in request");
            }
        });
    };
    PlacesListComponent.prototype.onConfirmDeletion = function (uuid) {
        this.confirm = uuid;
    };
    PlacesListComponent.prototype.onCancel = function () {
        this.confirm = null;
    };
    PlacesListComponent = __decorate([
        core_1.Component({
            selector: "places-list",
            templateUrl: "/app/places/places-list.html",
            directives: [router_deprecated_1.ROUTER_DIRECTIVES],
            providers: [place_service_1.PlaceService]
        }), 
        __metadata('design:paramtypes', [place_service_1.PlaceService])
    ], PlacesListComponent);
    return PlacesListComponent;
}());
exports.PlacesListComponent = PlacesListComponent;
//# sourceMappingURL=places-list.component.js.map