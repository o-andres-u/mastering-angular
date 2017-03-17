import {Component, OnInit} from "@angular/core";
import {Place} from "./place";
import {ROUTER_DIRECTIVES, RouteConfig, Router} from "@angular/router-deprecated";
import {PlaceService} from "./place.service";

@Component({
  selector: "places-list",
  templateUrl: "/app/places/places-list.html",
  directives: [ROUTER_DIRECTIVES],
  providers: [PlaceService]
})

/**
 * Component that retrieves the list of the whole places.
 */
export class PlacesListComponent implements OnInit {

  public loading: string;
  public title: string = "The best places:";
  public places: Place[];
  public confirm: string;
  private _error: boolean;
  private _errorMessage: string;

  constructor(
    private _placeService: PlaceService
  ) { }

  ngOnInit(): void {
    this.loading = 'show';
    this.getPlaces();
    this.loading = 'hide';
  }

  getPlaces(): void {

    this._placeService.getPlaces().subscribe(
      result => {
        this.places = result.places;
        this._error = result.error;
        if (this._error) {
          alert("Error in server");
        }
      },
      error => {
        this._errorMessage = error.message;
        if (this._errorMessage !== null) {
          console.log(this._errorMessage);
          alert("Error in request");
        }
      }
    );
  }

  onDelete(uuid: string): void {
    this._placeService.deletePlace(uuid).subscribe(
      result => {
        this._error = result.error;
        if (this._error) {
          alert("Error in server");
        }
        this.getPlaces();
      },
      error => {
        this._errorMessage = error.message;
        if (this._errorMessage !== null) {
          console.log(this._errorMessage);
          alert("Error in request");
        }
      }
    );
  }

  onConfirmDeletion(uuid: string): void {
    this.confirm = uuid;
  }

  onCancel(): void {
    this.confirm = null;
  }

}
