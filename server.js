var _ = require('lodash');
var express = require('express');
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var tincan = require('tincanjs');
var moment = require('moment');

var statementSkeleton = {
    "id": "<uuid>",
    "actor": {
        "name": "<displayname>",
        "account": {
            "homePage": "<url>",
            "name": "<displayname>"
        }
    },
    "verb": {
        "id": "http://adlnet.gov/expapi/verbs/<verb>",
        "display": {
            "en-US": "<verb>"
        }
    },
    "object": {},
    "context": {}
};

function generateUUID() {
    var d = new Date().getTime();
    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = (d + Math.random()*16)%16 | 0;
        d = Math.floor(d/16);
        return (c=='x' ? r : (r&0x3|0x8)).toString(16);
    });
    return uuid;
}

function generateStatement(actor,verb,object,timestamp,context){
    var bones = _.deepClone(statementSkeleton);
    // do things here
    return bones;
}

app.use('/node_modules', express.static(__dirname + '/node_modules'));
app.get('/',function(req,res){
    res.sendfile('public/index.html');
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
