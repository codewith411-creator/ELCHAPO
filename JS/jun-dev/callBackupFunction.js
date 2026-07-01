//named function
function currentTime() {
  let date = new Date();
  alert(`${date}`);
}
setInterval(currentTime(), 1000);

//anonymous function
setInterval(function () {
  let date = new Date();
  console.log(`${date}`);
}, 2000);

//arrow function
setInterval(() => {
  let date = new Date();
  console.log(`${date}`);
}, 4000);
