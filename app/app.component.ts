import {Component} from "angular2/core";

@Component({
  selector: "terminator-app",
  templateUrl: "app/view/terminatorTemplate.html"
})

export class AppComponent {

  public title : string;
  public manufacturer : string;
  public model : string;
  public class : string;
  public manufacturingYear : number;

  constructor() {
    this.title = "Terminator";
    this.manufacturer = "Skynet";
    this.model = "T-800";
    this.class = "Cybernetic organism";
    this.manufacturingYear = 2017;
    this.destroyT1000()
  }

  destroyT1000() {
    alert("Hasta la vista, baby!");
  }

}
