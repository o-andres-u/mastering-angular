import {Place} from "../places/place"

/**
 * This class represents an user that is registered in the application
 * and can give scores to places.
 */
export class User {

  private username: string;
  private email: string;
  private firstName: string;
  private lastName: string;
  private places: Array<Place>;

  constructor(username: string, email: string) {
    this.username = username;
    this.email = email;
  }

}
