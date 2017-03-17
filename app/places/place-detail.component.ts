import {Component, OnInit} from "@angular/core";
import {RouteParams, Router} from "@angular/router-deprecated";
import {PlaceService} from "./place.service";
import {Place} from "./place";

@Component({
  selector: "place-detail",
  templateUrl: "/app/places/place-detail.html",
  providers: [PlaceService]
})

/**
  * Component with the detail of a selected place.
  */
export class PlaceDetailComponent implements OnInit {

  public place: Place;
  private _error: boolean;
  private _errorMessage: string;

  constructor(
    private _routeParams: RouteParams,
    private _placeService: PlaceService,
    private _router: Router
  ) { }

  ngOnInit(): void {
    this.getPlace();
  }

  getPlace(): void {
    let uuid = this._routeParams.get("uuid");
    let random = this._routeParams.get("random");

    this._placeService.getPlace(uuid, random).subscribe(
      response => {
        let array = response.place;
        this.place = array[0];
        this._error = response.error;
        if(this._error || this.place === undefined) {
          this._router.navigate(["Home"]);
        } else { // Fue necesario hacerlo así.
          this.place.name = array[0].place_name;
          this.place.score = array[0].place_score;
          if (this.place.score >= 0 && this.place.score <= 4) {
            this.place.classification = "low";
          } else if (this.place.score > 4 && this.place.score < 7) {
            this.place.classification = "avarage";
          } else {
            this.place.classification = "top";
          }
          this.place.latitude = array[0].place_latitude;
          this.place.longitude = array[0].place_longitude;
          this.place.image = array[0].place_image;
        }
      },
      error => {
        this._errorMessage = error.message;
        if(this._errorMessage !== null) {
          console.log(this._errorMessage);
          alert("Error in request");
        }
      }
    );
  }

}
