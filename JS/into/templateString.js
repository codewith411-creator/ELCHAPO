let firstName="John";
let secondName="Thomas";
let age=34;
let address="Mombasa County";
let userDetails=firstName+" "+secondName+" "+age+" "+address;
console.log(userDetails)
console.log("User details is ",typeof userDetails )

let userDetails2=`${firstName} ${secondName} ${age} ${address}`
console.log(userDetails2)

let numb1=45;
console.log(`numb1 is ${numb1} its type is ${typeof numb1}`)
let numb2=56;
console.log(`numb2 is ${numb2} its type is ${typeof numb2}`)
let numb3=numb1+numb2+23;
console.log(`numb3 is ${numb3} its type is ${typeof numb3}`)
let numb4=numb1*numb2;
console.log(`numb4 is ${numb4} its type is ${typeof numb4}`)
let numb5=numb1**3
console.log(`numb5 is ${numb5} its type is ${typeof numb5}`)
let numb6=Math.pow(2,5)
console.log(`numb6 is ${numb6} its type is ${typeof numb6}`)

let numb7=64;
let numb8=4;
let divNumber=numb7/numb8
console.log(`divNumber is ${divNumber} its type is ${typeof divNumber}`)

let numb9=24
let numb10=5
let modNumber=numb9%numb10
console.log(`modNumber is ${modNumber} its type is ${typeof modNumber}`)
