/**
 * This class represents a place which is located on the map
 * and has a score based on users qualifications.
 */
export class Place {

  private elevation: string;

  constructor(
    public uuid: string,
    public name: string,
    public score: number,
    public classification: string,
    public latitude: string,
    public longitude: string,
    public image: string
  ) { }

}
