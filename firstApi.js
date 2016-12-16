var express = require('express')
var mongoose = require('mongoose')
var bodyParser = require('body-parser')

var app = express()

mongoose.connect('mongodb://localhost:27017/mydb');

var Schema = mongoose.Schema;

app.use(bodyParser.urlencoded({ extended: true }));//use body parser so we can get info from POST and/or URL params
app.use(bodyParser.json());

var addUser = require('./middlewares/addUser');
var updateUser = require('./middlewares/updateUser');
var deleteUser = require('./middlewares/deleteUser');
var getUser = require('./middlewares/getUser');

var login = require('./middlewares/login');


app.get('/user',getUser);
app.post('/user',addUser);
app.put('/user',updateUser);
app.delete('/user', deleteUser);

app.post('/login',login);

app.listen(8080, function(){
	console.log('server started on port 8080');
})