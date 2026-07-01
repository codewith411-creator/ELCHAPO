function areaCircle(r) {
  return Math.PI * r * r;
}

let ac = areaCircle;
console.log(typeof ac);
function calcVolume(base, height) {
  return base * height;
}
let volA = calcVolume;
console.log(volA);

volA = function (base, height) {
  return base * height;
};
console.log(volA(10, 5));
