//Cost calculation
function calculateCost() {
	var itemTotal = 0;
	var errorMessage = "";

//Available items
	var americano = document.getElementById("americano");
	var espresso = document.getElementById("espresso");
	var blackcoffee = document.getElementById("blackcoffee");
	var latte = document.getElementById("latte");
	var mocha = document.getElementById("mocha");
	var cappuccino = document.getElementById("cappuccino");
	var macchiato = document.getElementById("macchiato");
	var conpanna = document.getElementById("conpanna");
	var icedcoffee = document.getElementById("icedcoffee");
	var coldbrew = document.getElementById("coldbrew");
	var hotchocolate = document.getElementById("hotchocolate");
	var donation = document.getElementById("donation");
	
//Add coffee price when checked
	(americano.checked) ? (itemTotal += 2) : (itemTotal += 0);
	(espresso.checked) ? (itemTotal += 1) : (itemTotal += 0);
	(blackcoffee.checked) ? (itemTotal += 2) : (itemTotal += 0);
	(latte.checked) ? (itemTotal += 3) : (itemTotal += 0);
	(mocha.checked) ? (itemTotal += 4) : (itemTotal += 0);
	(cappuccino.checked) ? (itemTotal += 3) : (itemTotal += 0);
	(macchiato.checked) ? (itemTotal += 1.50) : (itemTotal += 0);
	(conpanna.checked) ? (itemTotal += 1.50) : (itemTotal += 0);
	(icedcoffee.checked) ? (itemTotal += 3) : (itemTotal += 0);
	(coldbrew.checked) ? (itemTotal += 3) : (itemTotal += 0);
	(hotchocolate.checked) ? (itemTotal += 2.50) : (itemTotal += 0);
	
	
//Adding donation and pop up window thanking for donation
	if (donation.value > 0) {
		itemTotal += parseFloat(donation.value);
		document.getElementById("donationDisplay").innerHTML = "Thank you for your donation!";
	}

//Prints total cost
	document.getElementById("total").innerHTML = "$" + itemTotal.toFixed(2);
		
//Error message if no items are selected
	try{
		if (itemTotal === 0) {
			throw "Please select a type of coffee or add a donation.";
		}
	}
	catch(itemTotalError) {
		errorMessage = itemTotalError;
	}finally{
		document.getElementById("errorMsg").innerHTML = errorMessage;
	}
}

//Prints browser info
function displayBrowserInfo() {
	document.getElementById("browser").textContent = navigator.appName;
	document.getElementById("version").textContent = navigator.appVersion;
	document.getElementById("location").textContent = navigator.geolocation;
	document.getElementById("connection").textContent = navigator.onLine;
	document.getElementById("system").textContent = navigator.platform;
	document.getElementById("agent").textContent = navigator.userAgent;
}

//Loads browser info function upon the page loading
if(window.addEventListener){
	window.addEventListener("load", displayBrowserInfo, false);
}else if (window.attachEvent){
	window.attachEvent("onload", displayBrowserInfo);
}

//Uncheck boxes when form resets
function resetForm(){
	document.getElementById("americano").checked = false;
	document.getElementById("espresso").checked = false;
	document.getElementById("blackcoffee").checked = false;
	document.getElementById("latte").checked = false;
	document.getElementById("mocha").checked = false;
	document.getElementById("cappuccino").checked = false;
	document.getElementById("macchiato").checked = false;
	document.getElementById("conpanna").checked = false;
	document.getElementById("icedcoffee").checked = false;
	document.getElementById("coldbrew").checked = false;
	document.getElementById("hotchocolate").checked = false;
	document.getElementById("donation").value = 0;
	
	
	if(document.addEventListener){
		document.getElementById("donation").addEventListener("change", calculateCost, false)
	}else if(document.attachEvent){
		document.getElementById("donation").attachEvent("onchange", calculateCost);
	}
	if(document.addEventListener){
		document.getElementById("calculate").addEventListener("click", calculateCost, false);
	}else if(document.attachEvent){
		document.getElementById("calculate").attachEvent("onclick", calculateCost);
	}
}

//Resets form when page is loaded
if(window.addEventListener){
	window.addEventListener("load", resetForm, false);
}else if (window.attachEvent){
	window.attachEvent("onload", resetForm)
}


