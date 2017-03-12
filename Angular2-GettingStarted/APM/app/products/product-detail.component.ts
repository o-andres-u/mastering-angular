import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

import { IProduct } from "./product";
import { ProductService } from "./product.service";

@Component({
    moduleId: module.id,
    templateUrl: "product-detail.component.html"
})
export class ProductDetailComponent implements OnInit {
    pageTitle: string = "Product Detail";
    product: IProduct;
    errorMessage: string;

    constructor(private _route: ActivatedRoute,
                private _router: Router,
                private _productService: ProductService) {
        console.log(this._route.snapshot.params["id"]);
    }

    ngOnInit(): void {
        let id = +this._route.snapshot.params["id"];
        this.pageTitle += `: ${id}`;

        let funFilter = function(p: IProduct) {
            return p.productId == id;
        }
        this._productService.getProducts()
                .subscribe(
                    product => this.product = (<any>product).filter(funFilter)[0],
                    error => this.errorMessage = <any>error);
    }

    onBack(): void {
        this._router.navigate(["/products"]);
    }
}