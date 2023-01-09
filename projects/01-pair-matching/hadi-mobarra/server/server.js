const express = require('express');

const app = express();

app.get('/api', (req, res) => {
	res.json({dimension: 8});
	}
)

const port = 8086;

app.listen(port, () => {
	console.log(`I am listening on ${port}`)
});


