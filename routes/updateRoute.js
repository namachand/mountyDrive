const express=require('express');
const router=express.Router();
const Hotel=require('../schemas/hotelSchema');
//find a particular item from a database
router.route('/updateDetails/:id').put((req,res)=>{
    Hotel.findOneAndUpdate({_id:req.params.id},{$set:{name:req.body.name,address:req.body.address,phoneNumber:req.body.phoneNumber}})
    .then((result)=>{
        if(result){
            res.status(200).json({
                success:true,
                message:"your record has been updated successfully",
                result:result
             })
          }
        
        else{
            res.status(404).send({
                success:false,
                message:"could not find the items can't update the items"
            });
        }
    })
    .catch((err)=>{
        if(err){
            return res.status(500).send({
                success:false,
                message:"error while updating the data"
            })
        }
    })
})


module.exports=router;