
let events = [];
events.push({
    name: "Music Night",
    category: "Music"
});

events.push({
    name: "Workshop on Baking",
    category: "Workshop"
});

events.push({
    name: "Dance Competition",
    category: "Dance"
});

events.push({
    name: "Live Music Show",
    category: "Music"
});


// Display all events
console.log("All Events:");
console.log(events);


// Filter only music events
let musicEvents =
events.filter(function(event) {

    return event.category === "Music";

});

console.log("Music Events:");
console.log(musicEvents);


// Format display cards using .map()
let displayCards =
events.map(function(event) {

    return event.name;

});

console.log("Display Cards:");
console.log(displayCards);