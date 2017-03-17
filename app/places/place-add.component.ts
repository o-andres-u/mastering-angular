import {Component, OnInit} from "@angular/core";
import {RouteParams, Router} from "@angular/router-deprecated";
import {PlaceService} from "./place.service";
import {Place} from "./place";

@Component({
  selector: "place-add",
  templateUrl: "/app/places/place-add.html",
  providers: [PlaceService]
})

/**
  * Component that allows to create a place.
  */
export class AddPlaceComponent implements OnInit {

  public title = "Add place";
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
    this.place = new Place("", "", 0, "low", "", "", "");
  }

  onSubmit(): void {
    this._placeService.addPlace(this.place).subscribe(
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
