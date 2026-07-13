//Import the json file
const fs = require("fs");
const data = require("./newData.json");
console.log(data);

//loop using for...of
for (const person of data) {
  let title = person.gender === "Male" ? "Sir" : "Madam";

  let message = `
Dear ${title} ${person.first_name} ${person.last_name},

We regret to inform you that you will not be proceeding to the next stage of the interview.

Unfortunately, after carefully reviewing your application, we have decided to move forward with other candidates whose qualifications more closely match our current requirements.

We appreciate the time and effort you invested in the interview process and wish you success in your future endeavors.

Kind regards,
HR Department
`;

  console.log(message);
}
//
//Create new empty array
let output = [];

for (const person of data) {
  let title = person.gender === "Male" ? "Sir" : "Madam";

  let message = `Dear ${title},

We regret to inform you that you won't be going to the next stage of the interview.

The reason is that you are not a good fit for this position.

Kind regards,
HR Department`;

  output.push({
    ...person,
    message: message,
  });
}

// Save to output.json
fs.writeFileSync("./output.json", JSON.stringify(output, null, 2));

console.log("output.json created successfully!");
