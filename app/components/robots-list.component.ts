import {Component} from "angular2/core";
import {Terminator} from "../model/Terminator";
import {TerminatorService} from "../services/terminator.service";

@Component({
  selector: "robots-list",
  templateUrl: "app/view/robots-list.html",
  providers: [TerminatorService]
})

export class RobotsListComponent {

  public terminator : Terminator;
  private showSpecs : boolean;
  private models : Array<Terminator>;
  private robotSelected: Terminator;

  private serviceData;

  constructor(private _robots: TerminatorService) {
    this.showSpecs = false;
    this.models = this._robots.getRobots();
    console.log(this.models);

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
