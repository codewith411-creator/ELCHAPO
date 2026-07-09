//
// Creating an object literal
console.log("******************************");
console.log("LOGBOOK DETAILS");
console.log("******************************");
//
//
let car = {
  registrationNumber: "KDL 123X",
  make: "Toyota",
  model: "RAV4",
  year: 2019,
  chassisNumber: "JTMDFRFV0KD01XXXX",
  engineNumber: "2AR-1234567",
  bodyType: "Station Wagon / SUV",
  fuelType: "Petrol / Gasoline",
  engineCapacity: 2494,
  color: "Pearl White",
  currentOwner: "Richie Mwebi",
  funFact: "This car has never caused any accident and it's in good condition!",
  details() {
    alert("THESE ARE MY VEHICLE DETAILS");
    console.log(`
Registration/Plate Number: ${this.registrationNumber}
Vehicle Make: ${this.make}
Vehicle Model: ${this.model}
Year of Manufacture: ${this.year}
Chassis/Frame Number: ${this.chassisNumber}
Engine Number: ${this.engineNumber}
Body Type: ${this.bodyType}
Fuel Type: ${this.fuelType}
Engine Capacity: ${this.engineCapacity} cc
Color: ${this.color}
Current Registered Owner: ${this.currentOwner}
Fun Fact: ${this.funFact}
`);
  },
};
car.details();
//
//Accessing the object properties using dot notation
//
console.log("******************************");
console.log("USING DOT NOTATION");
console.log("******************************");
console.log(
  `Registration Number is ${car.registrationNumber} ${typeof car.registrationNumber}`,
);
console.log(`Vehicle Make is ${car.make} ${typeof car.make}`);
console.log(`Vehicle Model is ${car.model} ${typeof car.model}`);
console.log(`Year of Manufacture is ${car.year} ${typeof car.year}`);
console.log(
  `Chassis Number is ${car.chassisNumber} ${typeof car.chassisNumber}`,
);
console.log(`Engine Number is ${car.engineNumber} ${typeof car.engineNumber}`);
console.log(`Body Type is ${car.bodyType} ${typeof car.bodyType}`);
console.log(`Fuel Type is ${car.fuelType} ${typeof car.fuelType}`);
console.log(
  `Engine Capacity is ${car.engineCapacity} ${typeof car.engineCapacity}`,
);
console.log(`Color is ${car.color} ${typeof car.color}`);
console.log(`Current Owner is ${car.currentOwner} ${typeof car.currentOwner}`);
console.log(`Fun Fact is ${car.funFact} ${typeof car.funFact}`);
//
//Accessing the object properties using bracket notation
//
console.log("******************************");
console.log("USING BRACKET NOTATION");
console.log("******************************");
console.log(
  `Registration Number is ${car["registrationNumber"]} ${typeof car["registrationNumber"]}`,
);
console.log(`Vehicle Make is ${car["make"]} ${typeof car["make"]}`);
console.log(`Vehicle Model is ${car["model"]} ${typeof car["model"]}`);
console.log(`Year of Manufacture is ${car["year"]} ${typeof car["year"]}`);
console.log(
  `Chassis Number is ${car["chassisNumber"]} ${typeof car["chassisNumber"]}`,
);
console.log(
  `Engine Number is ${car["engineNumber"]} ${typeof car["engineNumber"]}`,
);
console.log(`Body Type is ${car["bodyType"]} ${typeof car["bodyType"]}`);
console.log(`Fuel Type is ${car["fuelType"]} ${typeof car["fuelType"]}`);
console.log(
  `Engine Capacity is ${car["engineCapacity"]} ${typeof car["engineCapacity"]}`,
);
console.log(`Color is ${car["color"]} ${typeof car["color"]}`);
console.log(
  `Current Owner is ${car["currentOwner"]} ${typeof car["currentOwner"]}`,
);
console.log(`Fun Fact is ${car["funFact"]} ${typeof car["funFact"]}`);

console.log("******************************");
