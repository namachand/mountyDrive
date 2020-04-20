const express=require('express');
const router=express.Router();
const Hotel=require('../schemas/hotelSchema');
//find a particular item from a database
router.route('/retrieveDetails/:id').get((req,res)=>{
    
    Hotel.findOne({_id:req.params.id})
    .then((result)=>{
        if(!result){
            res.setHeader("content-Type","application/json"); 
            return res.status(404).send({
                success:false,
                message:"records not found"
            });
        }
        else{
            return res.status(200).json({
                success:true,
                result:result
            })
        }
    })
    .catch((err)=>{
        if(err){
            return res.status(500).send({
                success:false,
                message:"error while reteriving the data"
            })
        }
    })
})
//find the whole result from the database
router.route('/retrieveDetails').get((req,res)=>{
    
    Hotel.findOne({})
    .then((result)=>{
        if(!result){
            res.setHeader("content-Type","application/json"); 
            return res.status(404).send({
                success:false,
                message:"records not found"
            });
        }
        else{
            return res.status(200).json({
                success:true,
                result:result
            })
        }
    })
    .catch((err)=>{
        if(err){
            return res.status(500).send({
                success:false,
                message:"error while reteriving the data"
            })
        }
    })
})

module.exports=router;