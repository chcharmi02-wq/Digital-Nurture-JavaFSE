
class Event {

    constructor(name, date, seats) {
        this.name = name;
        this.date = date;
        this.seats = seats;
    }
}
Event.prototype.checkAvailability = function () {

    if (this.seats > 0) {
        return "Seats Available";
    } else {
        return "Event Full";
    }
};
const event1 =
new Event(
    "Music Fest",
    "15-06-2026",
    20
);

const event2 =
new Event(
    "Coding Workshop",
    "20-06-2026",
    0
);
console.log(
    event1.name +
    " → " +
    event1.checkAvailability()
);

console.log(
    event2.name +
    " → " +
    event2.checkAvailability()
);
console.log("Event Details:");

Object.entries(event1)
.forEach(([key, value]) => {

    console.log(
        `${key}: ${value}`
    );

});