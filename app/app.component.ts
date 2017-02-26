import {Component} from "angular2/core";
import {RobotsListComponent} from "./components/robots-list.component";
import {FooterComponent} from "./components/footer.component";

@Component({
  selector: "terminator-app",
  templateUrl: "app/view/terminatorTemplate.html",
  directives: [RobotsListComponent, FooterComponent]
})

export class AppComponent {

  public title : string = "Terminator";


}
