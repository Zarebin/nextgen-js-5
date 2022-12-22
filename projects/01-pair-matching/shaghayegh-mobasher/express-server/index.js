'use strict';

const express = require('express');

const app = express();

app.get('/api', (req, res) => {
	res.json({ "dimension": 4 });
});

app.listen(9000, '0.0.0.0', () => {
	console.log('Listening on port 9000 of "0.0.0.0"');
});
