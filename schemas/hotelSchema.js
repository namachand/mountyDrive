const mongoose=require('mongoose');
const hoteSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    phoneNumber:{
        type:Number,
        validate: {
            validator: function(v) {
              return /^([0-9]{10}$)/.test(v);
            }},
            message:"not a valid phone number must contains 10 digits"
    },
    hotelName:{
        type:String,
        required:true
    },
    numberOfGuests:{
        type:Number,
        required:true
    },


});

module.exports=mongoose.model('Hotel',hoteSchema);