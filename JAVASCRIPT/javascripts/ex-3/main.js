// Event list
const events = [
    {
        name: "Music Fest",
        date: "2026-06-10",
        seats: 20
    },
    {
        name: "Coding Workshop",
        date: "2025-01-01",
        seats: 10
    },
    {
        name: "Dance Event",
        date: "2026-07-15",
        seats: 0
    }
];
const today = new Date();
events.forEach(event => {
    let eventDate = new Date(event.date);

    // Condition check
    if (eventDate > today && event.seats > 0) {
        console.log(
            `${event.name} | Date: ${event.date} | Seats: ${event.seats}`
        );
    } else {
        console.log(`${event.name} is unavailable`);
    }
});
function register(event) {
    try {
        if (event.seats <= 0) {
            throw "No seats available";
        }
        event.seats--;

        console.log(
            `Registered successfully. Remaining seats: ${event.seats}`
        );
    } catch (error) {
        console.log("Registration Error: " + error);
    }
}
// Test registration
register(events[0]);
register(events[2]);