var express = require('express');
var port = 3000;
var app = express();
app.set('json spaces', 2);
app.get('/cobra', function(req, res) {
	cobra_info = {
		'name': 'Snake',
		'sciName': 'Serpentes',
		'origin': 'The origin of snakes remains an unresolved issue. Many scientists beleive that snakes descended from dinosaurs.',
		'description': 'A snake is an elongate reptile. Snakes are covered in scales. All snakes are carnivorous and can be distinguished from legless lizards by their lack of eyelids, limbs, external ears, and vestiges of forelimbs. The 2,700+ species of snakes spread across every continent except Antarctica ranging in size from the tiny, 10 cm long thread snake to pythons and anacondas at 9 m (30 ft) long. Paired organs (such as kidneys) appear one in front of the other instead of side by side. Many species of snake can be dangerous to humans if mistreated. While venomous snakes comprise a minority of the species, some possess potent venom capable of causing painful injury or death to humans. However, venom in snakes is primarily for killing and subduing prey rather than for self-defense.   Snakes may have evolved from a lizard which adapted to burrowing during the Cretaceous period (c 150 Ma), though some scientists have postulated an aquatic origin. The diversity of modern snakes appeared during the Paleocene period (c 66 to 56 Ma).',
		'imageUrl': 'http://www.hdwallpaperscool.com/wp-content/uploads/2013/12/snake-hd-wallpapers-beautiful-desktop-background-photographs-widescreen.jpg'
	};
	res.json(cobra_info);
});
app.get('/turtle', function(req, res) {
	turtle_info = {
		'name': 'Turtle',
		'sciName': 'Chelonia mydas',
		'origin': 'Turtles live in places with water.',
		'description': 'Turtles are reptiles of the order Testudines (or Chelonii) characterised by a special bony or cartilaginous shell developed from their ribs and acting as a shield. The order Testudines includes both extant (living) and extinct species. The earliest known members of this group date from 157 million years ago, making turtles one of the oldest reptile groups and a more ancient group than snakes or crocodilians. Of the 327 known species alive today, some are highly endangered. Turtles are ectotherms—their internal temperature varies according to the ambient environment, commonly called cold-blooded. However, because of their high metabolic rate, leatherback sea turtles have a body temperature that is noticeably higher than that of the surrounding water. Turtles are classified as amniotes, along with other reptiles, birds, and mammals. Like other amniotes, turtles breathe air and do not lay eggs underwater, although many species live in or around water.',
		'imageUrl': 'http://vignette4.wikia.nocookie.net/animaljam/images/3/33/Green_Sea_Turtle.jpg/revision/latest?cb=20140704134453'
	};
	res.json(turtle_info);
});
app.get('/cattle', function(req, res) {
	cattle_info = {
		'name': 'Cow',
		'sciName': 'Bos taurus',
		'origin': 'Like most domestic animals, Bos taurus (domestic cow) is currently found throughout much of the world. The wild ancestors of cows were native to northern Africa, Europe, and southern Asia.',
		'description': 'Domestic cows feed on grasses, stems, and other herbaceous plant material. An average cow can consume about 70kg of grass in an 8 hour day. Cows twist grasses around the tongue and cut them with their lower teeth. Domestic cows are ruminants. Ruminants have a special system of digestion which allows for the breakdown of the relatively indigestible plant material which they consume. Cows have a four chambered stomach including a rumen, reticulum, omasum, and abomasum. Grass passes through the rumen where it is mixed with specialized bacteria. From the rumen it moves to the reticulum, where it is broken down further. The partly digested food, known as cud, is regurgitated and chewed. It is then swallowed and moves into the omasum and abomasum, where digestive enzymes break it down further and nutrients are absorbed. The process of digestion takes 70-100 hours, one of the slowest passage rates of all animals. This method of digestion permits ruminants to obtain the most nutrients possible from these plant materials.',
		'imageUrl': 'https://richarddaybell.files.wordpress.com/2012/11/cow1.jpg'
	};
	res.json(cattle_info);
});
app.listen(port, function(){
	console.log('Listening on ' + port);
});
