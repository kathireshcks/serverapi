const mongoose = require('mongoose');

const Schema=mongoose.Schema;

const userSchema=new Schema({
    base:String
    
});

module.exports=mongoose.model('chart',userSchema,'chartdata');