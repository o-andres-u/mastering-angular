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
 * Created by alejandropalacio on 5/04/17.
 */
var core_1 = require("@angular/core");
var paises_service_1 = require("../services/paises.service");
var PaisesComponent = (function () {
    function PaisesComponent(_paisesService) {
        var _this = this;
        this._paisesService = _paisesService;
        this._paisesService.getPost().subscribe(function (result) {
            _this.posts = result;
            if (_this.posts.length >= 1) {
                console.log(_this.posts);
            }
        }, function (error) {
            console.log(error);
        });
    }
    return PaisesComponent;
}());
PaisesComponent = __decorate([
    core_1.Component({
        selector: 'paises',
        template: "\n        <h2>Paises</h2>\n        <ul>\n            <li>Espa\u00F1a</li>\n            <li>M\u00E9xico</li>\n            <li>Colombia</li>\n        </ul>\n        <h2>Listado de POSTS</h2>\n        <ol *ngIf=\"posts\">\n            <li *ngFor=\"let post of posts\">{{post.title}}</li>\n        </ol>\n    ",
        providers: [paises_service_1.PaisesService]
    }),
    __metadata("design:paramtypes", [paises_service_1.PaisesService])
], PaisesComponent);
exports.PaisesComponent = PaisesComponent;
//# sourceMappingURL=paises.component.js.map