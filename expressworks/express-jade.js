var express = require('express');
var app = express();

app.set('views', process.argv[3]); // What exactly does this do? 'Views' request and command line function?

app.set('view engine', 'jade');

app.get('/', function(req, res){
	res.render('index', {date: new Date().toDateString()});
});

app.listen(process.argv[2]);
