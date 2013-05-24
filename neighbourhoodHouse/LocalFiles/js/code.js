var expand = 0;
function expandMin()
{
	if (expand == 0)
	{
		document.getElementById("side-max").style.width = "15em";
		document.getElementById("filterTable").style.visibility = "visible";
		document.getElementById("timeTable").style.visibility = "visible";
		document.getElementById("dateTable").style.visibility = "visible";
		expand = 1;
	}
	else 
	{
		document.getElementById("side-max").style.width = "0em";
		document.getElementById("filterTable").style.visibility = "hidden";
		document.getElementById("timeTable").style.visibility = "hidden";
		document.getElementById("dateTable").style.visibility = "hidden";
		expand = 0;
	}
}

var expandR = 0;
function expandMinR()
{
	if (expandR == 0)
	{
		document.getElementById("side-max-R").style.width = "5em";
		expandR = 1;
	}
	else 
	{
		document.getElementById("side-max-R").style.width = "0em";
		expandR = 0;
	}
}

//Popup window code
function newPopup(url) {
	popupWindow = window.open(
			url,'popUpWindow','height=700,width=800,left=10,top=10,resizable=yes,scrollbars=yes,toolbar=yes,menubar=no,location=no,directories=no,status=yes')
}


function loginpopup(){
	var uri = "popUp.html";
    window.location.href = uri;
}