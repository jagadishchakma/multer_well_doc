function error_middleware(err,req,res,next){

    if(err){
        res.render("pages/error.ejs",{err});
    }else{
        res.send(new Error("Error Occured"));
    }
}

module.exports = error_middleware;