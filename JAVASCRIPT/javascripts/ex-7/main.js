// Event data
let events = [

{
name:"Music Fest",
seats:5
},

{
name:"Workshop on Baking",
seats:3
},

{
name:"Dance Show",
seats:0
}

];


// Access DOM
const container =
document.querySelector(
"#eventContainer"
);


// Render events
function displayEvents() {

container.innerHTML = "";

events.forEach(function(event,index){

let card =
document.createElement(
"div"
);

card.className =
"card";

card.innerHTML =
`
<h3>${event.name}</h3>

<p>Seats:
${event.seats}</p>
`;


// Register Button
let registerBtn =
document.createElement(
"button"
);

registerBtn.textContent =
"Register";

registerBtn.onclick =
function(){

if(
event.seats > 0
){

event.seats--;

displayEvents();

}
else{

alert(
"No seats available"
);

}

};


// Cancel Button
let cancelBtn =
document.createElement(
"button"
);

cancelBtn.textContent =
"Cancel";

cancelBtn.onclick =
function(){

event.seats++;

displayEvents();

};


card.appendChild(
registerBtn
);

card.appendChild(
cancelBtn
);

container.appendChild(
card
);

});

}


// Initial Display
displayEvents();