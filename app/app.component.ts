import {Component} from "angular2/core";
import {RobotsListComponent} from "./components/robots-list.component";
import {FooterComponent} from "./components/footer.component";
import {ContactComponent} from "./components/contact.component";
import {CreateRobotComponent} from "./components/create-robot.component";

import {ROUTER_DIRECTIVES, RouteConfig, Router} from "angular2/router";

@Component({
  selector: "terminator-app",
  templateUrl: "app/view/terminatorTemplate.html",
  directives: [RobotsListComponent,
               FooterComponent,
               ContactComponent,
               CreateRobotComponent,
               ROUTER_DIRECTIVES]
})

@RouteConfig([
  {path: "/robots", name: "Robots", component: RobotsListComponent, useAsDefault: true},
  {path: "/create-robot", name: "CreateRobot", component: CreateRobotComponent, useAsDefault: false},
  {path: "/contact", name: "Contact", component: ContactComponent, useAsDefault: false}
])

export class AppComponent {

  public title : string = "Terminator";


}
