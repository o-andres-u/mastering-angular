import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { SharedModule } from "../shared/shared.module";
import { ProductRoutingModule } from "./product-routing.module";

import { ProductListComponent } from "./product-list.component";
import { ProductDetailComponent } from "./product-detail.component";
import { ProductService } from "./product.service";
import { ProductDetailGuard } from "./product-guard.service";
import { ProductFilterPipe } from "./product-filter.pipe";

@NgModule({
    declarations: [
        ProductListComponent,
        ProductDetailComponent,
        ProductFilterPipe
    ],
    imports: [
        SharedModule,
        ProductRoutingModule
    ],
    providers: [ 
        ProductService,
        ProductDetailGuard
    ]
})
export class ProductModule { }