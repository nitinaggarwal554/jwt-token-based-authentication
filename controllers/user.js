var express=require('express');
var router=express.Router();
var jwt=require('jsonwebtoken');
var User=require('../models/user');

router.post('/signup',function(req,res){
    var user=new User({
        email:req.body.email,
        password:req.body.password
    });

    user.save(function(err,data){
        if(err){
            console.log(err);
            
        }else{
        res.send('The data is begin posted successfully.');
     
    }
    });
});

router.post('/authenticate',function(req,res){
    var user={
        email:req.body.email,
        password:req.body.password
    };

    User.findOne(user).lean().exec(function(err,userdetail){
        if(err){
            return res.json({error:true});
        }if(!userdetail){
            return res.status(404).json({'message':'user detail not found....'})
        }
        console.log(userdetail);
        var token=jwt.sign(userdetail,global.config.jwt_secret,{
            expiresIn: 1440  //mean expire in 1 hr
        });
        res.send({error: false,token: token});//this command run when all files are correct and whole pg. run
    })
});


module.exports=router;