const bodyParser = require('body-parser');
const mongoose = require('mongoose');

//Connecting to the database

mongoose.connect('mongodb://wi13b051:greatss12@ds119059.mlab.com:19059/vavtodo');


//Create a schema - This is like a blueprint for the data
const todoSchema = new mongoose.Schema({
    item: String
});

const Todo = mongoose.model('Todo', todoSchema);

// const itemOne = Todo({item: 'Get flowers'}).save(function(err){
//     if(err) throw err;
//     console.log('item saved');
// });

const urlEncodedParser = bodyParser.urlencoded({ extended: false });

// let data = [
//     { item: 'get milk' },
//     { item: 'walk dog' },
//     { item: 'kick some coding ass' }
// ];

module.exports = (app) => {

    app.get('/todo', (req, res) => {
        //Get data from mongoDB and pass it to the view
        Todo.find({},function(err, data){
            if (err) throw err;

            res.render('todo', { todos: data });
        }); // Returns all items in the collections

    });

    app.post('/todo', urlEncodedParser, (req, res) => {

        //Get data from the view and add it to mongoDB
        const newTodo = Todo(req.body).save((err, data) => {
            if(err) throw err;

            res.json(data);
        });

rs
    });

    //x.item.replace(/ /g, '-') Replace empty space with with hyphen
    app.delete('/todo/:item', (req, res) => {
        //Delete the requested item from MongoDb

        Todo.find({item: req.params.item.replace(/\-/g, " ")}).remove((err, data) => {
            if(err) throw err;

            res.json(data);
        });

        // data = data.filter(x => x.item.replace(/ /g, '-') !== req.params.item);
        // res.json(data);
    });

};