var myInterval = setInterval(setData, 3000); //saves data locally every 3 seconds
var i;
function setData(){
	var username = document.getElementById("username").value;
	var password = document.getElementById("password").value;
	var name = document.getElementById("name").value;
	var address = document.getElementById("address").value;
	var suburb = document.getElementById("suburb").value;
	var city = document.getElementById("city").value;
	var citymail = document.getElementById("citymail").value;
	var email = document.getElementById("email").value;
	var phone = document.getElementById("phone").value;
	var website = document.getElementById("website").value;
	var age = document.getElementById("age").value;
	var usernamemsg = document.getElementById("usernamemsg").innerHTML;
	var passwordmsg = document.getElementById("passwordmsg").innerHTML;
	var namemsg = document.getElementById("namemsg").innerHTML;
	var addressmsg = document.getElementById("addressmsg").innerHTML;
	var suburbmsg = document.getElementById("suburbmsg").innerHTML;
	var citymsg = document.getElementById("citymsg").innerHTML;
	var phonemsg = document.getElementById("phonemsg").innerHTML;
	var websitemsg = document.getElementById("websitemsg").innerHTML;
	var agemsg = document.getElementById("agemsg").innerHTML;
	var citymailmsg = document.getElementById("citymailmsg").innerHTML;
	var emailmsg = document.getElementById("emailmsg").innerHTML;
	
	localStorage.setItem("username", username);
	localStorage.setItem("password", password);
	localStorage.setItem("name", name);
	localStorage.setItem("address", address);
	localStorage.setItem("suburb", suburb);
	localStorage.setItem("city", city);
	localStorage.setItem("citymail", citymail);
	localStorage.setItem("email", email);
	localStorage.setItem("phone", phone);
	localStorage.setItem("website", website);
	localStorage.setItem("age", age);
	localStorage.setItem("usernamemsg", usernamemsg);
	localStorage.setItem("passwordmsg", passwordmsg);
	localStorage.setItem("namemsg", namemsg);
	localStorage.setItem("addressmsg", addressmsg);
	localStorage.setItem("suburbmsg", suburbmsg);
	localStorage.setItem("citymsg", citymsg);
	localStorage.setItem("phonemsg", phonemsg);
	localStorage.setItem("websitemsg", websitemsg);
	localStorage.setItem("agemsg", agemsg);
	localStorage.setItem("citymailmsg", citymailmsg);
	localStorage.setItem("emailmsg", emailmsg);
}


function getData(){
    var helpblock = document.getElementsByClassName("help-block");
    for(var i=0; i<helpblock.length; i++)
    {
			document.getElementsByClassName("help-block")[i].style.display= "block";
    }

	var username = localStorage.getItem("username");
	var password = localStorage.getItem("password");
	var name = localStorage.getItem("name");
	var address = localStorage.getItem("address");
	var suburb = localStorage.getItem("suburb");
	var city = localStorage.getItem("city");
	var citymail = localStorage.getItem("citymail");
	var email = localStorage.getItem("email");
	var phone = localStorage.getItem("phone");
	var website = localStorage.getItem("website");
	var age = localStorage.getItem("age");
	var usernamemsg = localStorage.getItem("usernamemsg");
	var passwordmsg = localStorage.getItem("passwordmsg");
	var namemsg = localStorage.getItem("namemsg");
	var addressmsg = localStorage.getItem("addressmsg");
	var suburbmsg = localStorage.getItem("suburbmsg");
	var citymsg = localStorage.getItem("citymsg");
	var phonemsg = localStorage.getItem("phonemsg");
	var websitemsg = localStorage.getItem("websitemsg");
	var agemsg = localStorage.getItem("agemsg");
	var citymailmsg = localStorage.getItem("citymailmsg");
	var emailmsg = localStorage.getItem("emailmsg");

	
	document.getElementById("username").value = username;
	document.getElementById("password").value = password;
	document.getElementById("name").value = name;
	document.getElementById("address").value = address;
	document.getElementById("suburb").value = suburb;
	document.getElementById("city").value = city;
	document.getElementById("citymail").value = citymail;
	document.getElementById("email").value = email;
	document.getElementById("phone").value = phone;
	document.getElementById("website").value = website;
	document.getElementById("age").value = age;
	document.getElementById("usernamemsg").innerHTML = usernamemsg;
	document.getElementById("passwordmsg").innerHTML = passwordmsg;
	document.getElementById("namemsg").innerHTML = namemsg;
	document.getElementById("addressmsg").innerHTML = addressmsg;
	document.getElementById("suburbmsg").innerHTML = suburbmsg;
	document.getElementById("citymsg").innerHTML = citymsg;
	document.getElementById("phonemsg").innerHTML = phonemsg;
	document.getElementById("websitemsg").innerHTML = websitemsg;
	document.getElementById("agemsg").innerHTML = agemsg;
	document.getElementById("citymailmsg").innerHTML = citymailmsg;
	document.getElementById("emailmsg").innerHTML = emailmsg;
}