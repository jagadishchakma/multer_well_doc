function not_found_middleware(req,res,next){
    res.send("OOPs page not found!");
};
module.exports = not_found_middleware;