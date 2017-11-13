var isLightOn = true;
function ToggleLight()
{
	if (isLightOn == true){
		document.getElementById("lightBulb") .src = "img/bulb-on.png";
		isLightOn = false;
	}
	else {
		document.getElementById("lightBulb") .src = "img/bulb-off.png";
		isLightOn = true;
	}
}

function AddNumbers(numA, numB){
	var sum = numA + numB;
document.getElementById("numbers") .innerHTML = sum;
}
