// Require Modules
// Invokes express 
const express = require('express');

const indexRouter = require('./routes/index');
const todosRouter = require("./routes/todos");



// Create the Express App
// Sets App variable to express software
const app = express();


// Configure the App (app.set)

// We'll use the ejs view engine
// Makes the view engine look through ejs files
app.set('view engine', 'ejs'); 

// Mount Middleware (app.use)

app.use('/', indexRouter);
app.use("/todos", todosRouter);


// Mount Routes

// Tell the App to Listen on Port 3000
// 
app.listen(3000, function() {
    console.log('Express is listening on port 3000');
});

