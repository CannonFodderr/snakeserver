const express = require('express');
const port = process.env.PORT || 8080;
const {connect} = require('mongoose');
const bodyParser = require('body-parser');
const env = require('dotenv').config();
const app = express();
const db_url = process.env.DB_URL || "mongodb://localhost/snake";
const snakeRoutes = require('./routes/snakeRoutes');

app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));

connect(db_url).then(() => { console.log("Connected to DB")}).catch(err => console.log(err));

// SEED DATABASE
// require('./seedDB');


app.use((req, res, next) => {
    // let allowedOrigins = ['https://snakereactgame.herokuapp.com', 'http://localhost:3000'];
    // let origin = req.headers.origin;
    // if(allowedOrigins.indexOf(origin) > -1){
    //     res.setHeader('Access-Control-Allow-Origin', origin);
    // }
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

app.use(snakeRoutes);
app.listen(port, () => console.log(`Serving on port: ${port}`));