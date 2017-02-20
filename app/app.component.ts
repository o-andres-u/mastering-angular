import {Component} from "angular2/core";

@Component({
  selector: "terminator-app",
  template: "<h1>{{title}}</h1>"
          + "<ul>"
            + "<li>Objetivo: {{target}}</li>"
            + "<li>Arma: {{weapon}}</li>"
            + "<li>Munición: <strong>{{bullets}}</strong></li>"
          + "</ul>"
})

export class AppComponent {

  public title : string = "Terminator Concept";
  public target : string = "John Connor";
  public weapon : string = "Shotgun";
  public bullets : number = 1000;

}
