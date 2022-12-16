const express = require('express');
const bodyParser = require('body-parser');
const env = require('dotenv');
const path = require('path');
const cons = require('consolidate');

//environment configuration
env.config();

//creating app variable from express
const app = express();

//setting view engine
app.set('views',path.join(__dirname,'views'));
app.engine('html',cons.swig);
app.set('view engine','html');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

//connection to database
//creating a database connection
// const db = mysql.createConnection({
//     host:"database-1.ceedmie6y0m6.us-east-1.rds.amazonaws.com",
//     port:"3306",
//     user:"admin",
//     password:"aditya2110",
//     database:"covidbase"
// });

// db.connect(function(error){
//     if(!!error) console.log(error);
//     else console.log('Database Connected');
// });

app.get('/',(req,res)=>{
    res.render('index');
})

app.get('/about',(req,res)=>{
    res.render('about');
});

app.get('/memories',(req,res)=>{
    res.render('memories');
})


app.listen(process.env.PORT,()=>{
    console.log(`Server started on port ${process.env.PORT}`);
});