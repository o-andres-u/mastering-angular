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
  private models : Array<Terminator>;

  constructor() {
    this.terminator = new Terminator(123456789, "Skynet", "T-800", "Cybernetic organism", 2017);
    this.title = "Terminator";

    this.models = [
      new Terminator(123456789, "Skynet", null, "Cybernetic organism", 2017),
      new Terminator(12345678, "Skynet", "T-1000", "Liquid metal", 2017),
      new Terminator(1234567, "Skynet", "T-4000", null, 2025)
    ];
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
