import {Component} from "angular2/core";
import {Terminator} from "../model/Terminator";

@Component({
  selector: "robots-list",
  templateUrl: "app/view/robots-list.html"
})

export class RobotsListComponent {

  public terminator : Terminator;
  private showSpecs : boolean;
  private models : Array<Terminator>;
  private robotSelected: Terminator;

  constructor() {
    this.showSpecs = false;
    
    this.models = [
      new Terminator(123456789, "Skynet", "T-800", "Cybernetic organism", 2017),
      new Terminator(12345678, "Skynet", "T-1000", "Liquid metal", 2017),
      new Terminator(1234567, "Skynet", "T-4000", null, 2025)
    ];

    this.terminator = this.models[0];
    this.robotSelected = this.models[0];

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

  onChangeRobot(robot) {
    this.terminator = robot;
    this.robotSelected = robot;
  }

}
