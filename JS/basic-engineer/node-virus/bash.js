//Import the file library
const fs = require("fs");

function testAppendFile() {
  //Run the loop upto 1000
  for (let i = 0; i <= 10; i++) {
    const date = new Date();
    const fileData = `Hello world im testing file ${date.toISOString()}\n`;
    //Create the file
    fs.appendFile("myfiles.txt", fileData, (err) => {
      if (err) {
        console.error("Error writing file:", err);
        return;
      }
      console.log(`File created successfully!`);
    });
  }
}
testAppendFile();
