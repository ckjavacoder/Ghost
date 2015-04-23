var Promise      = require('bluebird'),
    config       = require('../config'),
    canThis      = require('../permissions').canThis,
    errors       = require('../errors'),

iface = {
	list:function(req,res){
		res.writeHead(200,{"Content-Type":"text/json:charset=utf-8"});
		res.end("asf");	
	}
}

list=function(req,res){
		res.writeHead(200,{"Content-Type":"text/json:charset=utf-8"});
		res.end("asf1");	
	}