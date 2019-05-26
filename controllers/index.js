var express=require('express');
var router=express.Router();

var verifyToken=require('../middleware/verifytoken')

router.use('/user',require('./user')); //user here refers to user of controllers

router.use('/protected',verifyToken,require('./protected'));

module.exports=router;