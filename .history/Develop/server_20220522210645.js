
const express = require('express');

const app = express();


const notes = require('./');


app.listen(3001, () => {
  console.log(`API server now on port 3001!`);
});

app.get('/banaa', (req,res ) => {
 res.send('Hi')
} )