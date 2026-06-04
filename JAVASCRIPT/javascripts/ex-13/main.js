const form =
document.getElementById(
"registerForm"
);

const message =
document.getElementById(
"message"
);

form.addEventListener(

"submit",

function(event){

event.preventDefault();

console.log(
"Form Submitted"
);

let name =
document.getElementById(
"name"
).value;

let email =
document.getElementById(
"email"
).value;

console.log(
"Name:",
name
);

console.log(
"Email:",
email
);

// Breakpoint
debugger;

let data = {
name,
email
};

console.log(
"Payload:",
data
);

fetch(
"https://jsonplaceholder.typicode.com/posts",

{
method:"POST",

headers:{
"Content-Type":
"application/json"
},

body:
JSON.stringify(
data
)

}

)

.then(
response =>
response.json()
)

.then(

result => {

console.log(
"Success:",
result
);

message.innerText =
"Registration Successful";

}

)

.catch(

error => {

console.log(
"Error:",
error
);

message.innerText =
"Registration Failed";

}

);

}

);