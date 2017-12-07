var roomArray = [
	{

		//index 0
		title:"Cryogenics Room",
		text:"You are in a large, rectangular, harshly lit room. The eastern and western walls are embedded with bulbous green pods.There's a strange liquid pooling on the floor, which seems to be emanating from the pods on the opposite wall. There are two sleek grey doors on the southern and northern walls. A pungent smell wafts from behind you from where you removed the cable. ",
		choices:[
			{
				text:"Try the southern door.",
				index:1
			},
			{
				text:"Try the northern door.",
				index:2
			}
		]
	},
	{
		//index 1
		title:'Corridor 1',
		text:"There's a long grey corridor ahead of you, with two doors on the western side and a door on the northern side. The first door has a plaque that says, 'Batch 3-47B'. The second appears to have been torn apart.   A thin window traverses the length of the eastern wall, outside of which you can see the expanses of space. A lone blue planet is visible in the distance.  ",
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
		text:"You are in a small room with a terminal in the center, facing away from you. The room is thick with dust. You can hear rustling coming from a nearby cabinet.   ",
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
			text:"Upon entry a bright white light splutters at you, blinding you temporarily before turning off. As your eyes once again attune to the brightness, you can make out large cylinders flowing with some glowing cyan substance.  ",
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
		text:"Upon entry you notice several large tables with various mythical creatures strapped to them. There are tubes attached to all of them, swirling with thick, viscous liquids. A hum can be heard emanating from an unknown position. One of the tables seems recently vacated and nearby a small desk with a terminal on it is visible. Slumped against a chair is a plant-like biped. Their body appears to have been ripped apart. Next to them, a terminal is visible. On the screen is a single sentence, 'Release? Y/N'",
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
	text:"Upon turning the terminal off, the hum ceases.The tubes immediately empty. The creatures on the table start to jerk and wriggle. Smoke bellows from a nearby vent and a klaxon alarm sounds. You can hear angry chattering over the small radio on the desk. ",
	choices:[
		{
			text:"Crawl back through the door",
			index:1
		},
	]
},
{
	//index 6
title:"Cryogenics Room",
text:"Opening your eyes, you can see a thick blue liquid enveloping you. As panic starts to set in,  your pod starts to slowly drain and eventually opens up. You are however, stuck to the pod via a thick pulsating cable protruding from your neck. ",
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
text:"Upon further inspection, the cylinders appear to contain the same liquid that you had previously encountered. There also appears to be a small creature of differing appearance in each of the containers.",
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
text:"Upon closer inspection, the terminal appears to be turned off. However, next to it is a small letter that appears to have been hastily written. As you read it, a small keycard falls out of it. You pocket it for later. ",
keyCard:true,
choices:[
	{
		text:"Go back to the Cryogenics Room.",
		index:0
	},
]
},
{
	//index 9
title:"Deployment Room",
text:"Upon entry, the door behind you closes and appears to short out.",
choices:[
	{
		text:"Move forward",
		index:10
	},
]
},

]
