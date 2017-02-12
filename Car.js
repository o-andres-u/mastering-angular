var Car = (function () {
    function Car() {
        this.speed = 0;
    }
    Car.prototype.getColor = function () {
        return this.color;
    };
    Car.prototype.setColor = function (color) {
        this.color = color;
    };
    Car.prototype.speedUp = function () {
        this.speed++;
    };
    Car.prototype["break"] = function () {
        this.speed--;
    };
    Car.prototype.getSpeed = function () {
        return this.speed;
    };
    return Car;
}());
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
car["break"]();
console.log("The velocity of the car 1 after break is: " + car.getSpeed());
