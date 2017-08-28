console.log("hello");

function executeThisCodeAfterFileLoads(){
	var data = JSON.parse(this.responseText);
	console.log("dogs", data.dogs);
}

function executeThisCodeIfFileErrors(){
	console.log("Shit broke");
}

var myRequest = new XMLHttpRequest();
myRequest.addEventListener("load", executeThisCodeAfterFileLoads);
myRequest.addEventListener("error", executeThisCodeIfFileErrors);
myRequest.open("GET", "dogs.json");
myRequest.send();

