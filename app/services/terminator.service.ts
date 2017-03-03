import {Injectable} from "angular2/core";
import {ROBOTS} from "./mock.terminator";

@Injectable()
export class TerminatorService {

  getRobots() {
    return ROBOTS;
  }

}
