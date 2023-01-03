const express = require('express');

const app = express();

app.get('/api', (req, res) => {
	res.json({dimension: 4});
	}
)

const port = 8085;

app.listen(port, () => {
	console.log(`I am listening on ${port}`)
});


