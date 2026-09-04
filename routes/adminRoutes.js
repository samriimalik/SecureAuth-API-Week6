const router=require('express').Router(); const User=require('../models/User'); const auth=require('../middleware/authenticate'); const authorize=require('../middleware/authorize');
router.get('/users',auth,authorize('admin'),async(req,res,next)=>{try{const users=await User.find().select('-password').sort({createdAt:-1});res.json({count:users.length,users});}catch(e){next(e);}});
module.exports=router;
