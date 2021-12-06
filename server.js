// require dependencies
const express = require('express');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const itemsController = require('./controllers/items');


// initialize app
const app = express();

// configure settings
require('dotenv').config();

// connect to and configure mongoDB with mongoose

mongoose.connect(process.env.DATABASE_URL);

const db = mongoose.connection;

// set up mongodb event listeners
db.on('connected', () => console.log('Connected to MongoDB'));
db.on('error', (err) => console.log('MongoDB Error: ' + err.message));

// setting up view engine
// TODO: Setup JSX as view engine //
// npm i express-react-views react react-dom 

// mount middleware
app.use(express.urlencoded({ extended: false })); // creates req.body
app.use(express.static('public')); // sets up public folder for static files
app.use(methodOverride('_method')); // allows us to use PUT and DELETE routes

// mount routes
app.use('/', itemsController);

// tell the app to listen
const PORT = process.env.PORT || 3000;
// heroku or any cloud service will set this value for us

app.listen(PORT, () => {
    console.log(`Server is listening on ${PORT}`);
});

