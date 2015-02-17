#!/usr/bin/node 

var app = require('express')();
var http = require('require').Server(app);
var io = require('socket.io')(http);
var tincan = require('tincanjs');

app.use('/node_modules', express.static(__dirname + '/node_modules'));
app.get('/',function(req,res){
    res.sendfile('public/index.html')
});

var users = {};
var course = {};
var shop = {};

io.on('connection', function(socket){
    console.log("SMOKE CRACK AND HAIL XENU");
    socket.on('userReg',function(data){
        
    });
    socket.on('userLogin',function(data){});
    socket.on('userPost',function(data){});
    socket.on('userComment',function(data){});
    socket.on('userPoints',function(data){});
    socket.on('userBuy',function(data){});
});

http.listen(8080,function(){
    console.log("listening on :8080");
});
