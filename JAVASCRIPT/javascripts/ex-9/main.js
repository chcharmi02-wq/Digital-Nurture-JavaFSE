// Access Elements
const loader =
document.querySelector(
"#loader"
);

const eventBox =
document.querySelector(
"#events"
);


// Show Data
function displayEvents(data){

eventBox.innerHTML = "";

data.forEach(function(event){

let card =
document.createElement(
"div"
);

card.className =
"card";

card.innerHTML =

`
<h3>${event.title}</h3>
<p>ID:
${event.id}</p>
`;

eventBox.appendChild(
card
);

});

}


// Fetch using Promise
function fetchUsingPromise(){

loader.style.display =
"block";

fetch(
"https://jsonplaceholder.typicode.com/posts"
)

.then(function(response){

return response.json();

})

.then(function(data){

displayEvents(
data.slice(0,5)
);

loader.style.display =
"none";

})

.catch(function(){

loader.style.display =
"none";

alert(
"Error loading data"
);

});

}


// Fetch using Async/Await
async function fetchUsingAsync(){

try{

loader.style.display =
"block";

let response =
await fetch(
"https://jsonplaceholder.typicode.com/posts"
);

let data =
await response.json();

displayEvents(
data.slice(0,5)
);

loader.style.display =
"none";

}

catch{

loader.style.display =
"none";

alert(
"Error loading data"
);

}

}