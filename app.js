require('dotenv').config();

var mongoose = require("mongoose");

mongoose.connect('mongodb+srv://mihamoskalchuk:1234@cluster0.xo05byq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');

const app = require('express');

const http = require('http').Server(app);

http.listen(3000,function(){
 console.log('server is runnig');
});