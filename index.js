var express = require('express');
var port = 3000;
var app = express();

app.set('json spaces', 2);

app.get('/cobra', function(req, res) {
	cobra_info = {
		'name': 'Turtle',
		'sciName': 'Equus ferus caballus',
		'origin': 'The horse has evolved over the past 45 to 55 million years from a small multi-toed creature, Hyracotherium, into the large, single-toed animal of today.',
		'description': 'The horse (Equus ferus caballus) is one of two extant subspecies of Equus ferus. It is an odd-toed ungulate mammal belonging to the taxonomic family Equidae. Worldwide, horses play a role within human cultures and have done so for millennia. Horses are used for leisure activities, sports, and working purposes.',
		'imageUrl': 'http://www.hdwallpaperscool.com/wp-content/uploads/2013/12/snake-hd-wallpapers-beautiful-desktop-background-photographs-widescreen.jpg'
	};
	res.json(cobra_info);
});

app.get('/turtle', function(req, res) {
	turtle_info = {
		'name': 'Turtle',
		'sciName': 'Equus ferus caballus',
		'origin': 'The horse has evolved over the past 45 to 55 million years from a small multi-toed creature, Hyracotherium, into the large, single-toed animal of today.',
		'description': 'The horse (Equus ferus caballus) is one of two extant subspecies of Equus ferus. It is an odd-toed ungulate mammal belonging to the taxonomic family Equidae. Worldwide, horses play a role within human cultures and have done so for millennia. Horses are used for leisure activities, sports, and working purposes.',
		'imageUrl': 'http://vignette4.wikia.nocookie.net/animaljam/images/3/33/Green_Sea_Turtle.jpg/revision/latest?cb=20140704134453'
	};
	res.json(turtle_info);
});

app.get('/cattle', function(req, res) {
	cattle_info = {
		'name': 'Cow',
		'sciName': 'Equus ferus caballus',
		'origin': 'The horse has evolved over the past 45 to 55 million years from a small multi-toed creature, Hyracotherium, into the large, single-toed animal of today.',
		'description': 'The horse (Equus ferus caballus) is one of two extant subspecies of Equus ferus. It is an odd-toed ungulate mammal belonging to the taxonomic family Equidae. Worldwide, horses play a role within human cultures and have done so for millennia. Horses are used for leisure activities, sports, and working purposes.',
		'imageUrl': 'https://richarddaybell.files.wordpress.com/2012/11/cow1.jpg'
	};
	res.json(cattle_info);
});



app.listen(port, function(){
	console.log('Listening on ' + port);
});
