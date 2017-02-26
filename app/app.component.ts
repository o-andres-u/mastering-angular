import {Component} from "angular2/core";
import {Terminator} from "./model/Terminator";

@Component({
  selector: "terminator-app",
  templateUrl: "app/view/terminatorTemplate.html",
  styleUrls: ["../assets/css/styles.css"]
})

export class AppComponent {

  public title : string;
  public terminator : Terminator;
  private showSpecs : boolean;

  constructor() {
    this.terminator = new Terminator(123456789, "Skynet", "T-800", "Cybernetic organism", 2017);
    this.title = "Terminator";
    this.showSpecs = false;
  }

  showHideSpecifications(value) {
    this.showSpecs = value;
  }

  onKeyPress(opcional = null) {
    if (opcional == null) {
      console.log(this.terminator);
    } else {
      console.log(this.terminator.manufacturer);
    }
  }

}
