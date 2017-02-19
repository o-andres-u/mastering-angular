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

  public title = "Terminator Concept";
  public target = "John Connor";
  public weapon = "Shotgun";
  public bullets = 1000;

}
