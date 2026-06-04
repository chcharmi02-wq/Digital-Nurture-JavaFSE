// Access Elements
const form =
document.querySelector(
"#registerForm"
);

const message =
document.querySelector(
"#message"
);


// Submit Form
form.addEventListener(

"submit",

function(event){

event.preventDefault();


// Get Data
const userData = {

name:
document.querySelector(
"#name"
).value,

email:
document.querySelector(
"#email"
).value,

event:
document.querySelector(
"#event"
).value

};


message.innerText =
"Sending...";


// Delay Simulation
setTimeout(

function(){

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
userData
)

}

)

.then(

response => {

if(
!response.ok
){

throw new Error();

}

return response.json();

}

)

.then(

data => {

message.innerText =

"Registration Successful";

console.log(
data
);

}

)

.catch(

function(){

message.innerText =

"Registration Failed";

}

);

},

2000

);

}

);