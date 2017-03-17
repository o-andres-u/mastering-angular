import {Component, OnInit} from "@angular/core";
import {RouteParams, Router} from "@angular/router-deprecated";
import {PlaceService} from "./place.service";
import {Place} from "./place";

@Component({
  selector: "place-edit",
  templateUrl: "/app/places/place-add.html",
  providers: [PlaceService]
})

/**
  * Component that allows to create a place.
  */
export class EditPlaceComponent implements OnInit {

  public title = "Edit place";
  public place: Place;
  public filesToUpload: Array<File>;

  private _error: boolean;
  private _errorMessage: string;

  constructor(
    private _routeParams: RouteParams,
    private _placeService: PlaceService,
    private _router: Router
  ) { }

  ngOnInit(): void {
    this.place = new Place(
      this._routeParams.get("uuid"),
      this._routeParams.get("name"),
      parseInt(this._routeParams.get("score")),
      this._routeParams.get("low"),
      this._routeParams.get("latitude"),
      this._routeParams.get("longitude"),
      null
    );
    this.getPlace();
  }

  onSubmit(): void {
    let uuid = this._routeParams.get("uuid");
    this._placeService.editPlace(uuid, this.place).subscribe(
      response => {
        this._error = response.error;
        if (this._error) {
          alert("Error in server");
        }
      },
      error => {
        this._errorMessage = error.message;
        if (this._errorMessage !== null) {
          alert(this._errorMessage);
        }
      }
    );
    this._router.navigate(["Home"]);
  }

  getPlace(): void {
    let uuid = this._routeParams.get("uuid");
    this._placeService.getPlace(uuid).subscribe(
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
          alert("Error in request");
        }
      }
    );
  }

  fileChangeEvent(fileInput: any): void {
    this.filesToUpload = <Array<File>>fileInput.target.files;
    this.makeFileRequest("http://localhost:4000/api/places/upload-files", [], this.filesToUpload).then(
      (result) => {
        this.place.image = result.filename;
      }, (error) => {
        console.log(error);
    });
  }

  makeFileRequest(url: string, params: Array<string>, files: Array<File>): any {
    return new Promise((resolve, reject) => {
      let formData: any = new FormData();
      let xhr = new XMLHttpRequest();

      for (let i = 0; i < files.length; i++) {
        formData.append("uploads[]", files[i], files[i].name);
      }

      xhr.onreadystatechange = function() {
        if(xhr.readyState == 4) {
          if(xhr.status == 200) {
            resolve(JSON.parse(xhr.response));
          } else {
            reject(xhr.response);
          }
        }
      }
      xhr.open("POST", url, true);
      xhr.send(formData);
    });
  }

}
