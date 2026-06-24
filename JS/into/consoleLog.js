const salaryGross=50000;
console.log("Gross salary",salaryGross)

const paye=salaryGross*0.16;
console.log("For gross salary of",salaryGross,"Paye is",paye)

const SHA=2500;
console.log("SHA deduction ",SHA)

const totalDeductions=paye+SHA;
console.log("Total deductions ",totalDeductions)

const netSalary=salaryGross-totalDeductions;
console.log("Your net salary is ",netSalary)