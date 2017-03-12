import { Component, OnInit, OnChanges, OnDestroy } from "@angular/core";
import { IProduct } from "./product";
import { ProductService } from "./product.service";

@Component({
    moduleId: module.id,
    templateUrl: "product-list.component.html",
    styleUrls: ["product-list.component.css"]
})
export class ProductListComponent implements OnInit, OnChanges, OnDestroy {
    pageTitle: string = "Product List";
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;
    listFilter: string;
    products: IProduct[];
    errorMessage: string;

    constructor(private _productService: ProductService) { }

    ngOnInit(): void {
        this._productService.getProducts()
                .subscribe(
                    products => this.products = products,
                    error => this.errorMessage = <any>error);
    }

    ngOnChanges(): void {
        console.log("In OnChanges");
    }

    ngOnDestroy(): void {
        console.log("In OnDestroy");
    }

    toggleImage(): void {
        this.showImage = !this.showImage;
    }

    onRatingClicked(message: string): void {
        this.pageTitle = "Product List: " + message;
    }
}