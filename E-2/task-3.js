var CarDetails = /** @class */ (function () {
    function CarDetails(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    CarDetails.prototype.describe = function () {
        console.log("Car Details: ".concat(this.model, " was made by ").concat(this.make, " in ").concat(this.year));
    };
    return CarDetails;
}());
var car = new CarDetails("Rolls Royce", "Cullinan", 2018);
car.describe();
