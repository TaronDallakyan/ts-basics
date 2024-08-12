interface Car {
  make: string;
  model: string;
  year: number;
}

class CarDetails implements Car {
  make: string;
  model: string;
  year: number;

  constructor(make: string, model: string, year: number) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  describe(): void {
    console.log(
      `Car Details: ${this.model} was made by ${this.make} in ${this.year}`
    );
  }
}

const car = new CarDetails("Rolls Royce", "Cullinan", 2018);
car.describe();
