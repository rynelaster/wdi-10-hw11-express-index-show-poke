const express = require('express')

const app = express()

const pokemon = require('./models/pokemon.js')


// home route
app.get('/pokemon', (req, res)=>{
// displays pokemon array on homepage
	res.send(pokemon)
})




















app.listen(3000, () =>{
	console.log('listening on port 3000');
})


// Sample Code

// // server.js

// const express    = require('express'),
//     app        = express(),
//     Pokemon    = require('../models/pokemon.js');

// // INDEX
// app.get('/', (req, res) => {
// 	res.render('index.ejs', { data: Pokemon });
// });

// // SHOW
// app.get('/:id', (req, res) => {
//     res.render('show.ejs', { data: Pokemon[req.params.id] });
// });