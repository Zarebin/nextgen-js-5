const express = require('express');
const app = express(); //app = web application
app.get('/api', (req,res) => {
	res.send({ "dimension": 4 });
});

app.listen(7000, '0.0.0.0', () => {
	console.log('i am listening on port 7000');
});
