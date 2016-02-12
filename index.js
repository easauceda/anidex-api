var express = require('express');
var port = 3000;
var app = express();


app.get('/horse', function(req, res) {
	horse_info = {
		'name': 'Horse',
		'sciName': 'Equus ferus caballus',
		'origin': 'The horse has evolved over the past 45 to 55 million years from a small multi-toed creature, Hyracotherium, into the large, single-toed animal of today.',
		'description': 'The horse (Equus ferus caballus) is one of two extant subspecies of Equus ferus. It is an odd-toed ungulate mammal belonging to the taxonomic family Equidae. Worldwide, horses play a role within human cultures and have done so for millennia. Horses are used for leisure activities, sports, and working purposes.'
	};
	res.json(horse_info);
});

app.listen(port, function(){
	console.log('Listening on ' + port);
});
