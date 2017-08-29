console.log("hello");

function executeThisCodeAfterFileLoads(){
	var data = JSON.parse(this.responseText).dogs;
	console.log("dogs", data);
}

function executeThisCodeIfFileErrors(){
	console.log("Shit broke");
}

var myDogs = new XMLHttpRequest();
myDogs.addEventListener("load", executeThisCodeAfterFileLoads);
myDogs.addEventListener("error", executeThisCodeIfFileErrors);
myDogs.open("GET", "dogs.json");
myDogs.send();

function executeThisCodeAfterFileLoads2(){
	var data = JSON.parse(this.responseText).breeds;
	console.log("breeds", data);
}

var myBreeds = new XMLHttpRequest();
myBreeds.addEventListener("load", executeThisCodeAfterFileLoads2);
myBreeds.addEventListener("error", executeThisCodeIfFileErrors);
myBreeds.open("GET", "breeds.json");
myBreeds.send();
