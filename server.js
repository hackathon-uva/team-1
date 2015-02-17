#!/usr/bin/node 

var _ = require('lodash');
var app = require('express')();
var http = require('require').Server(app);
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
    bones.id = generateUUID();
    bones.actor.name = actor.displayName;
    bones.actor.account.homePage = obtainRestEndpoint("persons");
    bones.actor.account.name = actor.id;
    bones.verb.id = "http://adlnet.gov/expapi/verbs/" + verb;
    bones.verb.display["en-US"] = verb;
    bones.timestamp = timestamp; // always specify
    bones.object.objectType = (object.hasOwnProperty('affiliations')) ? "Agent"
        : (isUUID(object.id)) ? "StatementRef"
        : "Activity";
    if (bones.object.objectType == "Agent") {
        bones.object.name = object.displayName;
        bones.object.account = {
            homePage: obtainRestEndpoint("persons"),
            name: object.id
        };
    } else if (bones.object.objectType == "StatementRef") {
        bones.object.id = object.id;
    } else {
        bones.object.id = object.url;
    }
    if (typeof context !== 'undefined') {
        bones.context = context;
    }
    return bones;
}

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
