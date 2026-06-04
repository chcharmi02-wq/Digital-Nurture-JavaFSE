// Access Form
const form =
document.querySelector(
"#registerForm"
);


// Submit Event
form.addEventListener(

"submit",

function(event){

event.preventDefault();


// Clear Errors
document.querySelector(
"#nameError"
).textContent = "";

document.querySelector(
"#emailError"
).textContent = "";

document.querySelector(
"#eventError"
).textContent = "";


// Capture Inputs
let name =
form.elements[
"username"
].value;

let email =
form.elements[
"email"
].value;

let selectedEvent =
form.elements[
"event"
].value;

let valid = true;


// Validation
if(
name === ""
){

document.querySelector(
"#nameError"
).textContent =
" Enter name";

valid = false;

}


if(
email === ""
){

document.querySelector(
"#emailError"
).textContent =
" Enter email";

valid = false;

}


if(
selectedEvent === ""
){

document.querySelector(
"#eventError"
).textContent =
" Select event";

valid = false;

}


// Success
if(
valid
){

document.querySelector(
"#message"
).innerHTML =

`
Registered Successfully

<br>

Name:
${name}

<br>

Email:
${email}

<br>

Event:
${selectedEvent}
`;

}

}

);