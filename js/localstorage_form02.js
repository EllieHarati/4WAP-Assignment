var myInterval = setInterval(setData, 3000); //saves data locally every 3 seconds

function setData(){
	var datepick = document.getElementById("datepick").value;
	var rvalue = document.getElementById("rvalue").value;
	var tip = document.getElementById("tip").value;
	
	localStorage.setItem("datepick", datepick);
	localStorage.setItem("rvalue", rvalue);
	localStorage.setItem("tip", tip);
}


function getData(){
	var datepick = localStorage.getItem("datepick");
	var rvalue = localStorage.getItem("rvalue");
	var tip = localStorage.getItem("tip");
	
	document.getElementById("datepick").value = datepick;
	document.getElementById("rvalue").value = rvalue;
	document.getElementById("tip").value = tip;
}