import {Component} from "angular2/core";
import {Terminator} from "../model/Terminator";
import {Router} from "angular2/router";
import {TerminatorService} from "../services/terminator.service";

@Component({
  templateUrl: "app/view/create-robot.html",
  providers: [TerminatorService]
})

export class CreateRobotComponent {

  constructor(private _robotService: TerminatorService, private _router: Router) {

  }

  createRobot(serial, manufacturer, model, robotClass, manufacturingYear) {
    let robot: Terminator = new Terminator(serial, manufacturer, model, robotClass, manufacturingYear);
    this._robotService.insertRobot(robot);
    this._router.navigate(["Robots"]);
  }

}
