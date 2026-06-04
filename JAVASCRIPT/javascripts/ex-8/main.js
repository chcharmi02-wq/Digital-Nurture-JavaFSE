// Event Data
let events = [

{
name: "Music Fest",
category: "Music",
seats: 5
},

{
name: "Workshop on Baking",
category: "Workshop",
seats: 3
},

{
name: "Dance Show",
category: "Dance",
seats: 2
}

];


// Access Elements
const eventBox =
document.querySelector("#events");

const category =
document.querySelector("#category");

const search =
document.querySelector("#search");


// Show Events
function displayEvents(data){

eventBox.innerHTML = "";

data.forEach(function(event){

let card =
document.createElement("div");

card.innerHTML =

`
<h3>${event.name}</h3>

<p>Category:
${event.category}</p>

<p>Seats:
${event.seats}</p>
`;


// Register Button
let button =
document.createElement("button");

button.innerText =
"Register";


// onclick
button.onclick =
function(){

if(
event.seats > 0
){

event.seats--;

displayEvents(data);

}
else{

alert(
"Seats Full"
);

}

};


card.appendChild(button);

eventBox.appendChild(card);

});

}


// onchange Filter
category.onchange =
function(){

let selected =
category.value;

if(
selected === "All"
){

displayEvents(events);

}
else{

let result =
events.filter(

e =>
e.category ===
selected

);

displayEvents(result);

}

};


// keydown Search
search.addEventListener(

"keydown",

function(){

let text =
search.value
.toLowerCase();

let result =
events.filter(

e =>

e.name
.toLowerCase()
.includes(text)

);

displayEvents(result);

}

);


// Initial Display
displayEvents(events);