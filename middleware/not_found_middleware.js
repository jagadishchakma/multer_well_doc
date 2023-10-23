function not_found_middleware(req,res,next){
    res.render("pages/not_found.ejs");
};
module.exports = not_found_middleware;