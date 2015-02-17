var _ = require('lodash');
var express = require('express');
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var moment = require('moment');
var TinCan = require('tincanjs');

var tincan = new TinCan ({recordStores:[{
     endpoint: "http://46.149.27.91:8080/larissa/xAPI",
     username: "larissa",
     password: "lrstester",
     allowFail: false
}]});

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

function generateStatement(actor,verb,object,context){
    var bones = _.deepClone(statementSkeleton);
    // do things here
    return bones;
}

app.use('/node_modules', express.static(__dirname + '/node_modules'));
app.use('/bower_components', express.static(__dirname + '/bower_components'));
app.use('/', express.static(__dirname + '/public'));

var users = {};
var course = {};
var shop = {};


var data = {
    users: {
    },
    course: {
    },
    shop: {
    }
};

var splat = generateUUID();
var blork = generateUUID();
data.users[splat] = {account: {name:"bleedledeedledee", homePage:"shoobydoobydoo"}};
data.users[blork] = {account: {name:"blittablattablunt", homePage:"shiggidybloo"}};
data.course.name = "Ayy Lmao"
data.course.feed = {};
var giggidy = generateUUID();
data.course.feed[giggidy] = {message:"Splagtastic ayyy lmao",name:data.users[splat].account.name,timestamp:new Date().toISOString()};
var shaggy = generateUUID();
data.shop[shaggy] = {item:"this is an item"};

io.on('connection', function(socket){
    console.log("SMOKE CRACK AND HAIL XENU");
    
    socket.on('mockDataRequest', function(){
        socket.emit("mockData",data);
    });

    socket.on('userReg',function(data){
       var newUUID = generateUUID(); 
       users[newUUID] = data.user;
       users[newUUID].courses.push(data.course);
       tincan.sendStatement(generateStatement(data.user,"registered",data.course));
    });
    socket.on('userLogin',function(data){
        
    });
    socket.on('userPost',function(data){
    });
    socket.on('userComment',function(data){
    });
    socket.on('userPoints',function(data){
    });
    socket.on('userBuy',function(data){
    });
});

http.listen(8080,function(){
    console.log("listening on :8080");
});
