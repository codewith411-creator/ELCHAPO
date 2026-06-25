let grossMonthlySalary = null;

while (true) {
  let gross = prompt("Enter your gross salary");

  if (!isNaN(gross)) {
    gross = Number(gross);

    if (gross > 0) {
      grossMonthlySalary = gross;
      break;
    }
  }

  alert(`Invalid amount entered.
Ensure you enter a number greater than 0.`);
}

console.log(
  `Gross salary is ${grossMonthlySalary}, its type is ${typeof grossMonthlySalary}`,
);

let paye = null;

if (grossMonthlySalary >= 0 && grossMonthlySalary <= 24000) {
  paye = grossMonthlySalary * 0.1;
} else if (grossMonthlySalary >= 24001 && grossMonthlySalary <= 32333) {
  paye = grossMonthlySalary * 0.25;
} else if (grossMonthlySalary >= 32334 && grossMonthlySalary <= 500000) {
  paye = grossMonthlySalary * 0.3;
} else if (grossMonthlySalary >= 500001 && grossMonthlySalary <= 800000) {
  paye = grossMonthlySalary * 0.325;
} else if (grossMonthlySalary > 800000) {
  paye = grossMonthlySalary * 0.35;
}

console.log(`PAYE = ${paye}`);
