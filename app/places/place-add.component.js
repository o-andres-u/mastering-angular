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
var AddPlaceComponent = (function () {
    function AddPlaceComponent(_routeParams, _placeService, _router) {
        this._routeParams = _routeParams;
        this._placeService = _placeService;
        this._router = _router;
        this.title = "Add place";
    }
    AddPlaceComponent.prototype.ngOnInit = function () {
        this.place = new place_1.Place("", "", 0, "low", "", "", "");
    };
    AddPlaceComponent.prototype.onSubmit = function () {
        var _this = this;
        this._placeService.addPlace(this.place).subscribe(function (response) {
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
    AddPlaceComponent.prototype.fileChangeEvent = function (fileInput) {
        var _this = this;
        this.filesToUpload = fileInput.target.files;
        this.makeFileRequest("http://localhost:4000/api/places/upload-files", [], this.filesToUpload).then(function (result) {
            _this.place.image = result.filename;
        }, function (error) {
            console.log(error);
        });
    };
    AddPlaceComponent.prototype.makeFileRequest = function (url, params, files) {
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
    AddPlaceComponent = __decorate([
        core_1.Component({
            selector: "place-add",
            templateUrl: "/app/places/place-add.html",
            providers: [place_service_1.PlaceService]
        }), 
        __metadata('design:paramtypes', [router_deprecated_1.RouteParams, place_service_1.PlaceService, router_deprecated_1.Router])
    ], AddPlaceComponent);
    return AddPlaceComponent;
}());
exports.AddPlaceComponent = AddPlaceComponent;
//# sourceMappingURL=place-add.component.js.map