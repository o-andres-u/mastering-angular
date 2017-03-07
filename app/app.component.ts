import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES, RouteConfig, Router} from 'angular2/router';
import {RestaurantesListComponent} from './components/restaurantes-list.component';

@Component({
    selector: 'my-app',
    templateUrl: 'app/view/home.html',
    directives: [RestaurantesListComponent, ROUTER_DIRECTIVES]
})

export class AppComponent {
    public  titulo : string = "Restaurantes";

}
