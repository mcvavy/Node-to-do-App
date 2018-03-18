const bodyParser = require('body-parser');

let urlEncodedParser = bodyParser.urlencoded({ extended: false });

let data = [
    { item: 'get milk' },
    { item: 'walk dog' },
    { item: 'kick some coding ass' }
];

module.exports = (app) => {

    app.get('/todo', (req, res) => {
        res.render('todo', { todos: data });
    });

    app.post('/todo', urlEncodedParser, (req, res) => {
        data.push(req.body);
        res.json(data);
    });

    app.delete('/todo', (req, res) => {

    });

};