var userModel = require('../models/user');
var tv4Validator = require('tv4');

var updateUser = function (req,res){
	userModel.findOne({ userId: req.body.userId },function (err,user){
		if (err){
			res.json(err);
		}else if (!user){
			res.json({"error":"user not found"});
		}else{
			user.userName = req.body.userName
			// user.email = req.body.email
			user.save(function (err,user){
				if (err){
		  			res.send(err)
		  		}else if (!user){
		  			res.send({"error":"error in finding user"})
		  		}else{
		  			res.send({'message':'user updated.'});
		  		}
			});
		}
	});
};

module.exports = updateUser;