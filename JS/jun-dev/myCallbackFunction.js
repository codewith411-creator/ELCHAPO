// Calculate the area of a circle
const circleArea = (radius) => {
  return Math.PI * radius * radius;
};

// Calculate the area of a rectangle
const rectangleArea = (side1, side2) => {
  return side1 * side2;
};

// Calculate the area of a triangle
const triangleArea = (side1, side2) => {
  return 0.5 * side1 * side2;
};

function shapeArea(shapeFunc, shapeName, length, width) {
  // Check if the first argument is a function
  if (typeof shapeFunc !== "function") {
    console.log("First argument must be a function.");
    return;
  }

  console.log(`Shape function: ${shapeFunc.name}`);
  console.log(`Shape name: ${shapeName}`);
  console.log(`Length: ${length}`);
  console.log(`Width: ${width}`);
  console.log("-------------------------");

  if (shapeFunc.name === "circleArea" && shapeName === "circle") {
    return shapeFunc(length);
  } else if (shapeFunc.name === "rectangleArea" && shapeName === "rectangle") {
    return shapeFunc(length, width);
  } else if (shapeFunc.name === "triangleArea" && shapeName === "triangle") {
    return shapeFunc(length, width);
  } else {
    console.log("Sorry, the function and shape name do not match.");
    return;
  }
}

// Test cases
console.log(shapeArea(circleArea, "circle", 12));
console.log(shapeArea(rectangleArea, "rectangle", 42, 9));
console.log(shapeArea(triangleArea, "triangle", 25, 15));
