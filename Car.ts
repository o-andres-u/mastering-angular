class Car {
  public color : string;
  public model : string;
  public speed : number = 0;

  public getColor() {
    return this.color;
  }

  public setColor(color : string) {
    this.color = color;
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

var car = new Car();
var car_two = new Car();
var car_three = new Car();

car.setColor("Red");
car_two.setColor("Blue");
car_three.setColor("Green");

car.speedUp();
car.speedUp();
car.speedUp();

console.log("The color of the car 1 is: " + car.getColor());
console.log("The color of the car 1 is: " + car_two.getColor());
console.log("The color of the car 1 is: " + car_three.getColor());

console.log("The velocity of the car 1 is: " + car.getSpeed());

car.break();

console.log("The velocity of the car 1 after break is: " + car.getSpeed());
