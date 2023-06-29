//Interprets contents in JavaScript strict mode
"use strict"; 

//Creates new variable object with an empty string value
var suggest = {
	flavor: "",
}

//Sets up a function to confirm user information
function confirmInfo(){
//Creates new list items to contain suggestions
	var suggestionList = document.getElementById("flavors");
	var flavorName = document.createElement("tr");
//Gathers information entered by user
	suggest.flavor = document.getElementById("flavor").value;
//Prints user information
	flavorName.innerHTML = suggest.flavor;
	suggestionList.appendChild(flavorName);
//Clears the form
	document.getElementById("flavor").value = "";
//Displays suggestion section
	document.getElementById("suggest").style.display = "block";
	document.getElementById("flavorSection").style.display = "block";
//Returns focus to the flavor entry field to add another suggestion
	document.getElementById("flavor").focus();
}

//Creates event listeners function
function createEventListeners(){
//Sets variable for the add button
	var addButton = document.getElementById("addFlavor");
//Calls the confirmInfo function when the add button is clicked
	if (addButton.addEventListener){
		addButton.addEventListener("click", confirmInfo, false);
	}else if (addButton.attachEvent){
		addButton.attachEvent("onclick", confirmInfo);
	}
}

//Calls createEventListeners function on the page load
if (window.addEventListener){
	window.addEventListener("load", createEventListeners, false);
}else if (window.attachEvent){
	window.attachEvent("onload", createEventListeners);
}
