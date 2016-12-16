var mongoose = require("mongoose");
// var crypt = require("bcryptjs");

// var hash = function(value) {
//     return bcryptjs.hashSync(value, 10);
// }

var user = new mongoose.Schema({
  
  userId: {type:Number,required:true,unique:true},
  userName: { type: String, required: true},
  email: { type : String, required:true},
  password: { type : String, required:true},
  mobileNo: { type:Number}
});

var userModel = mongoose.model('User',user);

module.exports = userModel;