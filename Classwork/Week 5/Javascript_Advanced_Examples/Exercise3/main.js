var roomObject = {
	title:'room name',
	text:'you are standing in a room, there is a picture on the wall and a table',
	choices:['examine picture','examine table']
}


function OnLoad()
{
	roomtitle.innerHTML = roomObject.title;
	roomtext.innerHTML = roomObject.text;

for (var i = 0; i < roomObject.choices.length; i++){
	document.getElementById('roomchoices').innerHTML += "<button>"  + roomObject.choices[i] + "</button>";
}


}
