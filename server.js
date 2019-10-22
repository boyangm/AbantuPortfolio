require("dotenv").config();
const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(express.json());

//Connect to the Mongo DB
mongoose.connect("mongodb://localhost:27017/portfolioProject", { useNewUrlParser: true })
.then(()=> console.log('Mongo Db connected'))
.catch(err => console.log(err));
// If deployed, use the deployed database. Otherwise use the local mongoHeadlines database
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost:27017/portfolioProject";
mongoose.connect(MONGODB_URI)
.then(()=> console.log('Mongo Db connected'))
.catch(err => console.log(err));

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('abantudev/build'))
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'abantudev', 'build', 'index.html'))
    })
}


var PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`server connected to port ${PORT}`);
})