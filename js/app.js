

function changeColorOnClick(idName) {
	console.log('enteringthedangerzone');
	var originalElementColor = document.getElementById('selectedColorName').style.backgroundColor;
	document.getElementById(idName).style.backgroundColor = originalElementColor;

}

function getBackgroundColor(idName) {
	var element = document.getElementById(idName);
	var style = window.getComputedStyle(element,null).getPropertyValue("background-color");
	console.log(style);
	document.getElementById("selectedColorName").style.backgroundColor = style;

}