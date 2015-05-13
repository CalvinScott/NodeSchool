var express = require('express');
var app = express();

app.put('/message/:id', function(req, res){
	var id = req.params.id; // Took the longest to get this line...thanks YouTube!
	var hash = require('crypto');
		.createHash('sha1');
		.update(new Date().toDateString() + id);
		.digest('hex');
	res.send(hash);
});

app.listen(process.argv[2]);
