function CreatePlayer()
{
  //task 1
  var playerName = document.getElementById('playername').value;
  document.getElementById('name').innerHTML = playerName;
///task 2
  var playerColour = document.getElementById('playercolour').value;
  document.getElementById('colour').style.background = playerColour;
////task 3
  var playerHealth = document.getElementById('playerhealth').value;
  document.getElementById('health').innerHTML = playerHealth;


/////task 4
//  if (document.getElementById('playerweapon').value == 1){
//      document.getElementById('weapon').innerHTML = "Crossbow of much hurting";}


//  else if (document.getElementById('playerweapon').value == 2){
//        document.getElementById('weapon').innerHTML = "Broadsword of so slicing";
//  }
//  else {
//    document.getElementById('weapon').innerHTML = "Wand of amaze magics";
//  }
//}

//extra challenge
switch(playerweapon.value)
{
  case "1":
  document.getElementById('weapon').innerHTML = "Crossbow of much hurting";
break;

case "2":
document.getElementById('weapon').innerHTML = "Broadsword of so slicing";
break;

case "3":
document.getElementById('weapon').innerHTML = "Wand of amaze magics";
break;

}

}
