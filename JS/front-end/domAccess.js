// 1. getElementById
const divElement = document.getElementById("div1");
console.log(divElement);

// 2. getElementsByClassName
const classElements = document.getElementsByClassName("list-item");
console.log(classElements);

// 3. querySelector (ID)
const divQuery = document.querySelector("#div1");
console.log(divQuery);

// 4. querySelector (Class - first matching element)
const firstListItem = document.querySelector(".list-item");
console.log(firstListItem);

// 5. querySelectorAll (Class - all matching elements)
const allListItems = document.querySelectorAll(".list-item");
console.log(allListItems);

// Loop through all elements returned by querySelectorAll
for (const item of allListItems) {
  console.log(item);
}

//Click function
function clickButton() {
    console.log("youve clicked me!");
}

//Replace the content 
function changeContent() {
    document.querySelector('#butt1').innerHTML='<ul>
      <li class="list-item">Apple</li>
      <li class="list-item">Banana</li>
      <li class="list-item">Orange</li>
    </ul>'
}
//Update the content 
function updateContent(params) {
    document.querySelector('#butt1').innerText=
}