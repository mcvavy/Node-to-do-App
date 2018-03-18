const express = require('express');

const todoController = require('./controllers/todoController');

const app = express();

//set up template engine

app.set('view engine', 'ejs');

//static files
app.use(express.static('./public'));

//Fire controllers
todoController(app);

app.listen(3000);

console.log('Server is listening on port 3000');