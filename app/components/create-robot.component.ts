import {Component} from "angular2/core";
import {Terminator} from "../model/Terminator";
import {OnInit} from "angular2/core";
import {Router, RouteParams} from "angular2/router";
import {TerminatorService} from "../services/terminator.service";

@Component({
  templateUrl: "app/view/create-robot.html",
  providers: [TerminatorService]
})

export class CreateRobotComponent implements OnInit {

  public manufacturerParameter: string = "";

  constructor(private _robotService: TerminatorService,
              private _router: Router,
              private _routeParams: RouteParams) {
  }

  createRobot(serial, manufacturer, model, robotClass, manufacturingYear) {
    let robot: Terminator = new Terminator(serial, manufacturer, model, robotClass, manufacturingYear);
    this._robotService.insertRobot(robot);
    this._router.navigate(["Robots"]);
  }

  ngOnInit(): any {
    this.manufacturerParameter = this._routeParams.get("manufacturerParameter");
  }

}
