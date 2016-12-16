var userModel = require('../models/user');
var util = require('util');
var crypt = require('bcryptjs');

var login = function(req,res,next){
    
    if(util.isNullOrUndefined(req.body.email)||util.isNullOrUndefined(req.body.password)){
        res.json({"error":"INVALID_INPUT: Some required parameter is missing."});
    }else{
        userModel.findOne({email:req.body.email},function(err,user){
            if (err){
                res.json(err);
            }else if(!user){
                res.send({"error":"No user for this email id found.Please signup!"});
            }else{
                if (crypt.compareSync(req.body.password,user.password)){
                    res.json({"message":"login Successful!"});
                }else{
                    res.json({"error":"Wrong credentials. Try again."});
                }
            }
        });
    }
}

module.exports = login;