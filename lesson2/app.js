var express = require('express');

var app = express();
var utility = require('utility');

app.get('/', function(req,res){
  var q = req.query.q;

  var md5Value = utility.md5(q);

  res.send(md5Value);
});

app.listen('3000',function(req,res){
  console.log('app is running at port 3000');
});
