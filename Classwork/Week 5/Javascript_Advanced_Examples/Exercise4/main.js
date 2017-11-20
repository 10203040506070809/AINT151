

function OnLoad()
{
	SelectRoom(0);


	roomTitle.innerHTML = roomArray[0].title;
	roomText.innerHTML = roomArray[0].text;

for (var i = 0; i < roomArray[0].choices.length; i++){

	document.getElementById('roomChoices').innerHTML = "<button onClick = SelectRoom()>"  + roomArray[0].choices[0].text + "</button>";
}

}

function SelectRoom(roomIndex)
{
}
