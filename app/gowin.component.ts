import {Component} from "@angular/core";
import {PlacesListComponent} from "./places/places-list.component";
import {PlaceDetailComponent} from "./places/place-detail.component";
import {AddPlaceComponent} from "./places/place-add.component";
import {EditPlaceComponent} from "./places/place-edit.component";
import {ROUTER_DIRECTIVES, RouteConfig, Router} from "@angular/router-deprecated";

@Component({
  selector: "gowin-app",
  templateUrl: "app/home.html",
  directives: [PlacesListComponent, ROUTER_DIRECTIVES]
})

@RouteConfig([
  { path: "/", name: "Home", component: PlacesListComponent, useAsDefault: true },
  { path: "/place/:uuid", name: "Place", component: PlaceDetailComponent },
  { path: "/place-add/", name: "AddPlace", component: AddPlaceComponent },
  { path: "/place-edit/:uuid", name: "EditPlace", component: EditPlaceComponent },
  { path: "/place-random/:random", name: "RandomPlace", component: PlaceDetailComponent }
])

/**
  * Main component for the Gowin App.
  */
export class GowinComponent {
  // Title for home.
  private title: string = "gowin - Find the best place to have fun!";

}
