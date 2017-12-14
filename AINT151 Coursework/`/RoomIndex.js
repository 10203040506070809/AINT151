var roomArray = [
	{

		//index 0
		title:"Cryogenics Room",
		text:"You are in a large, rectangular, harshly lit room. \
		The eastern and western walls are embedded with bulbous green pods. \
		There's a strange liquid pooling on the floor, which seems to be emanating from the pods on the opposite wall.\
		 There are two sleek grey doors on the southern and northern walls.\
		  A pungent smell wafts from behind you from where you removed the cable. ",
    images: "img/placeholder.jpg",
		choices:[
			{
				text:"Try the northern door.",
				index:1
			},
			{
				text:"Try the southern door.",
				index:2
			}
		]
	},
	{
		//index 1
		title:'Corridor 1',
		text:"There's a long grey corridor ahead of you, with two doors on the western side and a door on the northern side. \
		 The first door has a plaque that says, 'Batch 3-47B'. \
		The second appears to have been torn apart.\
		   A thin window traverses the length of the eastern wall, outside of which you can see the expanses of space. A lone blue planet is visible in the distance.  ",
		images: "img/earth2.jpg",
		choices:[
			{
				text:"Go back to the Cryogenics Room",
				index:0
			},
			{
				text:"Enter the door labelled, 'Batch 3-47B'.",
				index:3
			},
			{
				text:"Crawl through the torn apart door.",
				index:4
			},
			{
				text:"Enter the northern door.",
				index:9
			}
		]
	},
	{
		//index 2
		title:"Overseers Office",
		text:"You are in a small room with a terminal in the center, facing away from you.\
		 The room is thick with dust. You can hear rustling coming from a nearby cabinet.   ",
    images: "img/placeholder.jpg",
		choices:[
			{
				text:"Go back to the Cryogenics room.",
				index:0
			},
			{
				text:"Inspect the terminal",
				index:8
			}
		]
	},
		{
			//index 3
			title:"Batch 3-47B Room",
			text:"Upon entry a bright white light splutters at you, blinding you temporarily before turning off. \
			As your eyes once again attune to the brightness, you can make out large cylinders flowing with some glowing cyan substance.  ",
		images: "img/placeholder.jpg",
			choices:[
				{
					text:"Go back to the hallway",
					index:1
				},
				{
					text:"Inspect the cylinders",
					index:7
				}
			]
	},

	{
		//index 4
		title:"Experimentation Room",
		text:"Upon entry you notice several large tables with various mythical creatures strapped to them.\
		 There are tubes attached to all of them, swirling with thick, viscous liquids.\
		  A hum can be heard emanating from an unknown position. \
			One of the tables seems recently vacated and nearby a small desk with a terminal on it is visible.\
			 Slumped against a chair is a plant-like biped. Their body appears to have been ripped apart.\
			  Next to them, a terminal is visible. On the screen is a single sentence, 'Release? Y/N'",
		images: "img/placeholder.jpg",
		choices:[
			{
				text:"Crawl back through the door.",
				index:1
			},
			{
				text:"Press Y on the attached keyboard.",
				index:5
			}
		]
},
{
	//index 5
	title:"Experimentation Room - Terminal",
	text:"Upon turning the terminal off, the hum ceases.The tubes immediately empty. \
	The creatures on the table start to jerk and wriggle. \
	Smoke bellows from a nearby vent and a klaxon alarm sounds. \
	You can hear angry chattering over the small radio on the desk.\
	 One of the creatures sits up and smells the blood on you. Before you can move, he is upon you.\
		In a flash of jumbled body parts, you are no more.",
				images: "img/terminalyn.jpg",
	choices:[
		{
			index:16
		},
	]
},
{
	//index 6
title:"Cryogenics Room",
text:"Opening your eyes, you can see a thick blue liquid enveloping you. \
As panic starts to set in,  your pod starts to slowly drain and eventually opens up.\
 You are however, stuck to the pod via a thick pulsating cable protruding from your neck. ",
images: "img/placeholder.jpg",
choices:[
	{
		text:"Remove the cable from your neck.",
		index:0
	},
]
},
{
	//index 7
title:"Batch 3-47B Room",
text:"Upon further inspection, the cylinders appear to contain the same liquid that you had previously encountered. \
There also appears to be a small creature of differing appearance in each of the containers.",
		images: "img/placeholder.jpg",
choices:[
	{
		text:"Go back to the hallway.",
		index:1
	},
]
},
{
	//index 8
title:"Overseers Office",
		images: "img/terminalorig.jpg",
text:"Upon closer inspection, the terminal appears to be turned off. \
However, next to it is a small letter that appears to have been hastily written.\
 As you read it, a small keycard falls out of it. You pocket it for later. ",

choices:[
	{
		text:"Go back to the Cryogenics Room.",
		index:0
	},
]
},
{
	//index 9
title:"Barracks",
		images: "img/placeholder.jpg",
text:"Upon entry, the door behind you closes and appears to short out. Surrounding you appears to be a multitude of empty camp beds evenly spaced throughout the room. \
On one of the closer beds, a freshly pressed uniform lays. \
On the eastern wall two guards lay dozing in their respective beds. Between them an archway into another hallway is visible. ",
choices:[
	{
		text:"Take the uniform",
		index:10
	},
	{
		text:"Try to sneak past the guards.",
		index:11
	}
]
},
{
	//index 10
title:"Barracks",
		images: "img/placeholder.jpg",
text:"You put the uniform on and feel as though guards will be more likely to ignore you. ",
choices:[
	{
		text:"Try to sneak past the guards.",
		index:11
	},
]
},
{
	//index 11
title:"Corridor 2",
		images: "img/placeholder.jpg",
text:"You arrive in a long grey corridor, with an expansive window on the northern side.\
 On the western side, a clean silver door is open and through it you can see a desk and an important looking man. \
Assumedly, this is the Captain’s quarters. On the eastern side, a worn double door is visible.",
choices:[
	{
		text:"Return to the barracks",
		index:10
	},
	{
		text:"Enter the Captains' quarters.",
		index:12
	},
	{
		text:"Enter the personal hangar",
		index:13
	},
]
},
{
	//index 12
title:"Captains Quarters",
		images: "img/placeholder.jpg",
text:"Upon entry into this lavish room you notice the Captain sat at his desk writing nonchalantly upon data pads. \
He appears not to have noticed your arrival.  Surrounding him are trophies, treasures and artifacts galore from civilisations you don’t recognise. \
Behind him on the far wall, a more chilling sight is present. \
Several different species’ heads appear to be mounted in differing faces of terror for all to see. Among them, you spot a human head.",
choices:[
	{
		text:"Return to the corridor",
		index:11
	},
	{
		text:"Steal the keycard from the captain",
		index:16
	},
	{
		text:"Create a distraction",
		index:14
	},
]
},
{
	//index 13
title:"Hangar",
		images: "img/placeholder.jpg",
text:"You arrive on the balcony of a huge room with a set of stairs leading down to the main hangar bay.\
 The room is filled with a huge amount of spacecraft - some derelict and others seeming to be in relatively decent shape, ranging from small scout ships to heavy transport vessels. \
Among these crafts however a ship is separated from the others. It appears to be a meticulously clean, heavily modified assault orientated ship. ",
choices:[
	{
		text:"Return to the corridor",
		index:11
	},
	{
		text:"Steal the Captain's personal cruiser",
		index:15

	},
]
},
{
	//index 14
title:"Captains Quarters",
		images: "img/placeholder.jpg",
text:"You alert the Captain that there is an escaped prisoner aboard the ship and he rushes past you. While he’s distracted, you pocket the keycard for later.",
choices:[
	{
		text:"Return to the corridor",
		index:11
	},
]
},
//index 15
{
title:"Inside the Captain's personal cruiser",
		images: "img/placeholder.jpg",
text:"You’ve escaped the clutches of your captors and have secured your own freedom. ",
choices:[
	{
		text:"Restart the game",
		index:0
	},
]
},
//index 16
{
title:"Death",
		images: "img/placeholder.jpg",
text:"Oh dear, you have died. \
<br/> Restart? ",
choices:[
	{
		text:"Restart the game",
		index:0
	},
]
},
]
