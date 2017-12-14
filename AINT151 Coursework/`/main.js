//global variables

	var barrackskeycard = false;
 var captainsKeyCard = false;
var uniform = false;
//onload function
function OnLoad()
{

	SelectRoom(6);

}


//which index will be selected

function SelectRoom(roomIndex)
{
 var index = roomArray[roomIndex]
	roomTitle.innerHTML = roomArray[roomIndex].title;
	roomText.innerHTML = roomArray[roomIndex].text;

	document.getElementById('roomChoices').innerHTML = "";
	for (var i = 0; i < roomArray[roomIndex].choices.length; i++){
		document.getElementById('roomChoices').innerHTML += "<button onClick='SelectRoom("+roomArray[roomIndex].choices[i].index+")'>"  + roomArray[roomIndex].choices[i].text + "</button>";
		document.getElementById('image1').src = roomArray[roomIndex].images;

 if (roomIndex == 8 && barrackskeycard == true){
	 document.getElementById('roomText').innerHTML = "You've already taken the keycard from here.";

 }
 if (roomIndex == 10){
	 uniform = true;
 }
 if (roomIndex == 14 && uniform == false){
	 SelectRoom(16)
 document.getElementById('roomText').innerHTML = "The captain takes one look at your naked body and disregards everything you've said, slaying you at once."
}
KeyCard();
CaptKeyCard();
}


//barracks keycard

function KeyCard(){

	if (roomIndex == 8){
barrackskeycard = true;
		}
		if (roomIndex == 9) {
			if (barrackskeycard == false) {
							alert("You do not have the keycard.");
							SelectRoom(1);
			}
			}
		}

function CaptKeyCard(){

	if (roomIndex == 14){
captainsKeyCard = true;
}

		if (roomIndex == 15) {
			if (captainsKeyCard == false) {
							alert("You do not have the keycard.");
							SelectRoom(13);
			}
			}

}
}
