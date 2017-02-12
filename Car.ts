interface BaseCar {
  getModel() : string;
  getSpeed() : number;
}

class Car implements BaseCar{
  public color : string;
  public model : string;
  public speed : number;

  constructor(model:any = null) {
    this.color = "White";
    this.speed = 0;
    if (model == null) {
      this.model = "BMW Generic";
    } else {
      this.model = model;
    }
  }

  public getColor() {
    return this.color;
  }

  public setColor(color : string) {
    this.color = color;
  }

  public getModel() {
    return this.model;
  }

  public setModel(model : string) {
    this.model = model;
  }

  public speedUp() {
    this.speed++;
  }

  public break() {
    this.speed--;
  }

  public getSpeed() : number {
    return this.speed;
  }


}

var car = new Car("Ferrari");

car.speedUp();
car.speedUp();
car.speedUp();

console.log("The color of the car is: " + car.getColor());
console.log("The velocity of the car is: " + car.getSpeed());
car.break();
console.log("The velocity of the car after break is: " + car.getSpeed());

console.log("The model of the car is: " + car.getModel());
