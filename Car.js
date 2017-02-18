var Car = (function () {
    function Car(model) {
        if (model === void 0) { model = null; }
        this.color = "White";
        this.speed = 0;
        if (model == null) {
            this.model = "BMW Generic";
        }
        else {
            this.model = model;
        }
    }
    Car.prototype.getColor = function () {
        return this.color;
    };
    Car.prototype.setColor = function (color) {
        this.color = color;
    };
    Car.prototype.getModel = function () {
        return this.model;
    };
    Car.prototype.setModel = function (model) {
        this.model = model;
    };
    Car.prototype.speedUp = function () {
        this.speed++;
    };
    Car.prototype.break = function () {
        this.speed--;
    };
    Car.prototype.getSpeed = function () {
        return this.speed;
    };
    return Car;
}());
var car = new Car("Ferrari");
car.speedUp();
car.speedUp();
car.speedUp();
console.log("The color of the car is: " + car.getColor());
console.log("The velocity of the car is: " + car.getSpeed());
car.break();
console.log("The velocity of the car after break is: " + car.getSpeed());
console.log("The model of the car is: " + car.getModel());
