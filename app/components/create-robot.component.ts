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
  public newRobot: Terminator;

  constructor(private _robotService: TerminatorService,
              private _router: Router,
              private _routeParams: RouteParams) {
  }

  submit() {
    this._robotService.insertRobot(this.newRobot);
    this._router.navigate(["Robots"]);
  }

  ngOnInit(): any {
    this.newRobot = new Terminator(
      parseInt(this._routeParams.get("serial")),
      this._routeParams.get("manufacturerParameter"),
      this._routeParams.get("modelParameter"),
      this._routeParams.get("robotClassParameter"),
      parseInt(this._routeParams.get("manufacturingYear"))
    );
  }

}
