function error_middleware(err,req,res,next){
    if(err){
        res.send(err.message);
    }else{
        res.send(new Error("Error Occured"));
    }
}

module.exports = error_middleware;