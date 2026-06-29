function sayMyname() {
  let first_name = "james";
  console.log(`first name is ${first_name}`);
  let second_name = "mwangi";
  console.log(`second name is ${second_name}`);
  let full_name = `${first_name} ${second_name}`;
  console.log(`my full name is ${full_name}`);
  let isMarried = false;
  let age = 45;

  return `My full names: ${full_name} I'm married: ${isMarried}  My age is: ${age}`;
}

let sayMynameValue = sayMyname();
console.log(`function returned ${sayMynameValue}`);
