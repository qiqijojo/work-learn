var express = require('express');
var app = new express();

//app.get('/app',function(req,res,next){
//    console.log('1111111111');
//    next();
//},function(req,res){
//    res.send('ok');
//
//    //res.status(404).send('Sorry, we cannot find that!');
//});


var cb0 = function (req, res, next) {
    console.log('CB0');
    next();
}

var cb1 = function (req, res, next) {
    console.log('CB1');
    next();
}

var cb2 = function (req, res) {
    res.send('Hello from C!');
}

app.get('/example/c', [cb0, cb1, cb2]);

var server = app.listen(3000,function(){
    var host = server.address().address;
    var port = server.address().port;
    console.log('Example app listening at http://%s:%s', host, port);
});
