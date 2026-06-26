let grossMonthlySalary = null;

while (true) {
  let gross = Number(prompt("Enter your Gross Monthly Salary (KES)"));

  if (!isNaN(gross) && gross > 0) {
    grossMonthlySalary = gross;
    break;
  }

  alert("Invalid amount entered.\nPlease enter a number greater than 0.");
}

// calculate employee NSSF

let employeeNSSF = 0;

if (grossMonthlySalary <= 9000) {
  employeeNSSF = grossMonthlySalary * 0.06;
} else if (grossMonthlySalary <= 108000) {
  employeeNSSF = 9000 * 0.06 + (grossMonthlySalary - 9000) * 0.06;
} else {
  employeeNSSF = 6480;
}

//match employer nssf with employee nssf

let employerNSSF = employeeNSSF;
let totalNSSF = employeeNSSF + employerNSSF;
alert(`Total NSSF: KES ${totalNSSF}`);

//calculate taxable pay

let taxablePay = grossMonthlySalary - employeeNSSF;
alert(`Taxable Pay: KES ${taxablePay}`);

//calculate PAYE

let paye = 0;

if (taxablePay <= 24000) {
  paye = taxablePay * 0.1;
} else if (taxablePay <= 32333) {
  paye = 24000 * 0.1 + (taxablePay - 24000) * 0.25;
} else if (taxablePay <= 500000) {
  paye = 24000 * 0.1 + 8333 * 0.25 + (taxablePay - 32333) * 0.3;
} else if (taxablePay <= 800000) {
  paye =
    24000 * 0.1 +
    8333 * 0.25 +
    (500000 - 32333) * 0.3 +
    (taxablePay - 500000) * 0.325;
} else {
  paye =
    24000 * 0.1 +
    8333 * 0.25 +
    (500000 - 32333) * 0.3 +
    300000 * 0.325 +
    (taxablePay - 800000) * 0.35;
}

//calculate final paye after relief

const personalRelief = 2400;
let finalPAYE = paye - personalRelief;
alert(`PAYE After Relief: KES ${finalPAYE}`);

//calculate SHIF (2.75%)

let shif = grossMonthlySalary * 0.0275;
alert(`SHIF: KES ${shif}`);

//calculate total net salary

let netSalary = grossMonthlySalary - employeeNSSF - shif - finalPAYE;
alert(`Net Salary: KES ${netSalary}`);

// OUTPUT

console.log("========== PAYSLIP ==========");
console.log(`Gross Salary: KES ${grossMonthlySalary.toFixed(2)}`);

console.log(`Employee NSSF: KES ${employeeNSSF.toFixed(2)}`);
console.log(`Employer NSSF: KES ${employerNSSF.toFixed(2)}`);
console.log(`Total NSSF: KES ${totalNSSF.toFixed(2)}`);

console.log(`Taxable Pay: KES ${taxablePay.toFixed(2)}`);

console.log(`PAYE Before Relief: KES ${paye.toFixed(2)}`);
console.log(`Personal Relief: KES ${personalRelief.toFixed(2)}`);
console.log(`PAYE After Relief: KES ${finalPAYE.toFixed(2)}`);

console.log(`SHIF: KES ${shif.toFixed(2)}`);

console.log(`Net Salary: KES ${netSalary.toFixed(2)}`);
