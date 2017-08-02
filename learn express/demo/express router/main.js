var express = require('express');
var app = new express();
var birds = require('./birds');

app.use('/birds',birds);

var server = app.listen(3000,function(){
    var host = server.address().address;
    var port = server.address().port;
    console.log('Example app listening at http://%s:%s', host, port);
});
//没有应用程序，不知道该写什么样的应用程序，没成功