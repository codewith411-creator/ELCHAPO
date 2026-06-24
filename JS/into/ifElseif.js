let age = prompt("enter your age:");
alert(`you entered ${age}`);

if (age < 13) {
  alert("You are a baby.");
} else if (age < 18) {
  alert("You are a teen.");
} else if (age < 27) {
  alert("You can legally drink and smoke.");
} else if (age < 45) {
  alert("Best age for marriage.");
} else if (age < 60) {
  alert("Best age for retirement.");
} else {
  alert("You are a senior citizen.");
}

if (age >= 0 && age <= 12) {
  alert("You are a baby.");
}

if (age >= 13 && age <= 17) {
  alert("You are a teen.");
}

if (age >= 18 && age <= 26) {
  alert("You can legally drink and smoke.");
}

if (age >= 27 && age <= 44) {
  alert("Best age for marriage.");
}

if (age >= 45 && age <= 59) {
  alert("Best age for retirement.");
}

if (age >= 60) {
  alert("You are a senior citizen.");
}
