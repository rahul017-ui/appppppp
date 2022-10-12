const express = require("express");
const app = express();
const bodyParser = require('body-parser')

// connect to db
const mongoose = require("mongoose");
var mongoDB='mongodb://127.0.0.1/db';
mongoose.connect(mongoDB);

mongoose.Promise=global.Promise;

var db =mongoose.connection;

db.on('connected',function(){ 
    console.log('Mongoose connection done');
});


db.on('error',function(err){
    console.log('Mongoose default connection error: ' +err);
});


// Import routes
const commonRoutes = require("./routes/commonroute");

// Middlewares
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
app.use(express.json());

// route Middlewares
app.use("/", commonRoutes);

app.listen(4000, () => console.log("server up and runing on port 4000!"));
