const express=require('express');
const router=express.Router();
const Hotel=require('../schemas/hotelSchema');

router.route('/deleteDetails/:id').get((req,res)=>{
    Hotel.findOneAndDelete({_id:req.params.id})
        .then((result)=>{
        if(!result){
            res.status(404).send({
                success:false,
                message:"could not find the items can't delete the items"
            });
        }
        else{
            res.status(200).send({
                success:true,
                message:"your record has been deleted successfully",
             })
        }
    })
    .catch((err)=>{
        if(err){
            return res.status(500).send({
                success:false,
                message:"error while deleting the data"
            })
        }
    })
})


module.exports=router;