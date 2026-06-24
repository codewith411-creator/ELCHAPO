let number1=4534;
console.log("number1",number1,"it's type is",typeof number1)

let striNumber="42444";
console.log(`striNumber "${striNumber}"`,"it's type is",typeof striNumber)

let myName="John";
console.log("myName",myName,"it's type is",typeof myName)

let isSingle=false;
console.log("isSingle",isSingle,"it's type is",typeof isSingle)

let firstName=null;
console.log("firstName",firstName,"it's type is",typeof firstName)

let missingMark;
console.log("missingMark",missingMark,"it's type is",typeof missingMark)

const bonus="3000"
const salary=50000
const salaryGross=bonus+salary;
console.log("Gross salary",salaryGross)

const paye=salaryGross*0.16;
console.log("For gross salary of",salaryGross,"Paye is",paye)

const SHA=2500;
console.log("SHA deduction ",SHA)

const totalDeductions=paye+SHA;
console.log("Total deductions ",totalDeductions)

const netSalary=salaryGross-totalDeductions;
console.log("Your net salary is ",netSalary)

