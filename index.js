/* var express=require('express');
var app=express();
var bodyParser=require('body-parser');
var mongoose=require('mongoose');
global.config=require('./configurations/config')
var jwt=require('jsonwebtoken');
var User=require('./models/user');

var options={
    user:'myTester',
    pass:'xyz123'
};

//mongoose.connect("mongodb://localhost:27017/ecommercedb",options)

mongoose.connect("mongodb://localhost:27017",{ useNewUrlParser:true})

app.use(bodyParser.json());
//app.use(require('./controllers'));
app.use(require('./controllers/index'));

app.listen('/',function(req,res){
    res.send('hello world');
})
app.listen(5000,function(){
    console.log('App running at port 5000!!');
}) */


var express=require('express');
var app=express();
var bodyParser=require('body-parser');
var mongoose=require('mongoose');
global.config=require('./configurations/config')
var jwt=require('jsonwebtoken');
var User=require('./models/user');
var controller=require('./controllers/index');

var options={
    user:'myTester',
    pass:'xyz123'
};

mongoose.connect("mongodb://localhost:27017/ecommercedb",options)

//mongoose.connect("mongodb://localhost:27017",{ useNewUrlParser:true})

app.use(bodyParser.json());
//app.use(require('./controllers'));
app.use(controller);

app.get('/',function(req,res){
    res.send('hello world');
})
app.listen(5000,function(){
    console.log('App running at port 5000!!');
})