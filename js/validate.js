
function validateErrors (fieldName, fieldMsg) {

	var field_name = document.getElementById (fieldName);
	var field_msg = document.getElementById (fieldMsg);
	//var fieldValue = document.getElementById (fieldName).value;
	var fieldValue = field_name.value;
	var fieldMsgValue = document.getElementById (fieldMsg).innerHTML ;
	
	var title_msg = document.getElementById(fieldName).getAttribute("title");

	var thePattern= new RegExp("^"+field_name.pattern+"$");
	
	
	if ((fieldName == "username") || (fieldName == "password") || (fieldName == "name") || (fieldName == "address") || (fieldName == "suburb") || (fieldName == "city") || (fieldName == "citymail") || (fieldName == "email") || (fieldName == "phone") || (fieldName == "website") || (fieldName == "age"))
	{
		if(!thePattern.test(field_name.value)) {
			field_msg.style.display = "block";
			field_msg.style.color = "#d9534f";
			field_msg.innerHTML = "<span class='glyphicon glyphicon-remove' style='color:#d9534f;'></span> Error "+ field_name.value + "<br />" + title_msg; 
			field_name.style.borderColor = "#d9534f";
			return false;
		} else {
			field_msg.style.display = "block";
			field_msg.style.color = "#5cb85c";
			field_msg.innerHTML = "<span class='glyphicon glyphicon-ok' style='color:#5cb85c;'></span> Correct "+ field_name.value;
			field_name.style.borderColor = "#5cb85c";
			return true;
		}
	} else if (fieldName == "colorpicker")
	{
		if (fieldValue == "#000000"){
			field_msg.style.display = "block";
			field_msg.style.color = "#5cb85c";
			field_msg.innerHTML = "<span class='glyphicon glyphicon-ok' style='color:#5cb85c;'></span> Correct ";
			field_name.style.borderColor = "#5cb85c";
		}else {
			field_msg.style.display = "block";
			field_msg.style.color = "#d9534f";
			field_msg.innerHTML = "<span class='glyphicon glyphicon-remove' style='color:#d9534f;'></span> Error ";
			field_name.style.borderColor = "#d9534f";
		}
		
	}else if (fieldName == "country")
	{
		field_msg.style.display = "block";
		field_msg.style.color = "#5cb85c";
		field_msg.innerHTML = "<span class='glyphicon glyphicon-ok'></span> "+ fieldValue;
		field_name.style.borderColor = "#5cb85c";
		document.getElementById ("state").options.length = 0;
		switch (fieldValue)
		{
			case "Australia":
				document.getElementById("state").disabled=false;
				document.getElementById ("state").options[0]=new Option("-- Select State --","empty");
				document.getElementById ("state").options[1]=new Option("ACT","ACT");
				document.getElementById ("state").options[2]=new Option("NSW","NSW");
				document.getElementById ("state").options[3]=new Option("NT","NT");
				document.getElementById ("state").options[4]=new Option("QLD","QLD");
				document.getElementById ("state").options[5]=new Option("SA","SA");
				document.getElementById ("state").options[6]=new Option("TAS","TAS");
				document.getElementById ("state").options[7]=new Option("VIC","VIC");
				document.getElementById ("state").options[8]=new Option("WA","WA");
				break;
			case "New Zealand":
				document.getElementById("state").disabled=false;
				document.getElementById ("state").options[0]=new Option("-- Select Province --","empty");
				document.getElementById ("state").options[1]=new Option("Auckland","Auckland");
				document.getElementById ("state").options[2]=new Option("Gisborne","Gisborne");
				document.getElementById ("state").options[3]=new Option("Wellington","Wellington");
				document.getElementById ("state").options[4]=new Option("Nelson","Nelson");
				break;
			case "empty":
				document.getElementById("state").disabled=true;
				document.getElementById("postcode").disabled=true;
				break;
		}
	} else if (fieldName == "state") 
	{
		var postcodeRegEx = "";
		document.getElementById("postcode").disabled=false;
		switch (fieldValue)
		{
			case "empty":
			document.getElementById("postcode").disabled=true;
			document.getElementById("postcode").value="";

			break;
			case "ACT":
			var postcodeRegEx="2[0-9]{3}";

			break;
			case "NSW":
			var postcodeRegEx="2[0-9]{3}";

			break;	
			case "NT":
			var postcodeRegEx="08[0-9]{2}";

			break;
			case "QLD":
			var postcodeRegEx="4[0-9]{3}";

			break;	
			case "SA":
			var postcodeRegEx="5[0-9]{3}";

			break;
			case "TAS":
			var postcodeRegEx="7[0-9]{3}";

			break;	
			case "VIC":
			var postcodeRegEx="3[0-9]{3}";

			break;		
			case "WA":
			var postcodeRegEx="6[0-9]{3}";

			break;	

			case "Auckland":
			var postcodeRegEx="10[0-9]{2}";

			break;
			case "Gisborne":
			var postcodeRegEx="40[0-9]{2}";

			break;
			case "Wellington":
			var postcodeRegEx="60[0-9]{2}";

			break;
			case "Nelson":
			var postcodeRegEx="70[0-9]{2}";

			break;
		}
		postcode.pattern=postcodeRegEx;
		field_msg.style.display = "block";
		field_msg.style.color = "#5cb85c";
		field_msg.innerHTML = "<span class='glyphicon glyphicon-ok'></span> "+ fieldValue + " " + postcode.pattern;
		field_name.style.borderColor = "#5cb85c";
	} else if (fieldName == "postcode")
	{
		var thePattern= new RegExp("^"+postcode.pattern+"$");
		if(!thePattern.test(field_name.value)) {
			field_msg.style.display = "block";
			field_msg.style.color = "#d9534f";
			field_msg.innerHTML = "<span class='glyphicon glyphicon-remove'></span> Error "+ field_name.value + "-" + thePattern; 
			field_name.style.borderColor = "#d9534f";

			return false;
		} else {
			field_msg.style.display = "block";
			field_msg.style.color = "#5cb85c";
			field_msg.innerHTML = "<span class='glyphicon glyphicon-ok'></span> Correct "+ field_name.value+ "-" + thePattern;
			field_name.style.borderColor = "#5cb85c";

			return true;
		}
	}
};

function continueForm(){
	
	var field = ["username","password","name","address","suburb","city","country","state","postcode","citymail","email","phone","website","age","colorpicker"];
	validator_Msg = document.getElementById ("validatorMsg");
	validator_Msg.innerHTML = "";
	for (i = 0; i < field.length; i++) {	
		field_name = document.getElementById(field[i]);
		if (field_name.style.borderColor == "rgb(92, 184, 92)"){
			validator_Msg.innerHTML == ""
		} else {
			validator_Msg.style.color = "#d9534f";
			validator_Msg.innerHTML +="<span class='glyphicon glyphicon-remove'></span> Error "  + " " + "Please check: " + field[i] + "<br/>";
		}
	};
	if (validator_Msg.innerHTML == "") {
		location.href = "form02.html";
	}
};



