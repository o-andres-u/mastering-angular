import {Injectable} from "angular2/core";
import {ROBOTS} from "./mock.terminator";
import {Terminator} from "../model/Terminator";

@Injectable()
export class TerminatorService {

  getRobots() {
    return ROBOTS;
  }

  insertRobot(robot: Terminator) {
    Promise.resolve(ROBOTS).then((robots: Terminator[]) => robots.push(robot));
  }

}
