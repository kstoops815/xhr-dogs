console.log("hello");

function executeThisCodeAfterFileLoads(){
	var dogsData = JSON.parse(this.responseText).dogs;
	//console.log("dogs", dogsData);
	getBreeds(dogsData);
}

function executeThisCodeIfFileErrors(){
	console.log("Shit broke");
}

var myDogs = new XMLHttpRequest();
myDogs.addEventListener("load", executeThisCodeAfterFileLoads);
myDogs.addEventListener("error", executeThisCodeIfFileErrors);
myDogs.open("GET", "dogs.json");
myDogs.send();

function getBreeds(dogz){
	//console.log("dogs array inside getBreedz", dogz);
	var myBreeds = new XMLHttpRequest();
	myBreeds.addEventListener("load", executeThisCodeAfterBreedsLoads);
	myBreeds.addEventListener("error", executeThisCodeIfFileErrors);
	myBreeds.open("GET", "breeds.json");
	myBreeds.send();

	function executeThisCodeAfterBreedsLoads(){
	var breedsData = JSON.parse(this.responseText).breeds;
	// console.log("breeds", breedsData);
	// console.log("dogs next to breeds", dogz);
	combinedArray(dogz, breedsData);
	}	
}

function combinedArray(dogsArray, breedsArray){
	// console.log("dogsArray", dogsArray);
	// console.log("breedsArray", breedsArray);
	//loop through dogs and look at breed_id
	dogsArray.forEach(function(dog){
		var currentBreedId = dog["breed-id"];
		
		//console.log("dog breed-id", currentBreedId);
		breedsArray.forEach(function(breed){
			if(currentBreedId === breed.id){
			//console.log("one breed", breed);

		//this adds these properties to the dog array
			dog["dogBreed"] = breed.name;
			dog["basePrice"] = breed["base-price"];
			dog["description"] = breed.description;
		//this creates a new key value by adding two other key values together
			dog["finalPrice"] = dog["add-on-price"] + dog.basePrice; 
			}
		});
		
	});
	//loop through breeds and find matching breed_id
	// make final price
	console.log("all the dogs", dogsArray);
	domString(dogsArray);
}

function domString(dogs){
	var reallyLongDomString = "";
	//usual stuff
	writeToDom(reallyLongDomString);
}

function writeToDom(strang){
	//put in the DOM;
}


//What the hell did we just do?

	//1. XHR to dogs.json
	//2. call helper function (getBreeds) that sets us XHR to breeds and passes dogs
	//3. put XHR breeds.json load function inside helper function
	//4. call combineArray












