"use strict";
let express = require('express');
    //bodyParser = require('body-parser');

// E X P R E S S
let app = new express();

app.use(express.static(__dirname));


app.get('/api/user', (req, res)=>{
	res.json({
		name: 'stas',
		contact: '8 950 031 82 28'
	});
});

app.get('*', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.listen(3000);
