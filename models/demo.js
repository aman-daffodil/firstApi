
var mongoose = require("mongoose");

var demo = new mongoose.Schema({
  
  id: {type:Number,required:true,unique:true},
  name: { type: String, required: true},
  main: {
        category:[{
            categoryName:{type:String},
            subCategory:[{
                subCategoryName:{type:String},
                items:[{
                    itemId:{type:Number,required:true},
                    name:{type:String,required:true},
                    price:{type:Number,required:true},
                    spiceIndex:{type:Number},	
                    cuisineType:{type:Number,reuqierd:true},
                    cuisineCategory:[{type:String}],
                    imageUrl:{type:String},
                    preprationTime:{type:Number},
                    availability:{type:Boolean}
                }],
            }]
        }]
    }
});

var demoModel = mongoose.model('Demo',demo);

module.exports = demoModel;