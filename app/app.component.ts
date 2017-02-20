import {Component} from "angular2/core";
import {Terminator} from "./model/Terminator";

@Component({
  selector: "terminator-app",
  templateUrl: "app/view/terminatorTemplate.html"
})

export class AppComponent {

  public title : string;
  public terminator : Terminator;

  constructor() {
    this.terminator = new Terminator(123456789, "Skynet", "T-800", "Cybernetic organism", 2017);
    this.debug();
  }

  debug() {
    console.log(this.terminator);
  }

}
