var userModel = require('../models/user');
var crypt = require('bcryptjs');

var getUser = function(req,res){
	// var comment = new commentModel();
	
	// var hashValue = crypt.hashSync("aman.gupta@daffodilsw.com",1);
	// var salt = crypt.getSalt(hashValue);
	// res.json({"hash":hashValue,"salt":salt,"comparision":crypt.compareSync("aman.gupta@daffodilsw.com","$2a$04$c.lbKY3WToW.ZkHmEje/TOFYtUyGXVpqu9vYuZVFmFNZlfscHlsqi")});
  
	
	userModel.find({}, function (err, users) {
		res.json(users);
	});
}

module.exports = getUser;