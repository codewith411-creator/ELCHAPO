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
  // Validate input
  if (isNaN(num) || num < 1) {
    return "Please enter a number greater than or equal to 1.";
  }

  // Starting number
  if (num === 1) {
    return 1;
  }

  // Recursive calculation formula
  return 
  return num * factorial(num - 1);
}

console.log(factorial(5)); // 120
console.log(factorial(0)); // 24
console.log(factorial(1)); // 1
