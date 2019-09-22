// my script
function calculateTip(){
	// store the data of input
	var billamount		=document.getElementById("billamount").value
	var serviceQuality  =document.getElementById("serviceQuality").value
	var totalpeople      =document.getElementById("totalpeople").value

	// quick validation
	if (billamount===""||serviceQuality==0) {
		window.alert("Please select the amount");
		return;
	}
	// check the people empty or fill
	if (totalpeople==""||totalpeople>=1) {
		totalpeople =1;

		document.getElementById("each").style.display="none";
	}else{

		document.getElementById("each").style.display="block";

	}
	// calculation
	var total=(billamount*serviceQuality)/totalpeople;
	total=Math.round(total*100)/100;
	total=total.toFixed(2);
	// display tip
	document.getElementById("totaltip").style.display="block";
	document.getElementById("totaltip").innerHTML=total;


}


// hide the element on load
document.getElementById("totaltip").style.display="none";
document.getElementById("each").style.display="none";

// clicking the call our custom function
document.getElementById("calculate").onclick=function(){calculateTip();};