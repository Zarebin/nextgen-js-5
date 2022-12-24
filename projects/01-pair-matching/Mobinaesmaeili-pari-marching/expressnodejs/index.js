
const express = require('express');
const app = express();

app.get('/api', (req, res) => {
	const dimension = 
     {
       dimension:8,
       
     };

  res.json(dimension);
});

app.listen(9000, '0.0.0.0', () => {
	console.log('Listen on port 9000 ');
});
