//
//The while loop that increments a value
let n = 0;
let condition = true;
while (condition) {
  //checks if condition is fulfilled
  if (n >= 10) {
    condition = false;
  }
  console.log("n is :", n);
  n++;
}
console.log(
  `................................\n***DECREMENTS A VALUE***\n................................`,
);
//
//while loop that decrements a value
//
function countDown(num) {
  //checks if condition is met
  while (num > 0) {
    console.log("num is: ", num);
    num--;
  }
}
countDown(10);
console.log(
  `................................\n***PRACTICE EXERCISE***\n................................`,
);
//
//
function takeNumber() {
  let num1;
  let num2;
  let condition = true;

  // Keep asking until valid numbers greater than 1 are entered
  while (condition) {
    num1 = Number(prompt("Enter number 1: "));
    num2 = Number(prompt("Enter number 2: "));
    if (num1 && num2) {
      condition = false;
    } else {
      alert("Please enter valid numbers greater than 1.");
    }
  }

  //Multiply the two numbers
  multiplyNumber(num1, num2);

  function multiplyNumber(num1, num2) {
    if (!num1 && !num2) {
      return;
    }
  }
  for (let i = num1; i >= 1; i--) {
    for (let k = num2; k >= 1; k--) {
      console.log(`${i}*${k} = ${i * k}`);
    }
    console.log("..................");
  }
}
takeNumber();
