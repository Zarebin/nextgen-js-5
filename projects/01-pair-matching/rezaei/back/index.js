'use strict'

const express = require('express');

const app = express();

app.get('/api', (request, response)=>{
    response.json({"dimention" : 4});
})

app.listen(3000, '0.0.0.0', () => {
    console.log("Listening On Port 3000")
})
