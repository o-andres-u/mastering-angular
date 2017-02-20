import {Component} from "angular2/core";

@Component({
  selector: "terminator-app",
  templateUrl: "app/view/terminatorTemplate.html"
})

export class AppComponent {

  public title : string = "Terminator";
  public manufacturer : string = "Skynet";
  public model : string = "T-800";
  public class : string = "Cybernetic organism";
  public manufacturingYear : number = 2017;

}
