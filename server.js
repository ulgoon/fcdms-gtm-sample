var express = require('express');
var app = express();

var indexRouter = require('./routes/index')(app);
var aboutRouter = require('./routes/about')(app);
var shopRouter = require('./routes/shop')(app);

var pug = require('pug');
var path = require('path');

app.set('view engines', 'pug');
app.set('views', __dirname + '/views');

app.use('/public', express.static(path.join(__dirname + '/public')));

app.set('port', process.env.PORT||3030);


app.listen(app.get('port'), function(){
    console.log("express server is listening at localhost:" + app.get('port'));
});
