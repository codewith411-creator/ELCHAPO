function timeAlert() {
  const date = new Date();
  //alert(`time stamp:${date.toISOString()}`);
}
timeAlert();

function areaOfTriangle(base, height) {
  console.log(`base is ${base} its type is ${typeof base}`);
  console.log(`height is ${height} its type is ${typeof height}`);
  const area = 0.5 * base * height;
  console.log(
    `for triangle with base ${base} and height ${height} area is ${area}`,
  );
}
areaOfTriangle(5, 10);
areaOfTriangle(20);
areaOfTriangle(20, 30);

let base1 = 50;
let height1 = 60;

areaOfTriangle(base1, height1);

let base2 = "hello";
let height2 = true;

areaOfTriangle(base2, height2);
console.log(typeof areaOfTriangle);
