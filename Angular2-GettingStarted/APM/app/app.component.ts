import { Component } from '@angular/core';
import {ProductService} from "./products/product.service";

@Component({
    selector: 'pm-app',
    template: `
        <div>
            <h1>Angular2: Getting Started</h1>
            <pm-products></pm-products>
        </div>
    `,
    providers: [ProductService]
})
export class AppComponent { }
