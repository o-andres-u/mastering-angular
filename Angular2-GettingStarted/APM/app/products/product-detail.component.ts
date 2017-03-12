import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { IProduct } from "./product";

@Component({
    moduleId: module.id,
    templateUrl: "product-detail.component.html"
})
export class ProductDetailComponent implements OnInit {
    pageTitle: string = "Product Detail";
    producto: IProduct;

    constructor(private _route: ActivatedRoute) {
        console.log(this._route.snapshot.params["id"]);
    }

    ngOnInit() {
        let id = +this._route.snapshot.params["id"];
        this.pageTitle += `: ${id}`;
    }
}