var express=require('express');
var bodyparser=require('body-parser');

var app=express();
var items=require('./routes/api/items');
app.use(bodyparser.json());
app.use('/api/items',items);


app.listen(5000);