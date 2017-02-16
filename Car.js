class Car {
    constructor(model = null) {
        this.color = "White";
        this.speed = 0;
        if (model == null) {
            this.model = "BMW Generic";
        }
        else {
            this.model = model;
        }
    }
    getColor() {
        return this.color;
    }
    setColor(color) {
        this.color = color;
    }
    getModel() {
        return this.model;
    }
    setModel(model) {
        this.model = model;
    }
    speedUp() {
        this.speed++;
    }
    break() {
        this.speed--;
    }
    getSpeed() {
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
