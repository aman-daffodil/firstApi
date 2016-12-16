var userModel = require('../models/user');

var deleteUser = function(req,res){

	userModel.findOne({ userName: req.body.userName }, function (err, user) {
		if (err) {
			res.send(err);
		} else if (!user) {
			res.send('comment not found');
		} else {
			user.remove({ userName: req.body.userName }, function (err,user) {
				if (err) {
					res.send(err)
				}else if(!user){
					res.send({ message: 'User Not Found'});
				} else {
					// send success message
					res.send({ message: 'Deleted successfully' });
				}
			});
		}
	});
};

module.exports = deleteUser;