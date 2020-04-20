const express=require('express');
const router=express.Router();
const Hotel=require('../schemas/hotelSchema');
router.route('/hotelDetails').post((req,res)=>{
   
    Hotel.findOne({email:req.body.email})
    .then((result)=>{

        if(!result){
            const hotel=new Hotel({
                name:req.body.name,
                address:req.body.address,
                email:req.body.email,
                phoneNumber:req.body.phoneNumber,
                hotelName:req.body.hotelName,
                numberOfGuests:req.body.numberOfGuests
            })
            hotel.save()
            .then(()=>{
                res.status(200).send({
                    success:true,
                    message:"your record has been saved"
                })
            })
        }
        else{
            res.json({
                message:"email already exists"
            })
        }
    })
    .catch((err)=>{
        if(err){
            return res.status(500).send({
                message:"error storing the data"
            })
        }
    })
})
module.exports=router;