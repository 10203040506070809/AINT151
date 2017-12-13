function OnLoad()
{
	SelectRoom(6);

}

function SelectRoom(roomIndex)
{
 var index = roomArray[roomIndex]
	roomTitle.innerHTML = roomArray[roomIndex].title;
	roomText.innerHTML = roomArray[roomIndex].text;

	document.getElementById('roomChoices').innerHTML = "";
	for (var i = 0; i < roomArray[roomIndex].choices.length; i++){
		document.getElementById('roomChoices').innerHTML += "<button onClick='SelectRoom("+roomArray[roomIndex].choices[i].index+")'>"  + roomArray[roomIndex].choices[i].text + "</button>";
		document.getElementById('image1').src = roomArray[roomIndex].images;
KeyCard();




}

function KeyCard(){

	if (roomIndex == 8){
			roomArray[1].choices[3].keyCard = true;
			item += "Key Card ";
			roomArray[1].choices[3].index = 9;
		}
		if (roomIndex == 9) {
			if (roomArray[1].choices[3].keyCard == false) {
							alert("You do not have the keycard.");
							SelectRoom(1);
			}
			}
		}
}
