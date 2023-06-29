//Validates form
function validateForm() {
	var name = document.getElementsByName("name").value;
	var email = document.getElementsByName("email").value;
	var phone = document.getElementsByName("phone").value;
	var message = document.getElementsByName("message").value;
	var preference = document.getElementsByName("preference").checked;
 
	if (name === "") {
    document.getElementById("formError").innerHTML = "Your name must be filled out!";
		return false;
	}
	if (email === "") {
    document.getElementById("formError").innerHTML = "Your email must be filled out!";
		return false;
	}
	if (phone === "") {
    document.getElementById("formError").innerHTML = "Your phone must be filled out!";
		return false;
	}
	if (message === "") {
    document.getElementById("formError").innerHTML = "You must include a message for us!";
		return false;
	}
	if (preference[0].checked === false && preference[1].checked === false) {
	document.getElementById("formError").innerHTML = "You must select your prefered contact method!";
		return false;
	}
}

//Adds event Listener to trigger form validation on submit
	if(document.addEventListener){
		document.getElementById("submit").addEventListener("click", validateForm, false)
	}else if(document.attachEvent){
		document.getElementById("submit").attachEvent("onclick", validateForm);
	}