let numb1="45";
let numb2=34;

let strictEqual=numb1===numb2
console.log(`numb1=${numb1}===numb2=${numb2}`)
console.log(`${strictEqual} its type is ${typeof strictEqual}`)
let noneStrictEquality=numb1==numb2
console.log(`numb1=${numb1}==numb2=${numb2}`)
console.log(`${noneStrictEquality} its type is ${typeof noneStrictEquality}`)


let val1="33";
let val2=45;
let strictInequality=val1!==val2
console.log(`val1=${val1} !== val2=${val2}`)
console.log(`${strictInequality} its type is ${strictInequality}`)

let Inequality=val1!=val2
console.log(`val1=${val1} !=val2=${val2}`)
console.log(`${Inequality} its type is ${typeof Inequality}`)


let numb3 = 20;
let numb4 = 10;

let str1 = "a";
let str2 = "b";

console.log(`numb3=${numb3} and numb4=${numb4}`);
console.log(`str1=${str1} and str2=${str2}`);

console.log(`numb3 > numb4: ${numb3 > numb4}`);
console.log(`str2 > str1: ${str2 > str1}`);

console.log(`numb3 >= numb4: ${numb3 >= numb4}`);
console.log(`str2 >= str1: ${str2 >= str1}`);

console.log(`numb3 < numb4: ${numb3 < numb4}`);
console.log(`str2 < str1: ${str2 < str1}`);

console.log(`numb3 <= numb4: ${numb3 <= numb4}`);
console.log(`str2 <= str1: ${str2 <= str1}`);
