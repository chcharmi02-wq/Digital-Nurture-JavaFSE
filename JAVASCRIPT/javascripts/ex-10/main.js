// Event List
const events = [

{
name: "Music Fest",
category: "Music",
seats: 50
},

{
name: "Workshop on Baking",
category: "Workshop",
seats: 30
},

{
name: "Dance Show",
category: "Dance",
seats: 20
}

];


// Function with Default Parameter
function addEvent(
name = "New Event",
category = "General",
seats = 10
){

return {

name,
category,
seats

};

}


// Add New Event
let newEvent = addEvent();

console.log(
"New Event:"
);

console.log(
newEvent
);


// Destructuring
events.forEach(
(event) => {

const {
name,
category,
seats
} = event;

console.log(
`Event:
${name}
|
${category}
|
Seats:
${seats}`
);

}
);


// Spread Operator
const clonedEvents = [
...events
];


// Filter Music Events
const musicEvents =

clonedEvents.filter(

event =>

event.category ===
"Music"

);

console.log(
"Filtered Events:"
);

console.log(
musicEvents
);