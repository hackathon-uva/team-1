#!/usr/bin/node 

var app = require('express')();
var http = require('require').Server(app);
var io = require('socket.io')(http);

app.get('/',function(req,res){
    res.sendfile('public/index.html')
});

io.on('connection', function(socket){
    console.log("SMOKE CRACK AND HAIL XENU");
});

http.listen(8080,function(){
    console.log("listening on :8080");
});
