// Load dependencies

const express = require('express');

// Creat the express App

const app = express();

// Configure Settings -app.set()

app.set('view engine', 'ejs');

// Mount middleware- app.use()

app.get('/', function(req, res) {
    res.render('home');
});

// mount routes

app.get('/', function(req, res) {
    res.render('home');
});

app.get('/about', function(req, res){
    res.render('about');
})
// tell the app to listen on a port

app.listen(3000, function() {
    console.log('Express is listening');
})