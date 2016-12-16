var userModel = require('../models/user');
const util = require('util');
const validator = require('email-validator');
var crypt = require('bcryptjs');

var addUser = function(req,res) {
	var user = new userModel();
	if (util.isNullOrUndefined(req.body.userName) || util.isNullOrUndefined(req.body.email) || util.isNullOrUndefined(req.body.password)){
		res.json({"error":"INVALID_INPUT: Some required parameter is missing."});
	}
	else{
		if (validator.validate(req.body.email)){
			//AG:- to check for email repitition.
			userModel.findOne({ email: req.body.email },function (err,userExists){
				if (err){
					res.json(err);
				}else if (!userExists){					
					user.userId = req.body.userId;
					user.email = req.body.email;
					user.userName = req.body.userName;
					var hashedPassword = crypt.hashSync(req.body.password,10);
					user.password = hashedPassword;
					user.mobileNo = req.body.mobileNo;

					user.save(function (err,user) {
						if (err){
							res.send(err)
						}else if (!user){
							res.send({"error":"error in finding data"})
						}else{
							res.send({'message':'Details saved.'});
						}
					});
				}else{
					//AG:- duplicacy error.
					res.json({"error":"Email Alraedy exists."});
				}
			});
			
		}else{
			res.json({"error":"INVALID_INPUT: email not valid."});
		}
	}
};

module.exports = addUser;