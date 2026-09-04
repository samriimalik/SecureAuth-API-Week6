exports.notFound=(req,res)=>res.status(404).json({message:`Route not found: ${req.method} ${req.originalUrl}`});
exports.errorHandler=(err,req,res,next)=>{console.error(err);if(err.code===11000)return res.status(400).json({message:'Duplicate value'});res.status(500).json({message:'Internal server error'});};
