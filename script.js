// create object
const car = {
    brand: "Toyota",
    model: "Camry",
    year: 2023,
    drive: function() {
      console.log(`Driving the ${this.brand} ${this.model}!`);
    }
  };
  
  // Call method
  car.drive();
  