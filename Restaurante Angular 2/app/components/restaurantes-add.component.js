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
var restaurante_service_1 = require("../services/restaurante.service");
var restaurante_1 = require("../model/restaurante");
var RestaurantesAddComponent = (function () {
    function RestaurantesAddComponent(_restauranteService, _routeParams, _router) {
        this._restauranteService = _restauranteService;
        this._routeParams = _routeParams;
        this._router = _router;
        this.titulo = "Crear nuevo Restaurante";
    }
    RestaurantesAddComponent.prototype.onSubmit = function () {
        var _this = this;
        this._restauranteService.addRestaurante(this.restaurante).subscribe(function (response) {
            _this.status = response.status;
            if (_this.status !== "success") {
                alert("Error en el servidor");
            }
        }, function (error) {
            _this.errorMessage = error;
            if (_this.errorMessage !== null) {
                console.log(_this.errorMessage);
                alert("Error en la peticion");
            }
        });
        this._router.navigate(["Home"]);
    };
    RestaurantesAddComponent.prototype.ngOnInit = function () {
        this.restaurante = new restaurante_1.Restaurante(0, this._routeParams.get("nombre"), this._routeParams.get("direccion"), this._routeParams.get("descripcion"), "null", "bajo");
    };
    RestaurantesAddComponent.prototype.callPrecio = function (value) {
        this.restaurante.precio = value;
    };
    RestaurantesAddComponent.prototype.fileChangeEvent = function (fileInput) {
        var _this = this;
        this.filesToUpload = fileInput.target.files;
        this.makeFileRequest("http://localhost:8080/restaurante/uploadFile", [], this.filesToUpload).then(function (result) {
            _this.resultUpload = result;
            _this.restaurante.imagen = _this.resultUpload.filename;
            console.log(result);
        }, function (error) {
            console.error(error);
        });
    };
    RestaurantesAddComponent.prototype.makeFileRequest = function (url, params, files) {
        return new Promise(function (resolve, reject) {
            var formData = new FormData();
            var xhr = new XMLHttpRequest();
            for (var i = 0; i < files.length; i++) {
                formData.append("uploadfile", files[i], files[i].name);
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
    return RestaurantesAddComponent;
}());
RestaurantesAddComponent = __decorate([
    core_1.Component({
        selector: "restaurantes-add",
        templateUrl: "app/view/restaurante-add.html",
        providers: [restaurante_service_1.RestauranteService]
    }),
    __metadata("design:paramtypes", [restaurante_service_1.RestauranteService,
        router_deprecated_1.RouteParams,
        router_deprecated_1.Router])
], RestaurantesAddComponent);
exports.RestaurantesAddComponent = RestaurantesAddComponent;
//# sourceMappingURL=restaurantes-add.component.js.map