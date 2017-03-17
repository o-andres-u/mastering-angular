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
var place_1 = require("./place");
var EditPlaceComponent = (function () {
    function EditPlaceComponent(_routeParams, _placeService, _router) {
        this._routeParams = _routeParams;
        this._placeService = _placeService;
        this._router = _router;
        this.title = "Edit place";
    }
    EditPlaceComponent.prototype.ngOnInit = function () {
        this.place = new place_1.Place(this._routeParams.get("uuid"), this._routeParams.get("name"), parseInt(this._routeParams.get("score")), this._routeParams.get("low"), this._routeParams.get("latitude"), this._routeParams.get("longitude"), null);
        this.getPlace();
    };
    EditPlaceComponent.prototype.onSubmit = function () {
        var _this = this;
        var uuid = this._routeParams.get("uuid");
        this._placeService.editPlace(uuid, this.place).subscribe(function (response) {
            _this._error = response.error;
            if (_this._error) {
                alert("Error in server");
            }
        }, function (error) {
            _this._errorMessage = error.message;
            if (_this._errorMessage !== null) {
                alert(_this._errorMessage);
            }
        });
        this._router.navigate(["Home"]);
    };
    EditPlaceComponent.prototype.getPlace = function () {
        var _this = this;
        var uuid = this._routeParams.get("uuid");
        this._placeService.getPlace(uuid).subscribe(function (response) {
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
                alert("Error in request");
            }
        });
    };
    EditPlaceComponent.prototype.fileChangeEvent = function (fileInput) {
        var _this = this;
        this.filesToUpload = fileInput.target.files;
        this.makeFileRequest("http://localhost:4000/api/places/upload-files", [], this.filesToUpload).then(function (result) {
            _this.place.image = result.filename;
        }, function (error) {
            console.log(error);
        });
    };
    EditPlaceComponent.prototype.makeFileRequest = function (url, params, files) {
        return new Promise(function (resolve, reject) {
            var formData = new FormData();
            var xhr = new XMLHttpRequest();
            for (var i = 0; i < files.length; i++) {
                formData.append("uploads[]", files[i], files[i].name);
            }
            xhr.onreadystatechange = function () {
                if (xhr.readyState == 4) {
                    if (xhr.status == 200) {
                        resolve(JSON.parse(xhr.response));
                    }
                    else {
                        reject(xhr.response);
                    }
                }
            };
            xhr.open("POST", url, true);
            xhr.send(formData);
        });
    };
    EditPlaceComponent = __decorate([
        core_1.Component({
            selector: "place-edit",
            templateUrl: "/app/places/place-add.html",
            providers: [place_service_1.PlaceService]
        }), 
        __metadata('design:paramtypes', [router_deprecated_1.RouteParams, place_service_1.PlaceService, router_deprecated_1.Router])
    ], EditPlaceComponent);
    return EditPlaceComponent;
}());
exports.EditPlaceComponent = EditPlaceComponent;
//# sourceMappingURL=place-edit.component.js.map