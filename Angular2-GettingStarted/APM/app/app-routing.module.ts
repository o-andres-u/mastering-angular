import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { WelcomeComponent } from "./home/welcome.component";
import { ProductRoutingModule } from "./products/product-routing.module";

@NgModule({
    imports: [
        RouterModule.forRoot([
            { path: "welcome", component: WelcomeComponent },
            { path: "", redirectTo: "welcome", pathMatch: "full" },
            { path: "**", redirectTo: "welcome", pathMatch: "full" },
            //{ path: "**", component: PageNotFoundComponent },
        ],
        { useHash: true }),
        ProductRoutingModule
    ],
    exports: [ RouterModule ]
})
export class AppRoutingModule { }