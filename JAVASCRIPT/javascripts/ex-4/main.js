// Store events
let events = [];

// Function to add event
function addEvent(name, category, seats) {
    events.push({
        name,
        category,
        seats
    });

    console.log(`${name} added successfully`);
}

// Function to register user
function registerUser(eventName) {

    let event = events.find(
        e => e.name === eventName
    );

    if (event && event.seats > 0) {
        event.seats--;

        console.log(
            `Registered for ${eventName}. Remaining seats: ${event.seats}`
        );

    } else {
        console.log("Registration failed");
    }
}

// Higher-order function with callback
function filterEventsByCategory(callback) {
    return events.filter(callback);
}

// Closure to track registrations
function registrationTracker(category) {

    let total = 0;

    return function () {
        total++;

        console.log(
            `Total registrations in ${category}: ${total}`
        );
    };
}

// Add events
addEvent("Music Fest", "Entertainment", 20);

addEvent("Coding Workshop", "Education", 15);

addEvent("Dance Show", "Entertainment", 10);

// Register users
registerUser("Music Fest");
registerUser("Music Fest");

// Closure usage
const entertainmentCount =
    registrationTracker("Entertainment");

entertainmentCount();
entertainmentCount();

// Dynamic search using callback
let result =
filterEventsByCategory(
    event =>
    event.category === "Entertainment"
);

console.log(result);