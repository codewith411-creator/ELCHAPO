const form = document.querySelector("#userForm");

form.addEventListener("submit", (event) => {

    event.preventDefault();

    const name = document.querySelector("#name").value;
    const email = document.querySelector("#email").value;

    console.log("Name:", name);
    console.log("Email:", email);

});