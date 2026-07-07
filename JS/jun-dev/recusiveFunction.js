//Create a recusive function
//
//function that call itself

function salaryGrossPrompt() {
  let gross = prompt("Enter your gross salary:");
  //checks if the condition is achieved
  if (!isNaN(gross)) {
    alert(`You've entered your gross salary: ${gross}`);
    return Number(gross);
  }

  alert("Invalid gross salary entered!\nPlease enter a number greater than 0.");
  return salaryGrossPrompt();
}

salaryGrossPrompt();

/*
   Create function to calculate factorial of number 
*/

function factorial(num) {
  // Validate input is greater than or equal to 1
  if (isNaN(num) || num < 1) {
    return "Please enter a number greater than or equal to 1.";
  }
  // Starting number is equal to 1
  if (num === 1) {
    return 1;
  }

  // Calculate factorial
  return num * factorial(num - 1);
}

console.log(factorial(3)); // 120
console.log(factorial(4)); // 24
console.log(factorial(1)); // 1
