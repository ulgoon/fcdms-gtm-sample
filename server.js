var express = require('express');
var app = express();


app.set('port', process.env.PORT||3030);

app.get('/', function(req, res){
    res.send("hello express");
    res.end();
});

app.listen(app.get('port'), function(){
    console.log("express server is listening at localhost:" + app.get('port'));
});
