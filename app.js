// app.js
const express = require('express');
const bodyParser = require('body-parser');

const todoroutes = require('./routes/todo.routes');
// initialize our express app
const app = express();

// Set up mongoose connection
const mongoose = require('mongoose');
let dev_db_url = 'mongodb://todoApp:farrukh12@ds143211.mlab.com:43211/todo';
const mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/todo', todoroutes);

let port = 3000;

app.listen(port, () => {
    console.log('Server is up and running on port number ' + port);
});